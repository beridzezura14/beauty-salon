"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-cover bg-center  px-6 py-24 md:px-8"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(251, 232, 235, 0.94), rgba(251, 232, 235, 0.72)), url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1600&auto=format&fit=crop')",
      }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-rose-500">
            Contact
          </span>

          <h2 className="mt-4 text-5xl font-bold tracking-tighter text-stone-900 md:text-7xl">
            დაგვიკავშირდი<span className="text-rose-500">.</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          {/* contact info */}
          <div className="rounded-[2.5rem] border border-white/60 bg-white/45 p-8 backdrop-blur-md">
            <div className="space-y-8">
              <Info label="ტელეფონი" value="+995 555 55 55 55" href="tel:+995555555555" />
              <Info label="ელ. ფოსტა" value="hello@beauty.com" href="mailto:hello@beauty.com" />

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

                <div className="flex gap-4">
                  <Social href="#" label="Instagram" />
                  <Social href="#" label="Facebook" />
                  <Social href="https://wa.me/995555555555" label="WhatsApp" />
                </div>
              </div>
            </div>
          </div>

          {/* form */}
          <form className="rounded-[2.5rem] border border-white/70 bg-white/70 p-8 shadow-[0_20px_70px_rgba(120,60,70,0.10)] backdrop-blur-md">
            <div className="grid gap-5">
              <input
                type="text"
                placeholder="სახელი"
                className="h-14 rounded-full border border-rose-100 bg-white/80 px-6 text-sm outline-none transition placeholder:text-stone-400 focus:border-rose-400"
              />

              <input
                type="tel"
                placeholder="ტელეფონი"
                className="h-14 rounded-full border border-rose-100 bg-white/80 px-6 text-sm outline-none transition placeholder:text-stone-400 focus:border-rose-400"
              />

              <select className="h-14 rounded-full border border-rose-100 bg-white/80 px-6 text-sm text-stone-500 outline-none transition focus:border-rose-400">
                <option>აირჩიე სერვისი</option>
                <option>სახის ზონა</option>
                <option>იღლიები</option>
                <option>ბიკინი</option>
                <option>სრული ტანი</option>
              </select>

              <textarea
                placeholder="შეტყობინება"
                rows={5}
                className="resize-none rounded-[1.7rem] border border-rose-100 bg-white/80 p-6 text-sm outline-none transition placeholder:text-stone-400 focus:border-rose-400"
              />

              <button
                type="submit"
                className="mt-2 h-14 rounded-full bg-rose-600 text-sm font-bold text-white transition hover:bg-rose-700"
              >
                გაგზავნა
              </button>
            </div>
          </form>
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