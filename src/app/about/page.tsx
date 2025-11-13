'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, BookOpen, Factory, Leaf, Sparkle, Users } from 'lucide-react';

const timeline = [
  {
    year: '2015',
    title: 'Seeds of possibility',
    description:
      'Kyidom Foods began as a farmer-led initiative focused on improving rice yields in the Central Region of Ghana.',
  },
  {
    year: '2018',
    title: 'Scaling farmer partnerships',
    description:
      'Trained over 150 smallholder farmers in regenerative agriculture, irrigation, and mechanisation best practices.',
  },
  {
    year: '2021',
    title: 'Processing excellence',
    description:
      'Commissioned a modern milling facility to maintain quality from harvest to packaging and expanded nationwide distribution.',
  },
  {
    year: '2024',
    title: 'Purpose-driven impact',
    description:
      'Launched Empowered by Jireh-Aidoo and Read by Jireh-Aidoo programmes to invest in women, youth, and community literacy.',
  },
];

const pillars = [
  {
    title: 'Mission',
    description:
      "To project the Ghanaian farmer’s hard work by adding value to produce up-to-standard quality products for the market.",
  },
  {
    title: 'Vision',
    description: 'To become the leading name in food processing in Ghana.',
  },
  {
    title: 'Purpose',
    description: 'To spark economic growth through value addition for farmers, processors, and distributors.',
  },
];

const strengths = [
  {
    icon: Leaf,
    title: 'Sustainable sourcing',
    description: 'We prioritise soil health, water stewardship, and farmer resilience across every field partnership.',
  },
  {
    icon: Factory,
    title: 'Modern processing',
    description: 'State-of-the-art milling technology preserves fragrance, texture, and nutritional value in each batch.',
  },
  {
    icon: BookOpen,
    title: 'Knowledge sharing',
    description: 'Training, mentorship, and literacy programmes keep communities learning and thriving.',
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-20 pb-20">
      <section className="relative overflow-hidden bg-brown-900">
        <div className="absolute inset-0" aria-hidden="true">
          <Image src="/pics/IMG-20250315-WA0028.jpg" alt="Kyidom farmers in the field" fill className="object-cover" priority />

          <div className="absolute inset-0 bg-brown-900/80" />
        </div>
        <div className="relative container grid gap-10 px-4 py-24 lg:grid-cols-[1.2fr,1fr]">
          <div className="text-white">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-semibold"
            >
              <Sparkle className="h-4 w-4" aria-hidden="true" />
              About Kyidom Foods Company Ltd
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 max-w-3xl font-display text-4xl font-semibold md:text-6xl"
            >
              A female-led agribusiness transforming Ghana&apos;s rice industry
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg text-white/80"
            >
              Kyidom Foods exists to honour the dedication of Ghanaian farmers. We produce high-quality local rice,
              empower communities with training and mechanisation, and deliver nutritious food nationwide.
            </motion.p>
          </div>
          <div className="card-surface bg-white/95 p-8 text-brown-900">
            <h2 className="text-lg font-semibold">At a glance</h2>
            <ul className="mt-5 space-y-4 text-sm text-brown-700">
              <li>• Headquartered in Kasoa Otta City, Ghana</li>
              <li>• 500+ farmer households supported in the Kyidom network</li>
              <li>• Premium Kyidom Long Grain Rice available nationwide</li>
              <li>• Sustainable impact programmes focused on women and youth</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container space-y-12 px-4">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <h2 className="section-title">Mission, vision & purpose</h2>
            <p className="section-subtitle">
              We add value to Ghana&apos;s rice value chain while safeguarding livelihoods and amplifying the voices of those who cultivate the land.
            </p>
          </div>
          <div className="rounded-full border border-brown-200 px-6 py-3 text-sm font-semibold text-brown-700">
            Kyidom Foods · Est. 2015
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((item) => (
            <div key={item.title} className="card-surface h-full p-6">
              <h3 className="text-lg font-semibold text-brown-900">{item.title}</h3>
              <p className="mt-3 text-sm text-brown-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-amber-50 py-16">
        <div className="container grid gap-10 px-4 lg:grid-cols-[1.1fr,0.9fr]">
          <div>
            <h2 className="section-title">Our journey</h2>
            <p className="section-subtitle mt-4">
              From modest beginnings to a trusted national brand, Kyidom Foods continues to champion local agriculture and inclusive growth.
            </p>
            <div className="mt-8 space-y-6">
              {timeline.map((item) => (
                <div key={item.year} className="flex gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/20 font-semibold text-gold-700">
                    {item.year}
                  </div>
                  <div className="card-surface flex-1 p-6">
                    <h3 className="text-lg font-semibold text-brown-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-brown-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="card-surface relative min-h-[420px] overflow-hidden">
            <Image src="/pics/IMG-20250315-WA0010.jpg" alt="Kyidom processing facility" fill className="object-cover" />
            <div className="absolute inset-0 bg-brown-900/20" />
          </div>
        </div>
      </section>

      <section className="container px-4">
        <div className="grid gap-10 lg:grid-cols-[1fr,0.9fr]">
          <div className="space-y-6">
            <h2 className="section-title">Leadership that empowers</h2>
            <p className="section-subtitle">
              Our leadership team, helmed by visionary founder Jemima Jireh-Aidoo, nurtures talent, strengthens farmer relationships, and builds resilient supply chains.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="card-surface p-6">
                <div className="flex items-center gap-3 text-sm font-semibold text-gold-600">
                  <Award className="h-5 w-5" aria-hidden="true" />
                  Founder & CEO
                </div>
                <h3 className="mt-3 text-xl font-semibold text-brown-900">Jemima Jireh-Aidoo</h3>
                <p className="mt-3 text-sm text-brown-600">
                  Leads Kyidom Foods with a passion for farmer welfare, sustainable agriculture, and women&apos;s economic empowerment.
                </p>
              </div>
              <div className="card-surface p-6">
                <div className="flex items-center gap-3 text-sm font-semibold text-gold-600">
                  <Users className="h-5 w-5" aria-hidden="true" />
                  Community Programmes
                </div>
                <h3 className="mt-3 text-xl font-semibold text-brown-900">Impact & Training Team</h3>
                <p className="mt-3 text-sm text-brown-600">
                  Coordinates literacy, mentorship, and agribusiness capacity-building for women and youth across Ghana.
                </p>
              </div>
            </div>
          </div>
          <div className="card-surface relative min-h-[380px] overflow-hidden">
            <Image src="/pics/IMG-20250315-WA0029.jpg" alt="Kyidom leadership" fill className="object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brown-900/70 via-transparent to-transparent p-6 text-white">
              <p className="text-sm text-white/85">
                “We believe in Ghanaian talent, in our farmers, and in the vibrant future ahead for local agriculture.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brown-900 py-16 text-white">
        <div className="container px-4">
          <h2 className="section-title text-center text-white">What drives us forward</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-white/75">
            Our strengths ensure that Kyidom Foods can deliver premium rice while uplifting everyone along the value chain.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {strengths.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-3xl border border-white/15 bg-white/10 p-6">
                <Icon className="h-8 w-8 text-gold-300" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm text-white/80">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}