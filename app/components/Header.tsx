'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'მთავარი', href: '/' },
    { name: 'სერვისები და ფასები', href: '#services' },
    { name: 'კონტაქტი', href: '#contact' },
  ];

  return (
    <header className="w-full bg-white border-b border-rose-50 sticky top-0 z-50">
      {/* 
        აქ დაცულია ზუსტად იგივე max-w-7xl და px-10, 
        რაც Hero სექციაში გაქვს, რომ ელემენტები ერთმანეთს დაემთხვეს 
      */}
      <div className="mx-auto px-8 h-20 flex items-center justify-between">
        
        {/* ლოგო */}
        <Link href="/" className="text-xl font-bold text-rose-600 tracking-tight">
          BEAUTY_LOGO
        </Link>

        {/* დესკტოპ მენიუ */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-gray-600 hover:text-rose-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/booking" 
            className="bg-rose-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-rose-700 transition-all shadow-sm"
          >
            დაჯავშნა
          </Link>
        </nav>

        {/* მობილურის ღილაკი */}
        <button 
          className="md:hidden text-gray-600 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-sm font-bold uppercase">{isOpen ? 'დახურვა' : 'მენიუ'}</span>
        </button>
      </div>

      {/* მობილურის ანიმირებული მენიუ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: 'auto', opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white border-b border-rose-50"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)} 
                  className="text-lg text-gray-700 py-2 border-b border-gray-50 last:border-0"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/booking" 
                onClick={() => setIsOpen(false)} 
                className="bg-rose-600 text-white text-center py-3 mt-2 rounded-lg font-semibold"
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