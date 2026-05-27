'use client';
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    { cat: "სახე", zones: "ზედა ტუჩი, ნიკაპი, ღაწვები", price: "20₾" },
    { cat: "სხეული", zones: "იღლიები, მკერდი, ხელები, ფეხები, ზურგი", price: "40₾" },
    { cat: "ბიკინი", zones: "ზედაპირული, ღრმა ბიკინი", price: "60₾" },
    { cat: "პაკეტები", zones: "სრული ტანი, სახე + იღლიები", price: "150₾" }
  ];

  return (
    <section id="services" className="w-full py-24 px-6 md:px-8 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold text-stone-900 tracking-tighter">
              სერვისები<span className="text-rose-500">.</span>
            </h2>
            {/* აქ შევცვალე ტექსტი და დავუმატე მეტი სივრცე */}
            <div className="mt-6 max-w-lg">
              <p className="text-stone-600 leading-relaxed text-sm md:text-base">
                ჩვენი ესთეტიკური ცენტრი გთავაზობთ უმაღლესი სტანდარტის ლაზერულ პროცედურებს. 
                თითოეული სერვისი მორგებულია თქვენს ინდივიდუალურ საჭიროებებზე, 
                რათა უზრუნველვყოთ უსაფრთხო, ეფექტური და ხანგრძლივი შედეგი.
              </p>
              <p className="text-rose-600 mt-4 tracking-[0.2em] uppercase text-[10px] font-bold">
                ინოვაციური ტექნოლოგია — სრულყოფილი კანისთვის
              </p>
            </div>
          </div>
          
          <span className="text-stone-400 text-xs uppercase tracking-widest hidden md:block pb-2">
            01 — კატალოგი
          </span>
        </div>

        <div className="flex flex-col gap-3">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative flex flex-col md:flex-row items-center justify-between p-8 md:p-10 bg-white rounded-3xl border border-stone-100 hover:border-rose-200 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-rose-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-16 flex-1 w-full">
                <span className="text-rose-400 font-bold text-xs uppercase tracking-[0.2em] w-20">
                  0{i + 1}
                </span>
                <span className="text-stone-900 font-bold uppercase tracking-widest text-xs md:text-sm w-32">
                  {s.cat}
                </span>
                <span className="text-stone-600 font-medium text-lg md:text-xl">
                  {s.zones}
                </span>
              </div>
              
              <div className="relative z-10 mt-6 md:mt-0 flex items-center gap-12 w-full md:w-auto justify-between md:justify-end">
                <span className="text-xl font-bold text-stone-900">
                  {s.price}
                </span>
                <button className="cursor-pointer text-[10px] font-bold uppercase tracking-[0.3em] text-stone-900 border-b-2 border-stone-900 hover:border-rose-500 hover:text-rose-500 transition-all">
                  დაჯავშნა
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}