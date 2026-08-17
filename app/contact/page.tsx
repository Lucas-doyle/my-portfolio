"use client";

import {
  Mail,
  MapPin,
  Phone,
  Send,
  Globe,
} from "lucide-react";

export default function ContactPage() {
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
                    value="bruno.silva.94410@gmail.com"
                  />

                <ContactItem
                  icon={<Phone size={16} />}
                  title="Phone"
                  value="+353 86 274 5183"
                />

                <ContactItem
                  icon={<MapPin size={16} />}
                  title="Location"
                  value="Dublin, Ireland"
                />

                <ContactItem
                  icon={<Globe size={16} />}
                  title="Availability"
                  value="Open for new opportunities"
                />
              </div>

              <div className="mt-8 flex gap-2">
                <div className="group relative">
                  <Social icon={<Mail size={15} />} />

                  <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-[12px] text-white opacity-0 transition group-hover:opacity-100">
                    bruno.silva.94410@gmail.com
                  </span>
                </div>

                <div className="group relative">
                  <Social icon={<Phone size={15} />} />

                  <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-[12px] text-white opacity-0 transition group-hover:opacity-100">
                    +353 86 274 5183
                  </span>
                </div>
                <Social icon={<Globe size={15} />} />
              </div>
            </div>

            {/* FORM */}
            <div className="card rounded-xl p-6 md:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  placeholder="Your Name"
                  className="h-12 rounded-lg border border-white/10 bg-[#080d1d] px-4 text-xs text-white outline-none placeholder:text-gray-600 focus:border-violet-500/60"
                />

                <input
                  placeholder="Your Email"
                  type="email"
                  className="h-12 rounded-lg border border-white/10 bg-[#080d1d] px-4 text-xs text-white outline-none placeholder:text-gray-600 focus:border-violet-500/60"
                />
              </div>

              <input
                placeholder="Subject"
                className="mt-4 h-12 w-full rounded-lg border border-white/10 bg-[#080d1d] px-4 text-xs text-white outline-none placeholder:text-gray-600 focus:border-violet-500/60"
              />

              <textarea
                placeholder="Your Message"
                rows={8}
                className="mt-4 w-full resize-none rounded-lg border border-white/10 bg-[#080d1d] px-4 py-4 text-xs text-white outline-none placeholder:text-gray-600 focus:border-violet-500/60"
              />

              <button
                type="button"
                className="mt-4 flex items-center gap-2 rounded-lg bg-violet-600 px-6 py-3 text-xs font-semibold text-white transition hover:bg-violet-500"
              >
                Send Message
                <Send size={13} />
              </button>
            </div>
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

function Social({
  icon,
}: {
  icon: React.ReactNode;
}) {
  return (
    <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-500 hover:border-violet-500/30 hover:text-violet-400">
      {icon}
    </button>
  );
}