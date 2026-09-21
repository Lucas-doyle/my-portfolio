import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { escapeHtml } from "@/lib/html";
import { getClientIp, rateLimit } from "@/lib/rate-limit";
import {
  CONTACT_MAX_FILE_BYTES,
  CONTACT_MAX_FILES,
  isAllowedContactFileType,
  safeAttachmentName,
} from "@/lib/contact-files";

function isHoneypotFilled(value: unknown): boolean {
  return typeof value === "string" && value.trim().length > 0;
}

function asText(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value : "";
}

export async function POST(request: NextRequest) {
  try {
    const limited = rateLimit(getClientIp(request));
    if (!limited.ok) {
      return NextResponse.json(
        { error: "Too many messages. Please wait a few minutes and try again." },
        {
          status: 429,
          headers: { "Retry-After": String(limited.retryAfterSec) },
        },
      );
    }

    const formData = await request.formData();

    if (isHoneypotFilled(formData.get("website"))) {
      return NextResponse.json(
        { message: "Contact form submitted successfully" },
        { status: 200 },
      );
    }

    const name = asText(formData.get("name"));
    const email = asText(formData.get("email"));
    const subject = asText(formData.get("subject"));
    const message = asText(formData.get("message"));

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    if (name.length > 100 || subject.length > 200) {
      return NextResponse.json(
        { error: "Name or subject is too long" },
        { status: 400 },
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { error: "Message is too long" },
        { status: 400 },
      );
    }

    const uploaded = formData
      .getAll("files")
      .filter((entry): entry is File => entry instanceof File && entry.size > 0);

    if (uploaded.length > CONTACT_MAX_FILES) {
      return NextResponse.json(
        { error: `You can attach up to ${CONTACT_MAX_FILES} files.` },
        { status: 400 },
      );
    }

    for (const file of uploaded) {
      if (!isAllowedContactFileType(file.type)) {
        return NextResponse.json(
          { error: "Only images, PDF, and text files are allowed." },
          { status: 400 },
        );
      }

      if (file.size > CONTACT_MAX_FILE_BYTES) {
        return NextResponse.json(
          { error: "Each file must be 5MB or smaller." },
          { status: 400 },
        );
      }
    }

    if (!process.env.RESEND_API_KEY || !process.env.EMAIL_TO) {
      console.error("Contact form is not configured");
      return NextResponse.json(
        { error: "Email is not configured" },
        { status: 503 },
      );
    }

    const attachments = await Promise.all(
      uploaded.map(async (file) => ({
        filename: safeAttachmentName(file.name),
        content: Buffer.from(await file.arrayBuffer()),
        contentType: file.type,
      })),
    );

    const resend = new Resend(process.env.RESEND_API_KEY);

    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      <hr style="margin: 20px 0;">
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      <hr style="margin: 20px 0;">
      <p style="color: #666; font-size: 12px;">
        Sent from portfolio contact form on ${escapeHtml(new Date().toLocaleString())}
      </p>
    `;

    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || "onboarding@resend.dev",
      to: process.env.EMAIL_TO,
      subject: `Portfolio Contact: ${subject}`,
      html: emailContent,
      replyTo: email,
      attachments: attachments.length ? attachments : undefined,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 },
      );
    }

    console.log("Email sent successfully");

    return NextResponse.json(
      { message: "Contact form submitted successfully" },
      { status: 200 },
    );
  } catch {
    console.error("Contact form error");
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
