"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-stone-950 px-6 py-16 text-white md:px-8">
      <div className="mx-auto max-w-6xl">
        {/* top */}
        <div className="flex flex-col gap-14 border-b border-white/10 pb-14 md:flex-row md:items-start md:justify-between">
          
          {/* logo */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight text-white"
            >
              BEAUTY_LOGO
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50">
              თანამედროვე ლაზერული ეპილაცია, პრემიუმ მომსახურება და
              ესთეტიკური გამოცდილება.
            </p>
          </div>

          {/* links */}
          <div className="grid gap-10 sm:grid-cols-3">
            
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-white/40">
                Navigation
              </p>

              <div className="flex flex-col gap-3">
                <Link
                  href="/"
                  className="text-sm text-white/70 transition hover:text-rose-300"
                >
                  მთავარი
                </Link>

                <Link
                  href="#services"
                  className="text-sm text-white/70 transition hover:text-rose-300"
                >
                  სერვისები
                </Link>

                <Link
                  href="#gallery"
                  className="text-sm text-white/70 transition hover:text-rose-300"
                >
                  გალერეა
                </Link>

                <Link
                  href="#contact"
                  className="text-sm text-white/70 transition hover:text-rose-300"
                >
                  კონტაქტი
                </Link>
              </div>
            </div>

            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-white/40">
                Contact
              </p>

              <div className="flex flex-col gap-3 text-sm text-white/70">
                <a
                  href="tel:+995555555555"
                  className="transition hover:text-rose-300"
                >
                  +995 555 55 55 55
                </a>

                <a
                  href="mailto:hello@beauty.com"
                  className="transition hover:text-rose-300"
                >
                  hello@beauty.com
                </a>

                <span>თბილისი, ვაკე</span>
              </div>
            </div>

            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-white/40">
                Social
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href="#"
                  className="text-sm text-white/70 transition hover:text-rose-300"
                >
                  Instagram
                </a>

                <a
                  href="#"
                  className="text-sm text-white/70 transition hover:text-rose-300"
                >
                  Facebook
                </a>

                <a
                  href="https://wa.me/995555555555"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-white/70 transition hover:text-rose-300"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="flex flex-col gap-6 pt-8 text-xs uppercase tracking-[0.25em] text-white/35 md:flex-row md:items-center md:justify-between">
          <p>© 2026 BEAUTY_LOGO</p>

          <p>შექმნილია <a href="https://anrastudio.com" className="text-rose-300 hover:underline">ANRA Studio</a>-ს მიერ</p>
        </div>
      </div>
    </footer>
  );
}