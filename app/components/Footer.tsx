import Link from "next/link";

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-stone-950 px-6 py-16 text-white md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-14 border-b border-white/10 pb-14 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href="/" className="text-2xl font-bold tracking-tight text-white">
              PURE SKIN
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50">
              თანამედროვე ლაზერული ეპილაცია, კანის მოვლა და ესთეტიკური მომსახურება
              მშვიდ, სუფთა და კომფორტულ გარემოში.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-white/40">
                Navigation
              </p>

              <div className="flex flex-col gap-3">
                <FooterLink href="/">მთავარი</FooterLink>
                <FooterLink href="/#services">სერვისები</FooterLink>
                <FooterLink href="/#gallery">გალერეა</FooterLink>
                <FooterLink href="/#contact">კონტაქტი</FooterLink>
                <FooterLink href="/booking">დაჯავშნა</FooterLink>
              </div>
            </div>

            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-white/40">
                Contact
              </p>

              <div className="flex flex-col gap-3 text-sm text-white/70">
                <a href="tel:+995555555555" className="transition hover:text-rose-300">
                  +995 555 55 55 55
                </a>
                <a href="mailto:hello@pureskin.ge" className="transition hover:text-rose-300">
                  hello@pureskin.ge
                </a>
                <span>თბილისი, ვაკე</span>
              </div>
            </div>

            <div>
              <p className="mb-5 text-[10px] uppercase tracking-[0.35em] text-white/40">
                Social
              </p>

              <div className="flex flex-col gap-3">
                <Social href="https://instagram.com/" label="Instagram" />
                <Social href="https://facebook.com/" label="Facebook" />
                <Social href="https://wa.me/995555555555" label="WhatsApp" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 pt-8 text-xs uppercase tracking-[0.25em] text-white/35 md:flex-row md:items-center md:justify-between">
          <p>© 2026 PURE SKIN</p>
          <p>
            შექმნილია{" "}
            <a href="https://anrastudio.com" className="text-rose-300 hover:underline">
              ANRA Studio
            </a>
            -ს მიერ
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-white/70 transition hover:text-rose-300">
      {children}
    </Link>
  );
}

function Social({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-sm text-white/70 transition hover:text-rose-300"
    >
      {label}
    </a>
  );
}
