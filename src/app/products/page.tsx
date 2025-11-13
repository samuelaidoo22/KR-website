'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Package, Leaf, ShieldCheck, Truck } from 'lucide-react';

const productRanges = [
  {
    title: 'Kyidom Long Grain Rice',
    weight: '1kg · 5kg · 10kg · 25kg',
    description:
      'Aromatic, stone-free, and triple-sorted for consistent cooking—ideal for homes, restaurants, and events.',
    image: '/pics/IMG-20250315-WA0008.jpg',
  },
  {
    title: 'Chef’s Selection Bulk Packs',
    weight: '50kg · Custom white-label',
    description:
      'Specialised milling and packaging solutions for hotels, institutions, and foodservice partners.',
    image: '/pics/IMG-20250315-WA0010.jpg',
  },
];

const productHighlights = [
  {
    icon: Leaf,
    title: 'Locally grown & traceable',
    description: 'Sourced from Kyidom farmer cooperatives across Ghana with transparent supply chains.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality assured',
    description: 'Modern milling, moisture control, and quality tests preserve nutrition and fragrance.',
  },
  {
    icon: Package,
    title: 'Premium packaging',
    description: 'Food-grade materials with tamper-evident seals and vibrant branding for shelf appeal.',
  },
  {
    icon: Truck,
    title: 'Nationwide delivery',
    description: 'Reliable logistics network serving Accra, Cape Coast, Tamale, and new growth hubs.',
  },
];

const faqs = [
  {
    question: 'How can I order Kyidom rice for retail?',
    answer: 'Visit our online shop or contact our sales team for distributor partnerships and wholesale enquiries.',
  },
  {
    question: 'Do you offer private/white-label packaging?',
    answer: 'Yes. We produce customised packaging and sizes for partners, with strict quality control and branding support.',
  },
  {
    question: 'What sizes are available?',
    answer: 'Consumer packs (1kg, 5kg, 10kg, 25kg) and bulk options (50kg, custom). Special requests welcome.',
  },
  {
    question: 'Where can I find Kyidom rice in-person?',
    answer: 'Kyidom products are stocked at Yenze Ghana Mall (Labone), Lifestyle Market (Cape Coast), and Patience (Tamale).',
  },
];

export default function ProductsPage() {
  return (
    <div className="space-y-20 pb-20">
      <section className="relative overflow-hidden bg-brown-900">
        <div className="absolute inset-0" aria-hidden="true">
          <Image src="/pics/IMG-20250315-WA0014.jpg" alt="Kyidom product hero" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-brown-900/85" />
        </div>
        <div className="relative container px-4 py-24 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl font-display text-4xl font-semibold md:text-6xl"
          >
            Kyidom Long Grain Rice · Premium Ghanaian harvests for every table
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 max-w-2xl text-lg text-white/80"
          >
            Our rice is cultivated by empowered farmers, processed with precision, and delivered nationwide with pride.
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-brown-900">
            <Link href="/shop" className="rounded-full bg-gold-500 px-6 py-3 text-brown-900 hover:bg-gold-400">
              Shop Kyidom Rice
            </Link>
            <Link href="/contact" className="rounded-full border border-white/40 px-6 py-3 text-white hover:border-white">
              Request Distribution
            </Link>
          </div>
        </div>
      </section>

      <section className="container px-4">
        <div className="grid gap-10 lg:grid-cols-[1fr,0.9fr]">
          <div className="space-y-6">
            <h2 className="section-title">Our product portfolio</h2>
            <p className="section-subtitle">
              From family staples to large-scale supply, Kyidom delivers freshness, authenticity, and culinary versatility.
            </p>
          </div>
          <div className="rounded-3xl border border-brown-200 px-6 py-4 text-sm font-semibold text-brown-700">
            All products are proudly milled and packaged in Ghana.
          </div>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {productRanges.map((product) => (
            <div key={product.title} className="card-surface overflow-hidden">
              <div className="relative h-64">
                <Image src={product.image} alt={product.title} fill className="object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-brown-900">{product.title}</h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-gold-600">{product.weight}</p>
                <p className="mt-4 text-sm text-brown-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-amber-50 py-16">
        <div className="container px-4">
          <h2 className="section-title text-center">What sets Kyidom rice apart</h2>
          <p className="section-subtitle mx-auto mt-4 max-w-3xl text-center">
            Premium experiences backed by rigorous quality, farmer partnerships, and responsive logistics.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {productHighlights.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card-surface h-full p-6 text-center">
                <Icon className="mx-auto h-8 w-8 text-gold-500" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-brown-900">{title}</h3>
                <p className="mt-3 text-sm text-brown-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container grid gap-10 px-4 py-16 lg:grid-cols-[1fr,0.9fr]">
        <div className="card-surface p-8">
          <h2 className="section-title">Availability & outlets</h2>
          <p className="section-subtitle mt-3">
            Kyidom rice is stocked nationwide and supported by a growing network of retailers and distributors.
          </p>
          <ul className="mt-6 space-y-4 text-sm text-brown-600">
            <li>• Yenze Ghana Mall – Labone</li>
            <li>• Lifestyle Market – Cape Coast</li>
            <li>• Patience – Tamale</li>
            <li>• Direct orders via our sales team for corporate and institutional clients</li>
          </ul>
        </div>
        <div className="card-surface relative min-h-[360px] overflow-hidden">
          <Image src="/pics/IMG-20250315-WA0037.jpg" alt="Kyidom retail outlet" fill className="object-cover" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brown-900/70 via-transparent to-transparent p-6 text-white">
            <p className="text-sm text-white/80">
              Contact us to join our distributor network and bring Kyidom rice closer to your customers.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brown-900 py-16 text-white">
        <div className="container px-4">
          <h2 className="section-title text-center text-white">Frequently asked questions</h2>
          <div className="mx-auto mt-10 grid max-w-4xl gap-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-3xl border border-white/15 bg-white/10 p-6">
                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                <p className="mt-2 text-sm text-white/80">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container grid gap-8 px-4 pb-4 text-sm text-brown-600 lg:grid-cols-[1fr,0.9fr]">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-brown-900">Logistics & support</h3>
          <p>
            Partner with Kyidom Foods for timely deliveries, export enquiries, and culinary collaborations. Our team offers personalised assistance for events, retailers, and institutional supply.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-gold-500 px-5 py-3 text-sm font-semibold text-brown-900 hover:bg-gold-400">
              Speak to Sales
            </Link>
            <Link href="/services" className="rounded-full border border-brown-200 px-5 py-3 text-sm font-semibold text-brown-900 hover:border-brown-900">
              Explore Services
            </Link>
          </div>
        </div>
        <div className="rounded-3xl border border-brown-200 p-6">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gold-600">Certifications</h4>
          <p className="mt-3">
            Kyidom Foods adheres to Ghana Standards Authority guidelines, food safety protocols, and sustainable sourcing practices to ensure every bag meets premium expectations.
          </p>
        </div>
      </section>
    </div>
  );
}
