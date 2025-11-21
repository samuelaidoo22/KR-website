'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Sparkle,
  Target,
  Flag,
  Globe2,
  ShieldCheck,
  Sprout,
  Leaf,
  HelpingHand,
  BookOpen,
  Factory,
  Users,
} from 'lucide-react';
import Newsletter from '@/components/Newsletter';

const missionCards = [
  {
    icon: Target,
    title: 'Mission',
    description:
      "To project the Ghanaian farmer’s hard work by adding value to produce up-to-standard quality products for the market.",
  },
  {
    icon: Flag,
    title: 'Vision',
    description: 'To become the leading name in food processing in Ghana.',
  },
  {
    icon: Globe2,
    title: 'Purpose',
    description: 'To spark economic growth through value addition across the rice value chain.',
  },
];

const valueHighlights = [
  {
    icon: ShieldCheck,
    title: 'Integrity',
    description: 'We honour promises to farmers, partners, and consumers with transparency at every stage.',
  },
  {
    icon: HelpingHand,
    title: 'Philosophy',
    description: 'Commercial farming is possible when communities, technology, and markets work together.',
  },
];

const sdgGoals = [
  { code: 'SDG 1', title: 'No Poverty', summary: 'Improving farmer livelihoods through dignified partnerships and reliable off-take.' },
  { code: 'SDG 2', title: 'Zero Hunger', summary: 'Delivering nutritious, locally grown rice to Ghanaian households and chefs.' },
  { code: 'SDG 8', title: 'Decent Work', summary: 'Creating jobs across farming, processing, and distribution with equitable practices.' },
];

const services = [
  {
    title: 'Rice Farming',
    description: 'End-to-end field support unlocking productivity for Ghanaian growers.',
    items: ['Training programmes', 'Irrigation solutions', 'Mechanisation services'],
  },
  {
    title: 'Rice Processing',
    description: 'Modern facilities that maintain grain quality and deliver market-ready products.',
    items: ['White label production', 'Custom packaging'],
  },
  {
    title: 'Sales & Distribution',
    description: 'Expanding access to authentic Ghanaian rice through strategic outlets nationwide.',
    items: ['Yenze Ghana Mall – Labone', 'Lifestyle Market – Cape Coast', 'Patience – Tamale'],
  },
];

const csrPrograms = [
  {
    title: 'Empowered by Jireh-Aidoo',
    description: 'Initiatives that provide women-led agribusinesses with the skills and resources to thrive.',
  },
  {
    title: 'Read by Jireh-Aidoo',
    description: 'Literacy and mentorship programmes inspiring the next generation of agri-innovators.',
  },
];

const mediaHighlights = [
  { title: 'News', description: 'Press releases spotlighting milestones, partnerships, and harvest celebrations.' },
  { title: 'Gallery', description: 'Immersive visuals from fields, training sessions, and community engagements.' },
  { title: 'Blog', description: 'Insights on agritech, culinary trends, and farmer success stories from across Ghana.' },
  { title: 'Videos', description: 'Documentaries and short features amplifying the voices of Kyidom communities.' },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image src="/pics/IMG-20250315-WA0026.jpg" alt="Kyidom Foods team celebrating harvest" className="object-cover" fill priority />

          <div className="absolute inset-0 bg-gradient-to-b from-brown-900/85 via-brown-900/70 to-brown-900/90" />
        </div>

        <div className="relative container mx-auto grid gap-12 px-4 py-28 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="text-white">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-semibold"
            >
              <Sparkle className="h-4 w-4" aria-hidden="true" />
              Welcome to Kyidom Foods Company Ltd
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 max-w-3xl font-display text-4xl font-semibold tracking-tight md:text-6xl"
            >
              Championing Ghana's rice farmers with premium products and purpose-driven innovation
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 max-w-2xl text-lg text-white/80"
            >
              From regenerative fields to modern mills, Kyidom Foods combines tradition, technology, and community impact to
              bring nourishing rice to Ghanaian homes and markets worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-brown-900 shadow hover:bg-gold-400"
              >
                Explore Kyidom Rice
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:border-white"
              >
                Partner With Us
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative overflow-hidden rounded-3xl shadow-2xl"
          >
            <div className="relative h-80 sm:h-full min-h-[280px]">
              <Image src="/pics/kyidom all.jpg" alt="Kyidom products" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brown-900/60 via-transparent to-transparent" />
              <div className="absolute left-6 bottom-6 right-6 p-4 text-white">
                <h2 className="text-lg font-semibold">Why Kyidom?</h2>
                <p className="mt-2 text-sm text-white/90">
                  Female-led, purpose-driven, and committed to enhancing Ghana's rice value chain through innovation and community support.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-brown-50 py-16">
        <div className="container grid gap-12 px-4 lg:grid-cols-[1.2fr,1fr]">
          <div>
            <h2 className="section-title">Mission, Vision & Purpose</h2>
            <p className="section-subtitle mt-4 max-w-3xl">
              Every grain of Kyidom rice carries the dedication of Ghanaian farmers and the promise of sustainable growth for our communities.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {missionCards.map(({ icon: Icon, title, description }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card-surface h-full p-6"
                >
                  <Icon className="h-8 w-8 text-gold-500" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-semibold text-brown-900">{title}</h3>
                  <p className="mt-3 text-sm text-brown-600">{description}</p>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="relative h-full overflow-hidden rounded-3xl">
            <Image src="/pics/IMG-20250315-WA0010.jpg" alt="Kyidom milling operations" fill className="object-cover" />
            <div className="absolute inset-0 bg-brown-900/20" />
          </div>
        </div>
      </section>

      <section className="container grid gap-10 px-4 py-16 md:grid-cols-[1fr,0.9fr]">
        <div>
          <h2 className="section-title">Our Story</h2>
          <div className="mt-6 space-y-4 text-brown-600">
            <p>
              Jireh-Aidoo Ltd is a female-led agribusiness based in Ghana, specialising in the production of high-quality rice under the Kyidom brand.
            </p>
            <p>
              Driven by a commitment to sustainable agriculture, we revolutionise the local rice industry with nutritious, affordable products while investing in farmer wellbeing.
            </p>
            <p>
              We cultivate strong relationships with growers, elevate processing standards, and deliver Kyidom Long Grain Rice to households, retailers, and culinary professionals.
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {valueHighlights.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card-surface p-6">
                <Icon className="h-8 w-8 text-gold-500" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-brown-900">{title}</h3>
                <p className="mt-2 text-sm text-brown-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="card-surface relative min-h-[380px] overflow-hidden">
          <Image src="/pics/IMG-20250315-WA0029.jpg" alt="Female agripreneur holding Kyidom rice" fill className="object-cover" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brown-900/80 via-brown-900/40 to-transparent p-6 text-white">
            <h3 className="text-xl font-semibold">Commercial farming is possible</h3>
            <p className="mt-2 text-sm text-white/80">
              We invest in people, equipment, and knowledge to prove that sustainable, profitable agriculture is a reality in Ghana.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-amber-50 py-16">
        <div className="container px-4">
          <h2 className="section-title text-center">Kyidom Long Grain Rice</h2>
          <p className="section-subtitle mx-auto mt-4 max-w-3xl text-center">
            Our flagship product delivers aromatic, stone-free grains that cook flawlessly for jollof, fried rice, waakye, and every celebratory spread.
          </p>
          <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr,1fr]">
            <div className="card-surface p-8">
              <h3 className="text-2xl font-semibold text-brown-900">Why chefs & families choose Kyidom</h3>
              <ul className="mt-6 space-y-4 text-sm text-brown-600">
                <li>• Carefully sourced from trusted smallholder farmers across Ghana.</li>
                <li>• Triple-sorted to guarantee premium texture, aroma, and purity.</li>
                <li>• Packaged in food-safe materials with clear traceability.</li>
                <li>• Available in consumer and bulk formats for home, retail, and foodservice.</li>
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-3 text-sm font-semibold text-gold-600">
                <span className="badge bg-gold-500/15 text-gold-700">1kg • 5kg • 10kg • 25kg</span>
                <Link href="/products" className="inline-flex items-center gap-2 text-sm text-brown-900 hover:text-gold-600">
                  Order today
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative min-h-[360px] overflow-hidden rounded-3xl">
              <Image src="/pics/IMG-20250315-WA0008.jpg" alt="Kyidom Long Grain Rice packages" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="container px-4 py-16">
        <h2 className="section-title text-center">Value-added services</h2>
        <p className="section-subtitle mx-auto mt-4 max-w-3xl text-center">
          Beyond premium rice, we partner across the value chain to deliver training, mechanisation, processing, and market access.
        </p>
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-surface flex h-full flex-col p-6"
            >
              <h3 className="text-xl font-semibold text-brown-900">{service.title}</h3>
              <p className="mt-3 text-sm text-brown-600">{service.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-brown-600">
                {service.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="bg-brown-900 py-16 text-white">
        <div className="container px-4">
          <h2 className="section-title text-center text-white">Sustainable Development Goals</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-white/75">
            Kyidom Foods aligns its operations with global goals to ensure inclusive growth and resilient food systems.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {sdgGoals.map((goal, index) => (
              <motion.div
                key={goal.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/20 bg-white/10 p-6"
              >
                <p className="text-sm font-semibold text-gold-300">{goal.code}</p>
                <h3 className="mt-2 text-lg font-semibold">{goal.title}</h3>
                <p className="mt-3 text-sm text-white/80">{goal.summary}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="container grid gap-10 px-4 py-16 md:grid-cols-[0.9fr,1fr]">
        <div className="card-surface p-8">
          <h2 className="section-title">Impact & CSR</h2>
          <p className="section-subtitle mt-4">
            Our community programmes fuel prosperity, education, and resilience for women, youth, and farmer families.
          </p>
          <div className="mt-6 space-y-5">
            {csrPrograms.map((program) => (
              <div key={program.title} className="rounded-2xl bg-amber-50/80 p-5">
                <h3 className="text-lg font-semibold text-brown-900">{program.title}</h3>
                <p className="mt-2 text-sm text-brown-600">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="card-surface p-8">
          <h3 className="text-xl font-semibold text-brown-900">Training, literacy & economic empowerment</h3>
          <p className="mt-3 text-sm text-brown-600">
            Through ongoing workshops, reading clubs, mentorships, and equipment access, Kyidom Foods ensures that communities surrounding our operations benefit from lasting socio-economic gains.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-brown-600">
            <div className="flex items-start gap-3">
              <Factory className="mt-1 h-5 w-5 text-gold-500" />
              <p>Processing hubs equipped for value addition and quality assurance.</p>
            </div>
            <div className="flex items-start gap-3">
              <Users className="mt-1 h-5 w-5 text-gold-500" />
              <p>Community-driven programmes for women and youth across farming districts.</p>
            </div>
            <div className="flex items-start gap-3">
              <BookOpen className="mt-1 h-5 w-5 text-gold-500" />
              <p>Reading and mentorship clinics that nurture future agripreneurs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-amber-50 py-16">
        <div className="container px-4">
          <h2 className="section-title text-center">Media Centre</h2>
          <p className="section-subtitle mx-auto mt-4 max-w-3xl text-center">
            Visit our media hub for the latest updates, behind-the-scenes stories, and immersive visuals from the fields.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {mediaHighlights.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="card-surface p-6 text-center"
              >
                <h3 className="text-lg font-semibold text-brown-900">{item.title}</h3>
                <p className="mt-3 text-sm text-brown-600">{item.description}</p>
              </motion.article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/media"
              className="inline-flex items-center justify-center rounded-full border border-brown-900/20 px-6 py-3 text-sm font-semibold text-brown-900 hover:border-brown-900"
            >
              Enter Media Centre
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <Image src="/pics/kyidom all.jpg" alt="Kyidom product shot" fill className="object-cover" />
        <div className="absolute inset-0 bg-brown-900/80" aria-hidden="true" />
        <div className="relative container mx-auto px-4 text-center text-white z-20">
          <h3 className="text-3xl font-semibold md:text-4xl max-w-4xl mx-auto">Ready to co-create Ghana&apos;s food future?</h3>
          <p className="mx-auto mt-4 max-w-3xl text-white/80">
            Connect with Kyidom Foods for product enquiries, partnership opportunities, and impact collaborations across Ghana and beyond.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:items-center sm:gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-brown-900 hover:bg-gold-400">
              Contact Kyidom Foods
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white hover:border-white">
              View Services
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}