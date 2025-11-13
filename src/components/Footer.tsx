import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, MapPin, Mail, Phone } from 'lucide-react';

const contactDetails = [
  {
    label: 'Head Office',
    lines: ['Kasoa Otta City, Ghana', '+233 (0) 574 486 131', '+233 (0) 207 758 300'],
    icon: MapPin,
  },
  {
    label: 'Customer Care',
    lines: ['info@jirehaidoo.com', 'Responses within one business day'],
    icon: Mail,
  },
];

const openingHours = [
  { day: 'Monday – Tuesday', hours: '08:00 – 17:30 GMT' },
  { day: 'Wednesday – Thursday', hours: '08:00 – 18:00 GMT' },
  { day: 'Friday', hours: '08:00 – 16:30 GMT' },
  { day: 'Saturday', hours: '09:00 – 13:00 GMT' },
];

const footerLinks = [
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/services', label: 'Services' },
  { href: '/impact', label: 'Impact' },
  { href: '/media', label: 'Media' },
  { href: '/contact', label: 'Contact' },
];

const partnerCredits = ['Empowered by Jireh-Aidoo', 'Read by Jireh-Aidoo', 'Kyidom Farmer Network'];

export default function Footer() {
  return (
    <footer className="bg-[#140b07] text-amber-50">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#43302b] via-[#2b1a12] to-[#140b07]" aria-hidden="true" />
        <div className="absolute inset-0">
          <Image src="/pics/IMG-20250315-WA0032.jpg" alt="Kyidom grain texture" fill className="object-cover opacity-25 mix-blend-soft-light" />
        </div>
        <div className="absolute -top-24 left-0 right-0 h-32 rotate-2 bg-[#201008] opacity-70" aria-hidden="true" />

        <div className="relative container mx-auto max-w-6xl px-4 py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.15fr,0.85fr]">
            <div className="space-y-10">
              <div className="space-y-4 text-amber-50">
                <span className="text-xs uppercase tracking-[0.4em] text-amber-200/80">Kyidom Foods</span>
                <h2 className="font-display text-3xl font-semibold lg:text-4xl">Ghana&apos;s trusted rice value-chain partner</h2>
                <p className="max-w-xl text-sm text-amber-100/85">
                  From field support to premium packaging, we help farmers, retailers, and chefs deliver aromatic Kyidom rice to households across Ghana.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 text-sm text-amber-100/85">
                <div className="rounded-3xl border border-amber-500/25 bg-white/5 p-6 backdrop-blur-md">
                  <h3 className="text-lg font-semibold text-white">Visit & contact</h3>
                  <ul className="mt-5 space-y-4 text-sm">
                    {contactDetails.map(({ label, lines, icon: Icon }) => {
                      const IconComponent = Icon ?? Phone;
                      return (
                        <li key={label} className="flex items-start gap-3">
                          <IconComponent className="mt-1 h-4 w-4 flex-shrink-0 text-amber-300" aria-hidden="true" />
                          <div>
                            <p className="font-semibold text-white">{label}</p>
                            {lines.map((line) => (
                              <p key={line} className="text-xs text-amber-100/80">
                                {line}
                              </p>
                            ))}
                          </div>
                        </li>
                      );
                    })}
                    <li className="flex items-start gap-3">
                      <Phone className="mt-1 h-4 w-4 flex-shrink-0 text-amber-300" aria-hidden="true" />
                      <div>
                        <p className="font-semibold text-white">Hotline</p>
                        <p className="text-xs text-amber-100/80">+233 (0) 574 486 131</p>
                        <p className="text-xs text-amber-100/80">+233 (0) 207 758 300</p>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold">
                    <Link href="/contact" className="inline-flex items-center rounded-full bg-amber-400 px-5 py-2 text-[#140b07] hover:bg-amber-300">
                      Speak with our team
                    </Link>
                    <a
                      href="https://www.facebook.com"
                      className="inline-flex items-center rounded-full border border-amber-400/50 px-5 py-2 text-amber-100 hover:bg-amber-400/10"
                    >
                      Follow on Facebook
                    </a>
                  </div>
                </div>

                <div className="rounded-3xl border border-amber-500/25 bg-white/5 p-6 backdrop-blur-md">
                  <h3 className="text-lg font-semibold text-white">Opening hours</h3>
                  <ul className="mt-5 space-y-3 text-xs text-amber-100/80">
                    {openingHours.map((slot) => (
                      <li key={slot.day} className="flex items-center justify-between gap-3 rounded-xl bg-[#2c160d]/60 px-4 py-3">
                        <span className="font-semibold text-white">{slot.day}</span>
                        <span>{slot.hours}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-xs text-amber-200/80">After-hours deliveries can be arranged for distributor partners on request.</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.7rem] uppercase tracking-[0.3em] text-amber-200/70">
                {partnerCredits.map((credit) => (
                  <span key={credit}>{credit}</span>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-amber-500/25 bg-white/5 p-6 text-amber-100/90 shadow-lg backdrop-blur-md">
              <div className="absolute inset-0">
                <Image src="/pics/IMG-20250315-WA0026.jpg" alt="Kyidom distribution map" fill className="object-cover opacity-30 mix-blend-soft-light" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#2d140c]/75 via-[#1d0e07]/65 to-[#120905]/85" />
              </div>
              <div className="relative space-y-5">
                <h3 className="text-lg font-semibold text-white">From farm gates to dining tables</h3>
                <p className="text-xs text-amber-100/85">
                  Kyidom rice travels through a traceable network of farmer cooperatives, modern mills, and retail partners to keep premium Ghanaian grains within reach.
                </p>
                <div className="grid gap-4 text-xs">
                  <div className="rounded-2xl border border-amber-400/20 bg-white/10/10 p-4">
                    <p className="font-semibold text-white">Retail presence</p>
                    <p className="mt-1 text-amber-100/75">Accra · Cape Coast · Tamale · Takoradi</p>
                  </div>
                  <div className="rounded-2xl border border-amber-400/20 bg-white/10/10 p-4">
                    <p className="font-semibold text-white">Bulk supply</p>
                    <p className="mt-1 text-amber-100/75">Hotels · Restaurants · School feeding · Export crates</p>
                  </div>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-amber-400" />
                    <p>Guaranteed aroma retention and moisture control across every batch.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-amber-400" />
                    <p>Partner logistics covering last-mile delivery across major cities.</p>
                  </div>
                </div>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center rounded-full bg-amber-400 px-5 py-2 text-sm font-semibold text-[#140b07] shadow hover:bg-amber-300"
                >
                  View product catalogue
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-amber-500/25 bg-[#110704]">
        <div className="container mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-6 text-[0.72rem] text-amber-200/75 md:flex-row md:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-amber-300">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-amber-400/40 hover:bg-amber-400/10">
              <Facebook className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="https://www.instagram.com" className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-amber-400/40 hover:bg-amber-400/10">
              <Instagram className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="mailto:info@jirehaidoo.com" className="inline-flex h-8 items-center px-3 rounded-full border border-amber-400/40 hover:bg-amber-400/10">
              info@jirehaidoo.com
            </a>
          </div>
        </div>
        <div className="bg-[#0c0503] py-4 text-center text-[0.72rem] text-amber-200/70">
          &copy; {new Date().getFullYear()} Kyidom Foods Company Ltd. Crafted with dedication in Ghana.
        </div>
      </div>
    </footer>
  );
}