"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    // გრადიენტი რჩება, ტექსტები და ფერები ადაპტირებულია
    <section
      className="relative w-full p-6 md:p-8 flex flex-col min-h-[60vh] bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(251, 232, 235, 0.9), rgba(251, 232, 235, 0.7)), url('hero.png')`,
      }}
    >
      {/* ლოგო კუთხეებში - ტექსტი მუქი */}
      <div className="flex justify-between items-start text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-stone-600 mb-12">
        <span>Est. 2026</span>
        <span>Laser & Aesthetics</span>
      </div>

      <div className="flex-1 flex flex-col md:flex-row items-end gap-12">
        {/* სათაური: ტექსტი მუქი, კონტური მუქი */}
        <div className="flex-1 w-full">
          <h1 className="text-[18vw] md:text-[12vw] leading-[0.8] font-bold text-stone-900 tracking-tighter -ml-[15px]">
            PURE.
            <br />
            <span
              className="text-transparent stroke-text ml-[6px]"
              style={{ WebkitTextStroke: "1px #444" }}
            >
              SKIN.
            </span>
          </h1>
        </div>

        {/* მარჯვენა ბლოკი */}
        <div className="w-full md:w-1/3 flex flex-col gap-8 pb-4">
          <p className="text-stone-700 text-sm leading-relaxed max-w-[300px]">
            ჩვენი მიზანია შემოგთავაზოთ ესთეტიკური მედიცინის უმაღლესი სტანდარტი,
            სადაც თითოეული პროცედურა არის ზრუნვისა და ტექნოლოგიური სიზუსტის
            სინთეზი.
          </p>

          {/* გრიდი: ტექსტი მუქი */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-8 max-w-[300px]">
            {[
              { title: "15+", desc: "წლიანი გამოცდილება" },
              { title: "100%", desc: "უსაფრთხოების გარანტია" },
              { title: "5k+", desc: "ბედნიერი კლიენტი" },
              { title: "Top", desc: "ტექნოლოგიები" },
            ].map((item, i) => (
              <div key={i}>
                <div className="text-xl md:text-2xl font-bold text-stone-900">
                  {item.title}
                </div>
                <div className="text-[9px] uppercase tracking-widest text-stone-500">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

          <button className="text-[10px] uppercase tracking-[0.2em] underline underline-offset-8 decoration-rose-500 hover:text-rose-600 transition-colors w-fit mt-4">
            გაეცანი სერვისებს
          </button>
        </div>
      </div>
    </section>
  );
}
