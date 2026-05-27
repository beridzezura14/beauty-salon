"use client";

import { motion } from "framer-motion";
import { capsFont } from "../fonts";

const reviews = [
  {
    text: "ძალიან კომფორტული გარემო და ყურადღებიანი მომსახურება. პროცედურის შემდეგ შედეგით კმაყოფილი ვარ.",
    name: "ანა მ.",
  },
  {
    text: "ყველაფერი სუფთად და მშვიდად ჩატარდა. კონსულტაციაც დეტალური იყო და ზუსტად ვიცოდი რას ველოდებოდი.",
    name: "თაკო გ.",
  },
  {
    text: "თანამედროვე სივრცე, კარგი მომსახურება და სასიამოვნო გუნდი. აუცილებლად დავბრუნდები.",
    name: "ნინი კ.",
  },
];

const stats = [
  { value: "5k+", label: "კმაყოფილი კლიენტი" },
  { value: "15+", label: "წლიანი გამოცდილება" },
  { value: "100%", label: "სისუფთავის სტანდარტი" },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-[#fff7f8] px-6 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-rose-500">
              Reviews
            </span>

            <h2 className={`${capsFont.className} mt-4 max-w-full text-[2rem] font-bold leading-none tracking-tight text-stone-900 sm:text-5xl md:text-7xl md:tracking-tighter`}>
              რას ამბობენ
              <br />
              ჩვენზე<span className="text-rose-500">.</span>
            </h2>
          </div>

          <div className="hidden text-right md:block">
            <div className="text-5xl font-bold tracking-tighter text-stone-900">
              4.9
            </div>

            <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-stone-400">
              Average Rating
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-[2rem] bg-white p-8 shadow-[0_20px_70px_rgba(0,0,0,0.05)]"
            >
              <div className="mb-6 flex gap-1 text-rose-500">
                ★ ★ ★ ★ ★
              </div>

              <p className="text-lg leading-relaxed text-stone-700">
                "{review.text}"
              </p>

              <div className="mt-10">
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-stone-900">
                  {review.name}
                </div>

                <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-stone-400">
                  Verified Client
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.value}
              className="rounded-[2rem] border border-rose-100 bg-white/70 px-8 py-7 text-center"
            >
              <div className="text-4xl font-bold tracking-tighter text-stone-900">
                {item.value}
              </div>

              <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-stone-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
