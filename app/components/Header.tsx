"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "მთავარი", href: "/" },
  { name: "სერვისები", href: "/#services" },
  { name: "გალერეა", href: "/#gallery" },
  { name: "კონტაქტი", href: "/#contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-rose-50 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 items-center justify-between px-6 md:px-8">
        <Link href="/" className="text-xl font-bold tracking-tight text-rose-600">
          PURE SKIN
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-rose-600"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/booking"
            className="rounded-full bg-rose-600 px-6 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-700"
          >
            დაჯავშნა
          </Link>
        </nav>

        <button
          type="button"
          className="text-sm font-bold uppercase text-gray-600 md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-label="მენიუს გახსნა"
        >
          {isOpen ? "დახურვა" : "მენიუ"}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-b border-rose-50 bg-white md:hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-gray-50 py-2 text-lg text-gray-700 last:border-0"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/booking"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-lg bg-rose-600 py-3 text-center font-semibold text-white"
              >
                დაჯავშნა
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
