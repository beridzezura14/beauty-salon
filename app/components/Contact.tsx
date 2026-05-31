"use client";

import BookingForm from "./BookingForm";
import { capsFont } from "../fonts";

export default function Contact() {
  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-center bg-fixed px-6 py-24 md:px-8"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(251, 232, 235, 0.94), rgba(251, 232, 235, 0.72)), url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1600&auto=format&fit=crop')",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <div id="contact" className="mb-14 scroll-mt-24">
          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-rose-500">
            Contact
          </span>

          <h2 className={`${capsFont.className} mt-4 max-w-full text-[2rem] font-bold leading-none tracking-tight text-stone-900 sm:text-5xl md:text-7xl md:tracking-tighter`}>
            დაგვიკავშირდი<span className="text-rose-500">.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/60 bg-white/45 p-8 backdrop-blur-md">
            <div className="space-y-8">
              <Info label="ტელეფონი" value="+995 555 55 55 55" href="tel:+995555555555" />
              <Info label="ელ. ფოსტა" value="hello@pureskin.ge" href="mailto:hello@pureskin.ge" />

              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500">
                  მისამართი
                </p>
                <p className="mt-3 text-lg font-semibold text-stone-900">
                  თბილისი, ვაკე <br />
                  ჭავჭავაძის გამზირი 00
                </p>
              </div>

              <div>
                <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-stone-500">
                  სოციალური ქსელები
                </p>

                <div className="flex flex-wrap gap-4">
                  <Social href="https://instagram.com/" label="Instagram" />
                  <Social href="https://facebook.com/" label="Facebook" />
                  <Social href="https://wa.me/995555555555" label="WhatsApp" />
                </div>
              </div>
            </div>
          </div>

          <BookingForm />
        </div>
      </div>
    </section>
  );
}

function Info({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500">
        {label}
      </p>
      <a
        href={href}
        className="mt-3 block text-lg font-semibold text-stone-900 transition hover:text-rose-600"
      >
        {value}
      </a>
    </div>
  );
}

function Social({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-full border border-stone-300 bg-white/60 px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-stone-700 transition hover:border-rose-400 hover:text-rose-600"
    >
      {label}
    </a>
  );
}
