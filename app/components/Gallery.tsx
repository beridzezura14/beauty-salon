"use client";

import { motion } from "framer-motion";

export default function Gallery() {
const leftImages = [
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1607008829749-c0f284a49767?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1200&auto=format&fit=crop",
];

const rightImages = [
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=1200&auto=format&fit=crop",
];
  return (
    <section
      id="gallery"
      className="w-full overflow-hidden bg-[#fbf3f4] px-6 py-24 pb-44 md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        {/* heading */}
        <div className="mb-16 flex items-end justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-rose-500">
              Gallery
            </span>

            <h2 className="mt-4 text-5xl md:text-7xl font-bold tracking-tighter text-stone-900">
              ჩვენი სივრცე<span className="text-rose-500">.</span>
            </h2>
          </div>

          <p className="hidden md:block max-w-xs text-sm leading-relaxed text-stone-500">
            თანამედროვე გარემო, პრემიუმ ზრუნვა და ესთეტიკური გამოცდილება.
          </p>
        </div>

        {/* gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* left column */}
          <div className="flex flex-col gap-6">
            {leftImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group overflow-hidden bg-white p-2 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
              >
                <img
                  src={img}
                  alt=""
                  className="h-[320px] w-full  object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>

          {/* right column */}
          <div className="flex flex-col gap-6 md:translate-y-24">
            {rightImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group overflow-hidden bg-white p-2 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
              >
                <img
                  src={img}
                  alt=""
                  className="h-[320px] w-full ხ„object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}