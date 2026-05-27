"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { capsFont } from "../fonts";

const services = [
  {
    cat: "სახე",
    zones: "ზედა ტუჩი, ნიკაპი, ღაწვები",
    price: "20₾-დან",
  },
  {
    cat: "სხეული",
    zones: "იღლიები, მკერდი, ხელები, ფეხები, ზურგი",
    price: "40₾-დან",
  },
  {
    cat: "ბიკინი",
    zones: "ზედაპირული და ღრმა ბიკინი",
    price: "60₾-დან",
  },
  {
    cat: "პაკეტები",
    zones: "სრული ტანი, სახე + იღლიები",
    price: "150₾-დან",
  },
];

export default function Services() {
  return (
    <section className="w-full bg-stone-50 px-6 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div id="services" className="mb-16 scroll-mt-24 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className={`${capsFont.className} max-w-full text-[2rem] font-bold leading-none tracking-tight text-stone-900 sm:text-5xl md:text-7xl md:tracking-tighter`}>
              სერვისები<span className="text-rose-500">.</span>
            </h2>
            <div className="mt-6 max-w-lg">
              <p className="text-sm leading-relaxed text-stone-600 md:text-base">
                თითოეული სერვისი მორგებულია კანის ტიპსა და საჭიროებაზე, რათა შედეგი
                იყოს უსაფრთხო, კომფორტული და ხანგრძლივი.
              </p>
              <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-rose-600">
                თანამედროვე ტექნოლოგია კანის მოვლისთვის
              </p>
            </div>
          </div>

          <span className="hidden pb-2 text-xs uppercase tracking-widest text-stone-400 md:block">
            01 - კატალოგი
          </span>
        </div>

        <div className="flex flex-col gap-3">
          {services.map((service, index) => (
            <motion.div
              key={service.cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative flex flex-col items-center justify-between overflow-hidden rounded-3xl border border-stone-100 bg-white p-8 transition-all duration-500 hover:border-rose-200 md:flex-row md:p-10"
            >
              <div className="absolute inset-0 bg-rose-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10 flex w-full flex-1 flex-col gap-4 md:flex-row md:items-center md:gap-16">
                <span className="w-20 text-xs font-bold uppercase tracking-[0.2em] text-rose-400">
                  0{index + 1}
                </span>
                <span className={`${capsFont.className} w-32 text-xs font-bold uppercase tracking-widest text-stone-900 md:text-xl`}>
                  {service.cat}
                </span>
                <span className="text-[15px] font-medium text-stone-600 md:text-md">
                  {service.zones}
                </span>
              </div>

              <div className="relative z-10 mt-6 flex w-full items-center justify-between gap-8 md:mt-0 md:w-auto md:justify-end">
                <span className="text-xl font-bold text-stone-900">
                  {service.price}
                </span>
                <Link
                  href={`/booking?service=${encodeURIComponent(service.cat)}`}
                  className="border-b-2 border-stone-900 text-[10px] font-bold uppercase tracking-[0.3em] text-stone-900 transition-all hover:border-rose-500 hover:text-rose-500"
                >
                  დაჯავშნა
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
