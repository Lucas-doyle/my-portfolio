"use client";

import {
  Mail,
  MapPin,
  Phone,
  Send,
  Globe,
  Paperclip,
} from "lucide-react";
import { useState } from "react";
import { site, siteLinks } from "@/data/site";
import {
  CONTACT_ACCEPT,
  CONTACT_MAX_FILE_BYTES,
  CONTACT_MAX_FILES,
} from "@/lib/contact-files";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [files, setFiles] = useState<File[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('subject', formData.subject);
      payload.append('message', formData.message);
      payload.append('website', formData.website);
      files.forEach((file) => {
        payload.append('files', file);
      });

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: payload,
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '', website: '' });
        setFiles([]);
      } else {
        setSubmitStatus('error');
        if (response.status === 503) {
          setErrorMessage(
            'Email is not set up yet. Please use the address on the left, or try again later.',
          );
        } else if (response.status === 429) {
          setErrorMessage(
            'Too many messages. Please wait a few minutes and try again.',
          );
        } else {
          setErrorMessage(data.error || 'Failed to send message');
        }
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="page">
      <div className="container-page py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            {/* LEFT */}
            <div>
              <p className="section-eyebrow">
                Contact
              </p>

              <h1 className="section-heading mt-2">
                Get In Touch
              </h1>

              <p className="mt-4 max-w-md text-sm leading-7 text-gray-400">
                I&apos;d love to hear about your project, product idea,
                AI initiative or engineering opportunity. Feel free
                to reach out and let&apos;s start a conversation.
              </p>

              <div className="mt-9 space-y-6">
                  <ContactItem
                    icon={<Mail size={16} />}
                    title="Email"
                    value={site.email}
                  />

                <ContactItem
                  icon={<Phone size={16} />}
                  title="Phone"
                  value={site.phone}
                />

                <ContactItem
                  icon={<MapPin size={16} />}
                  title="Location"
                  value={site.location}
                />

                <ContactItem
                  icon={<Globe size={16} />}
                  title="Availability"
                  value={site.availability}
                />
              </div>

              <div className="mt-8 flex gap-2">
                <a
                  href={siteLinks.email}
                  className="group relative flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-500 hover:border-violet-500/30 hover:text-violet-400"
                >
                  <Mail size={15} />
                  <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-[12px] text-white opacity-0 transition group-hover:opacity-100">
                    {site.email}
                  </span>
                </a>

                <a
                  href={siteLinks.phone}
                  className="group relative flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-500 hover:border-violet-500/30 hover:text-violet-400"
                >
                  <Phone size={15} />
                  <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-[12px] text-white opacity-0 transition group-hover:opacity-100">
                    {site.phone}
                  </span>
                </a>

                <a
                  href={siteLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-500 hover:border-violet-500/30 hover:text-violet-400"
                >
                  <Globe size={15} />
                  <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-[12px] text-white opacity-0 transition group-hover:opacity-100">
                    GitHub
                  </span>
                </a>
              </div>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="relative card rounded-xl p-6 md:p-8">
              <div className="sr-only" aria-hidden="true">
                <label htmlFor="contact-website">Website</label>
                <input
                  id="contact-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12 rounded-lg border border-white/10 bg-[#080d1d] px-4 text-xs text-white outline-none placeholder:text-gray-600 focus:border-violet-500/60"
                />

                <input
                  name="email"
                  placeholder="Your Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12 rounded-lg border border-white/10 bg-[#080d1d] px-4 text-xs text-white outline-none placeholder:text-gray-600 focus:border-violet-500/60"
                />
              </div>

              <input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="mt-4 h-12 w-full rounded-lg border border-white/10 bg-[#080d1d] px-4 text-xs text-white outline-none placeholder:text-gray-600 focus:border-violet-500/60"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={8}
                className="mt-4 w-full resize-none rounded-lg border border-white/10 bg-[#080d1d] px-4 py-4 text-xs text-white outline-none placeholder:text-gray-600 focus:border-violet-500/60"
              />

              <label className="mt-4 flex cursor-pointer items-center gap-2 rounded-lg border border-dashed border-white/10 bg-[#080d1d] px-4 py-3 text-xs text-gray-500 transition hover:border-violet-500/40 hover:text-gray-300">
                <Paperclip size={14} className="text-violet-400" />
                <span>
                  Attach images or files
                  {files.length > 0
                    ? ` (${files.length} selected)`
                    : ` (optional, max ${CONTACT_MAX_FILES})`}
                </span>
                <input
                  type="file"
                  name="files"
                  multiple
                  accept={CONTACT_ACCEPT}
                  className="sr-only"
                  onChange={(event) => {
                    const selected = Array.from(event.target.files ?? []);
                    if (selected.length > CONTACT_MAX_FILES) {
                      setSubmitStatus('error');
                      setErrorMessage(
                        `You can attach up to ${CONTACT_MAX_FILES} files.`,
                      );
                      event.target.value = '';
                      return;
                    }

                    const tooLarge = selected.some(
                      (file) => file.size > CONTACT_MAX_FILE_BYTES,
                    );
                    if (tooLarge) {
                      setSubmitStatus('error');
                      setErrorMessage('Each file must be 5MB or smaller.');
                      event.target.value = '';
                      return;
                    }

                    setSubmitStatus('idle');
                    setErrorMessage('');
                    setFiles(selected);
                  }}
                />
              </label>
              {files.length > 0 && (
                <p className="mt-2 text-[11px] text-gray-500">
                  {files.map((file) => file.name).join(', ')}
                </p>
              )}

              {submitStatus === 'success' && (
                <div className="mt-4 rounded-lg bg-green-500/10 border border-green-500/20 px-4 py-3 text-xs text-green-400">
                  Message sent successfully! I&apos;ll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-3 text-xs text-red-400">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 flex items-center gap-2 rounded-lg bg-violet-600 px-6 py-3 text-xs font-semibold text-white transition hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send size={13} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400">
        {icon}
      </div>

      <div>
        <p className="text-[10px] text-gray-600">
          {title}
        </p>

        <p className="mt-1 text-xs text-gray-300">
          {value}
        </p>
      </div>
    </div>
  );
}