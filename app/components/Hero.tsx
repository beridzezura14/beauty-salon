import Link from "next/link";

const stats = [
  { title: "15+", desc: "წლიანი გამოცდილება" },
  { title: "100%", desc: "სისუფთავის სტანდარტი" },
  { title: "5k+", desc: "კმაყოფილი კლიენტი" },
  { title: "Top", desc: "თანამედროვე აპარატურა" },
];

export default function Hero() {
  return (
    <section
      className="relative flex min-h-[68vh] w-full flex-col bg-cover bg-center p-6 md:p-8"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(251, 232, 235, 0.92), rgba(251, 232, 235, 0.72)), url('/hero.png')",
      }}
    >
      <div className="mb-12 flex items-start justify-between text-[9px] uppercase tracking-[0.3em] text-stone-600 md:text-[10px]">
        <span>Est. 2026</span>
        <span>Laser & Aesthetics</span>
      </div>

      <div className="flex flex-1 flex-col items-end gap-12 md:flex-row">
        <div className="w-full flex-1">
          <h1
            className="-ml-[15px] text-[18vw] font-extrabold leading-[0.8] tracking-tighter text-stone-900 md:text-[12vw]"
            style={{
              fontFamily:
                'var(--font-sans), ui-sans-serif, system-ui, sans-serif',
            }}
          >
            PURE.
            <br />
            <span
              className="ml-[6px] text-transparent"
              style={{ WebkitTextStroke: "2px #444" }}
            >
              SKIN.
            </span>
          </h1>
        </div>

        <div className="flex w-full flex-col gap-8 pb-4 md:w-1/3">
          <p className="max-w-[320px] text-sm leading-relaxed text-stone-700">
            თანამედროვე ესთეტიკური სივრცე ლაზერული ეპილაციისა და კანის მოვლისთვის.
            პროცედურები ტარდება სისუფთავის, უსაფრთხოებისა და ინდივიდუალური მიდგომის
            სტანდარტით.
          </p>

          <div className="grid max-w-[320px] grid-cols-2 gap-x-8 gap-y-8">
            {stats.map((item) => (
              <div key={item.title}>
                <div className="text-xl font-bold text-stone-900 md:text-2xl">
                  {item.title}
                </div>
                <div className="text-[9px] uppercase tracking-widest text-stone-500">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/booking"
              className="rounded-full bg-rose-600 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-rose-700"
            >
              დაჯავშნა
            </Link>
            <Link
              href="#services"
              className="px-1 py-3 text-[10px] uppercase tracking-[0.2em] underline decoration-rose-500 underline-offset-8 transition-colors hover:text-rose-600"
            >
              სერვისები
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
