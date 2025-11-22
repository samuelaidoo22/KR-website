'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Tractor, Wheat, Factory, PackageSearch, Users, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Field Services & Agronomy',
    icon: Tractor,
    description:
      'Mechanisation support, soil testing, and irrigation solutions that help smallholder farmers scale sustainable rice cultivation.',
    highlights: ['Mechanised land preparation', 'Precision irrigation planning', 'Integrated pest & nutrient management'],
  },
  {
    title: 'Farmer Training & Extension',
    icon: Users,
    description:
      'Hands-on coaching, knowledge clinics, and mentorship programmes powered by our Empowered by Jireh-Aidoo initiative.',
    highlights: ['Agri-business mentorship', 'Women & youth inclusion', 'Financial literacy workshops'],
  },
  {
    title: 'Modern Processing & Milling',
    icon: Factory,
    description:
      'State-of-the-art milling lines that guarantee moisture control, stone removal, and aroma retention from harvest to bag.',
    highlights: ['Triple sorting & polishing', 'Moisture and quality testing', 'Customised blends for partners'],
  },
  {
    title: 'White Label & Packaging',
    icon: PackageSearch,
    description:
      'Flexible packaging formats, co-branded experiences, and export-ready labelling to meet varying market needs.',
    highlights: ['Food-safe packaging', 'Graphic design assistance', 'Traceability and barcode setup'],
  },
  {
    title: 'Distribution & Logistics',
    icon: Wheat,
    description:
      'Nationwide warehousing, fleet delivery, and last-mile collaborations that keep shelves stocked year-round.',
    highlights: ['Partner onboarding', 'Route-to-market strategy', 'Temperature-controlled storage'],
  },
];

const partnerSteps = [
  {
    title: '1. Discovery call',
    description: 'Share your goals, timelines, and volume needs so we can tailor a service package.',
  },
  {
    title: '2. Solution design',
    description: 'We map agronomy, processing, and logistics support to help you reach your customers reliably.',
  },
  {
    title: '3. Launch & grow',
    description: 'Track deliveries, quality metrics, and market feedback with our dedicated partner success team.',
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-20 pb-20">
      <section className="relative overflow-hidden bg-brown-900">
        <div className="absolute inset-0" aria-hidden="true">
          <Image src="/pics/kyidom 1kg3.jpg" alt="Kyidom services hero" fill className="object-cover-[center_20.5%]" priority />
          <div className="absolute inset-0 bg-brown-900/80" />
        </div>
        <div className="relative container grid gap-10 px-4 py-24 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl font-display text-4xl font-semibold md:text-6xl"
            >
              Full value-chain services for Ghana’s rice ecosystem
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 max-w-2xl text-lg text-white/80"
            >
              Kyidom Foods combines agronomy expertise, modern processing, and nationwide distribution to elevate farmers, brands, and culinary partners.
            </motion.p>
            <div className="mt-10 flex flex-wrap gap-3 text-sm font-semibold">
              <Link href="/contact" className="rounded-full bg-gold-500 px-6 py-3 text-brown-900 hover:bg-gold-400">
                Schedule a Consultation
              </Link>
              <Link href="/products" className="rounded-full border border-white/40 px-6 py-3 text-white hover:border-white">
                Explore Our Products
              </Link>
            </div>
          </div>
          <div className="card-surface bg-white/95 p-8 text-brown-900">
            <h2 className="text-lg font-semibold">Why partners choose Kyidom</h2>
            <ul className="mt-5 space-y-3 text-sm text-brown-700">
              <li>• Proven support for 500+ farmer households</li>
              <li>• Integrated processing that preserves aroma and texture</li>
              <li>• Distribution footprint covering major Ghanaian cities</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container px-4">
        <h2 className="section-title text-center">Value-chain solutions</h2>
        <p className="section-subtitle mx-auto mt-4 max-w-3xl text-center">
          Tailored programmes that transform quality grains into premium consumer experiences across Ghana and beyond.
        </p>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {services.map(({ title, icon: Icon, description, highlights }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="card-surface flex h-full flex-col p-6"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/15 text-gold-600">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-brown-900">{title}</h3>
              <p className="mt-3 text-sm text-brown-600">{description}</p>
              <ul className="mt-6 space-y-2 text-sm text-brown-600">
                {highlights.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="bg-amber-50 py-16">
        <div className="container grid gap-10 px-4 lg:grid-cols-[1fr,0.9fr]">
          <div className="space-y-6">
            <h2 className="section-title">Training & capacity building</h2>
            <p className="section-subtitle">
              Through Empowered by Jireh-Aidoo and Read by Jireh-Aidoo, we nurture women, youth, and community leaders with the tools to thrive in agriculture.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white/80 p-5 text-sm text-brown-700">
                <p className="font-semibold text-brown-900">Inclusive cohorts</p>
                <p className="mt-2">Programmes targeting women agripreneurs and young innovators across farming districts.</p>
              </div>
              <div className="rounded-2xl bg-white/80 p-5 text-sm text-brown-700">
                <p className="font-semibold text-brown-900">Continuous mentorship</p>
                <p className="mt-2">Follow-up coaching, agritech demos, and digital literacy support for lasting impact.</p>
              </div>
            </div>
          </div>
          <div className="card-surface relative min-h-[360px] overflow-hidden">
            <Image src="/pics/IMG-20250315-WA0036.jpg" alt="Kyidom training programme" fill className="object-cover" />
            <div className="absolute inset-0 bg-brown-900/20" />
          </div>
        </div>
      </section>

      <section className="container grid gap-10 px-4 py-16 lg:grid-cols-[0.9fr,1fr]">
        <div className="card-surface p-8">
          <h2 className="section-title">Partner onboarding journey</h2>
          <p className="section-subtitle mt-3">
            Collaborate with Kyidom Foods to co-create value, whether you are sourcing grains, private-labelling, or distributing to new markets.
          </p>
          <div className="mt-6 space-y-4">
            {partnerSteps.map((step) => (
              <div key={step.title} className="rounded-2xl bg-amber-50/80 p-5">
                <h3 className="text-lg font-semibold text-brown-900">{step.title}</h3>
                <p className="mt-2 text-sm text-brown-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="card-surface relative min-h-[360px] overflow-hidden">
          <Image src="/pics/IMG-20250315-WA0026.jpg" alt="Kyidom distribution fleet" fill className="object-cover" />
          <div className="absolute inset-0 bg-brown-900/20" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brown-900/80 via-transparent to-transparent p-6 text-white">
            <p className="text-sm text-white/80">
              “Our network stretches from farm gate to retail shelves, ensuring Ghanaian rice reaches every community.”
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brown-900 py-16 text-white">
        <div className="container px-4 text-center">
          <h2 className="section-title text-white">Ready to collaborate?</h2>
          <p className="mx-auto mt-4 max-w-3xl text-white/80">
            Let’s design a programme that expands your reach, supports farmers, and delivers premium Ghanaian rice to more tables.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-brown-900 hover:bg-gold-400"
          >
            Contact Kyidom Partnerships
            <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
