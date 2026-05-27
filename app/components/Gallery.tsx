"use client";

import { motion } from "framer-motion";
import { capsFont } from "../fonts";

const leftImages = [
  "https://images.unsplash.com/photo-1702312721918-62235a0b77d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhY2UlMjBlcGlsYXRpb258ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1685979979782-759cbdd528ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGVwaWxhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1200&auto=format&fit=crop",
];

const rightImages = [
  "https://images.unsplash.com/photo-1661308675370-31455561e15e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGJvZHklMjBlcGlsYXRpb258ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1689400268913-be2e6e884ef8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGJvZHklMjBlcGlsYXRpb258ZW58MHx8MHx8fDA%3D",
];

export default function Gallery() {
  return (
    <section
      className="w-full overflow-hidden bg-[#fbf3f4] px-6 py-24 pb-44 md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div id="gallery" className="mb-16 scroll-mt-24 flex items-end justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-rose-500">
              Gallery
            </span>

            <h2 className={`${capsFont.className} mt-4 max-w-full text-[2rem] font-bold leading-none tracking-tight text-stone-900 sm:text-5xl md:text-7xl md:tracking-tighter`}>
              ჩვენი სივრცე<span className="text-rose-500">.</span>
            </h2>
          </div>

          <p className="hidden max-w-xs text-sm leading-relaxed text-stone-500 md:block">
            სუფთა, მშვიდი და თანამედროვე გარემო, სადაც პროცედურა მარტივი და კომფორტულია.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            {leftImages.map((img, index) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group overflow-hidden bg-white p-2 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
              >
                <img
                  src={img}
                  alt="სალონის ინტერიერი"
                  className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col gap-6 md:translate-y-24">
            {rightImages.map((img, index) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group overflow-hidden bg-white p-2 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
              >
                <img
                  src={img}
                  alt="ესთეტიკური პროცედურის სივრცე"
                  className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
