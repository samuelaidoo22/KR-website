import MediaGallery from '../../components/MediaGallery';
import { mediaItems, allTags } from '../../data/media';

export default function MediaPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Media</h1>
      <p className="text-gray-600 mb-6">A gallery of our products, people and impact. Click any image to enlarge.</p>

      <MediaGallery items={mediaItems} tags={allTags} />
    </main>
  );
}
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Camera, Newspaper, Mic, Video, Calendar } from 'lucide-react';

const pressReleases = [
  {
    title: 'Kyidom expands farmer mechanisation support',
    date: 'March 2025',
    summary: 'New tractors and harvesting equipment deployed across Central and Eastern regions to boost yields.',
    link: '#',
  },
  {
    title: 'Empowered by Jireh-Aidoo welcomes new women-led cooperatives',
    date: 'January 2025',
    summary: 'Programme milestones highlight mentorship, financing, and literacy outcomes for 120 agripreneurs.',
    link: '#',
  },
  {
    title: 'Kyidom Long Grain Rice wins national quality award',
    date: 'September 2024',
    summary: 'Recognition from Ghana Standards Authority for traceability, aroma, and consumer satisfaction.',
    link: '#',
  },
];

const mediaHighlights = [
  {
    title: 'Press releases',
    description: 'Latest news on Kyidom partnerships, awards, and community programmes.',
    icon: Newspaper,
  },
  {
    title: 'Photo gallery',
    description: 'Immersive visuals capturing our farmers, processing hubs, and community events.',
    icon: Camera,
  },
  {
    title: 'Community voices podcast',
    description: 'Stories from women leaders, agri-innovators, and youth inspired by Kyidom programmes.',
    icon: Mic,
  },
  {
    title: 'Brand videos',
    description: 'Short films highlighting Ghanaian rice heritage and Kyidom&apos;s impact.',
    icon: Video,
  },
];

const upcomingEvents = [
  {
    title: 'Harvest showcase & tasting',
    date: 'July 12, 2025',
    location: 'Kasoa Otta City, Ghana',
    description: 'Experience Kyidom Long Grain Rice culinary creations and meet our farmer-innovators.',
  },
  {
    title: 'Women in agribusiness forum',
    date: 'September 3, 2025',
    location: 'Accra International Conference Centre',
    description: 'Panel discussions featuring Empowered by Jireh-Aidoo participants and partners.',
  },
  {
    title: 'Media field immersion',
    date: 'November 20, 2025',
    location: 'Central Region rice fields',
    description: 'Guided tour of regenerative farming practices and mechanisation support in action.',
  },
];

const mediaKits = [
  {
    title: 'Brand overview pack',
    description: 'Company fact sheet, leadership bios, and milestones for quick reference.',
    action: 'Download PDF',
    link: '#',
  },
  {
    title: 'High-resolution imagery',
    description: 'Field, processing, packaging, and community programme photography.',
    action: 'Browse gallery',
    link: '#',
  },
  {
    title: 'B-roll & video clips',
    description: 'Short clips of farm operations, milling, and testimonials for broadcasters.',
    action: 'Request access',
    link: '#',
  },
  {
    title: 'CSR impact sheets',
    description: 'Programme outcomes for Empowered by Jireh-Aidoo and Read by Jireh-Aidoo.',
    action: 'View impact',
    link: '#',
  },
];

const spotlightStories = [
  {
    title: 'Mechanisation transforms harvests',
    category: 'Field reportage',
    description: 'Ride along with farmers in Kasoa as new combine harvesters boost yields and reduce losses.',
    image: '/pics/IMG-20250315-WA0029.jpg',
    link: '#',
  },
  {
    title: 'Women of Empowered by Jireh-Aidoo',
    category: 'Community voices',
    description: 'Four agripreneurs share how mentorship and finance unlocked thriving rice businesses.',
    image: '/pics/IMG-20250315-WA0035.jpg',
    link: '#',
  },
];

const mediaStats = [
  {
    label: 'Farmer households featured',
    value: '500+',
    detail: 'Profiles and field diaries documented across Ghana since 2022.',
  },
  {
    label: 'Press pickups',
    value: '120+',
    detail: 'Local and international outlets covering Kyidom Foods milestones.',
  },
  {
    label: 'CSR programmes',
    value: '6',
    detail: 'Active initiatives supporting women, youth, and literacy in rice-growing communities.',
  },
];

export default function MediaPage() {
  return (
    <div className="space-y-20 pb-24">
      <section className="relative overflow-hidden bg-brown-950 text-white">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/pics/kyidom-certificate-hero.jpg"
            alt="Kyidom award ceremony"
            fill
            priority
            className="object-cover object-center lg:object-right"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brown-950/92 via-brown-950/70 to-brown-900/30" aria-hidden="true" />

        <div className="relative">
          <div className="container grid items-center gap-12 px-4 py-28 lg:grid-cols-[minmax(0,1.1fr),minmax(280px,0.8fr)] lg:min-h-[520px]">
            <div className="space-y-6">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/80"
              >
                Kyidom media centre
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="max-w-3xl font-display text-4xl font-semibold md:text-6xl"
              >
                Stories, footage, and insights from Ghana&apos;s premium rice value chain
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-2xl text-base text-white/80 md:text-lg"
              >
                Access verified facts, ready-to-publish assets, and feature leads spotlighting Kyidom Foods, our farmer partners, and the communities we serve.
              </motion.p>
              <div className="flex flex-wrap gap-3 text-sm font-semibold">
                <Link href="mailto:press@kyidomfoods.com" className="rounded-full bg-gold-500 px-6 py-3 text-brown-900 transition hover:bg-gold-400">
                  Connect with press desk
                </Link>
                <Link href="/contact" className="rounded-full border border-white/40 px-6 py-3 text-white transition hover:border-white">
                  Request an interview
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/12 p-8 text-white backdrop-blur-xl shadow-lg">
              <h2 className="text-lg font-semibold text-white">Quick facts</h2>
              <ul className="mt-5 space-y-3 text-sm text-white/85">
                <li>• Founded in 2017 with a mission to elevate Ghanaian-grown rice.</li>
                <li>• Serves 500+ farmer households and 200+ retail partners nationwide.</li>
                <li>• Media response window within 24 hours via press@kyidomfoods.com.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container px-4">
        <div className="grid gap-6 md:grid-cols-3">
          {mediaStats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-brown-100 bg-amber-50/60 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-gold-700">{stat.label}</p>
              <p className="mt-3 text-4xl font-display font-semibold text-brown-900">{stat.value}</p>
              <p className="mt-2 text-sm text-brown-600">{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container px-4">
        <div className="rounded-3xl border border-brown-100 bg-white/90 p-8 shadow-sm">
          <h2 className="section-title">Media highlight pillars</h2>
          <p className="section-subtitle mt-3 max-w-3xl">
            Build your story with ready-to-use pillars spanning news, visuals, and audio content.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {mediaHighlights.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-brown-100 p-6 transition hover:-translate-y-1 hover:shadow-lg">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gold-500/20 text-gold-600">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-brown-900">{title}</h3>
                <p className="mt-2 text-sm text-brown-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container px-4">
        <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-6">
            <h2 className="section-title">Spotlight stories</h2>
            <p className="section-subtitle max-w-2xl">
              Dive into feature-ready narratives showcasing the people powering Kyidom Foods.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {spotlightStories.map((story) => (
                <article key={story.title} className="group overflow-hidden rounded-3xl border border-brown-100 bg-white shadow-sm transition hover:-translate-y-1">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image src={story.image} alt={story.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brown-900/70 via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brown-800">
                      {story.category}
                    </span>
                  </div>
                  <div className="space-y-3 p-6">
                    <h3 className="text-lg font-semibold text-brown-900">{story.title}</h3>
                    <p className="text-sm text-brown-600">{story.description}</p>
                    <Link href={story.link} className="inline-flex items-center text-sm font-semibold text-gold-600 hover:text-gold-500">
                      Explore story
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-brown-100 bg-white p-8 shadow-sm">
            <h2 className="section-title text-brown-900">Latest press releases</h2>
            <div className="mt-6 space-y-5 border-l border-brown-200 pl-6">
              {pressReleases.map((release) => (
                <div key={release.title} className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-600">{release.date}</p>
                  <h3 className="text-base font-semibold text-brown-900">{release.title}</h3>
                  <p className="text-sm text-brown-600">{release.summary}</p>
                  <Link href={release.link} className="text-sm font-semibold text-gold-700 hover:text-gold-500">
                    View release
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-amber-50 py-16">
        <div className="container px-4">
          <h2 className="section-title text-center">Media kit library</h2>
          <p className="section-subtitle mx-auto mt-4 max-w-3xl text-center">
            Download curated files or request access to broadcast-ready footage.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {mediaKits.map((kit) => (
              <div key={kit.title} className="rounded-3xl border border-brown-100 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-lg font-semibold text-brown-900">{kit.title}</h3>
                <p className="mt-3 text-sm text-brown-600">{kit.description}</p>
                <Link href={kit.link} className="mt-5 inline-flex items-center justify-center rounded-full bg-brown-900 px-5 py-2 text-xs font-semibold text-white hover:bg-brown-800">
                  {kit.action}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container px-4">
        <div className="rounded-3xl border border-brown-100 bg-white p-8 shadow-sm">
          <h2 className="section-title">Upcoming events & field immersions</h2>
          <p className="section-subtitle mt-3 max-w-2xl">
            Join tastings, conferences, and on-the-ground tours designed for media and partners.
          </p>
          <div className="mt-8 space-y-5">
            {upcomingEvents.map((event) => (
              <div key={event.title} className="flex flex-col gap-3 rounded-2xl border border-brown-100 bg-amber-50/60 p-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gold-600">{event.date}</p>
                  <h3 className="mt-1 text-base font-semibold text-brown-900">{event.title}</h3>
                  <p className="text-sm text-brown-600">{event.description}</p>
                </div>
                <div className="text-sm font-semibold text-brown-700 md:text-right">
                  <Calendar className="mb-2 hidden h-4 w-4 text-gold-600 md:block" aria-hidden="true" />
                  <span>{event.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container px-4">
        <div className="grid gap-8 lg:grid-cols-[1fr,0.9fr]">
          <div className="rounded-3xl border border-brown-100 bg-white p-8 shadow-sm">
            <h2 className="section-title text-brown-900">Media contact</h2>
            <p className="mt-3 text-sm text-brown-600">Press desk · Kyidom Foods Company Ltd</p>
            <p className="text-sm text-brown-600">
              Email: <Link href="mailto:press@kyidomfoods.com" className="font-semibold text-gold-700 hover:text-gold-500">press@kyidomfoods.com</Link>
            </p>
            <p className="text-sm text-brown-600">Phone: +233 30 000 1234</p>
            <p className="mt-4 text-sm text-brown-600">
              Follow our newsroom updates on <Link href="https://www.facebook.com" className="font-semibold text-gold-700 hover:text-gold-500">Facebook</Link> and <Link href="https://www.instagram.com" className="font-semibold text-gold-700 hover:text-gold-500">Instagram</Link>.
            </p>
          </div>
          <div className="rounded-3xl border border-brown-100 bg-white p-8 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gold-600">Media support hours</h3>
            <p className="mt-3 text-sm text-brown-600">Monday – Friday, 8:00 AM to 6:00 PM GMT.</p>
            <p className="mt-2 text-sm text-brown-600">Weekend and holiday enquiries receive a response within the next business day.</p>
            <div className="mt-6 rounded-2xl bg-amber-50/70 p-4 text-sm text-brown-700">
              <p className="font-semibold text-brown-900">Need a studio appearance?</p>
              <p className="mt-1">
                Email your broadcast brief and preferred timing — our communications team will coordinate subject matter experts and supporting assets.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
