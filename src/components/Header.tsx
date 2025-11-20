'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/services', label: 'Services' },
  { href: '/impact', label: 'Impact / CSR' },
  { href: '/media', label: 'Media' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 border-b border-brown-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="container flex items-center justify-between gap-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-gold-500 shadow">
            <Image src="/pics/IMG-20250315-WA0014.jpg" alt="Kyidom Foods logo" fill className="object-cover" priority />
          </div>
          <div className="leading-tight">
            <span className="text-[0.65rem] uppercase tracking-[0.45em] text-gold-600">Kyidom Foods</span>
            <p className="font-display text-lg font-semibold text-brown-900">Company Ltd</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-brown-700 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-gold-600">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/contact" className="rounded-full bg-gold-500 px-5 py-2 text-sm font-semibold text-brown-900 shadow hover:bg-gold-400">
            Partner With Us
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className="inline-flex rounded-full border border-brown-900/20 p-2 text-brown-900 lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-brown-100 bg-white lg:hidden">
          <div className="container flex flex-col gap-3 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-brown-800 hover:text-gold-600"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-3">
              {/* Shop link removed */}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-gold-500 px-5 py-2 text-center text-sm font-semibold text-brown-900 shadow hover:bg-gold-400"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}