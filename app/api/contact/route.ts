import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { escapeHtml } from "@/lib/html";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string;
}

function isHoneypotFilled(value: unknown): boolean {
  return typeof value === "string" && value.trim().length > 0;
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

    const body: ContactFormData = await request.json();

    if (isHoneypotFilled(body.website)) {
      return NextResponse.json(
        { message: "Contact form submitted successfully" },
        { status: 200 },
      );
    }

    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    if (body.name.length > 100 || body.subject.length > 200) {
      return NextResponse.json(
        { error: "Name or subject is too long" },
        { status: 400 },
      );
    }

    if (body.message.length > 5000) {
      return NextResponse.json(
        { error: "Message is too long" },
        { status: 400 },
      );
    }

    if (!process.env.RESEND_API_KEY || !process.env.EMAIL_TO) {
      console.error("Contact form is not configured");
      return NextResponse.json(
        { error: "Email is not configured" },
        { status: 503 },
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(body.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(body.email)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(body.subject)}</p>
      <hr style="margin: 20px 0;">
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(body.message)}</p>
      <hr style="margin: 20px 0;">
      <p style="color: #666; font-size: 12px;">
        Sent from portfolio contact form on ${escapeHtml(new Date().toLocaleString())}
      </p>
    `;

    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || "onboarding@resend.dev",
      to: process.env.EMAIL_TO,
      subject: `Portfolio Contact: ${body.subject}`,
      html: emailContent,
      replyTo: body.email,
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
