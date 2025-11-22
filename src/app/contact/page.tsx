'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const contactDetails = [
  {
    icon: Phone,
    title: 'Call the Kyidom team',
    value: '+233 30 000 1234',
    description: 'Speak directly with our customer care and distribution specialists.',
  },
  {
    icon: Mail,
    title: 'Email us',
    value: 'hello@kyidomfoods.com',
    description: 'Product enquiries, partnership requests, and media support within 24 hours.',
  },
  {
    icon: MapPin,
    title: 'Visit our HQ',
    value: 'Kasoa Otta City, Central Region, Ghana',
    description: 'Open weekdays 8:00 AM – 6:00 PM for tastings and partner meetings.',
  },
];

const supportHighlights = [
  '24/7 customer support for distribution partners nationwide.',
  'Dedicated account managers for retailers, hotels, and institutions.',
  'On-site consultations and agronomy support for Kyidom farmer cooperatives.',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 3200);
  };

  return (
    <div className="space-y-20 pb-20">

      <section className="container px-4">
        <div className="grid gap-6 md:grid-cols-3">
          {contactDetails.map(({ icon: Icon, title, value, description }) => (
            <div key={title} className="card-surface h-full p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/15 text-gold-600">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-brown-900">{title}</h3>
              <p className="mt-2 text-sm font-semibold text-brown-700">{value}</p>
              <p className="mt-3 text-sm text-brown-600">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container grid gap-10 px-4 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="card-surface p-8">
          <h2 className="text-lg font-semibold text-brown-900">Send us a message</h2>
          <p className="mt-2 text-sm text-brown-600">
            Share your request and we’ll respond within one business day. Fields marked * are required.
          </p>
          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            {submitted && (
              <div className="rounded-2xl border border-gold-400 bg-gold-500/15 px-4 py-3 text-sm font-semibold text-gold-700">
                Thank you! A member of the Kyidom team will reach out shortly.
              </div>
            )}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-brown-600">Full name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                  className="mt-2 w-full rounded-xl border border-brown-200 bg-white px-4 py-3 text-sm text-brown-900 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-200"
                  placeholder="Ama Owusu"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-brown-600">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                  className="mt-2 w-full rounded-xl border border-brown-200 bg-white px-4 py-3 text-sm text-brown-900 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-200"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr,1fr]">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-brown-600">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
                  className="mt-2 w-full rounded-xl border border-brown-200 bg-white px-4 py-3 text-sm text-brown-900 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-200"
                  placeholder="(+233) 55 000 0000"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wide text-brown-600">Reason for enquiry</label>
                <select
                  className="mt-2 w-full rounded-xl border border-brown-200 bg-white px-4 py-3 text-sm text-brown-900 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-200"
                  onChange={(event) => setFormData({ ...formData, message: `${formData.message ? `${formData.message}\n` : ''}${event.target.value}: ` })}
                >
                  <option value="" defaultValue="">
                    Select an option
                  </option>
                  <option>Retail or distribution partnership</option>
                  <option>Product availability</option>
                  <option>Media or speaking request</option>
                  <option>Farmer programme support</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-brown-600">Message *</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                className="mt-2 w-full rounded-xl border border-brown-200 bg-white px-4 py-3 text-sm text-brown-900 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-200"
                placeholder="Share details about your enquiry or collaboration idea"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-brown-900 shadow hover:bg-gold-400"
            >
              Send message
              <Send className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
        </div>
        <div className="card-surface relative overflow-hidden">
          <Image src="/pics/IMG-20250315-WA0018.jpg" alt="Kyidom support team" fill className="object-cover" />

          <div className="absolute inset-x-0 bottom-0 p-4 flex">
            <div className="rounded-lg bg-brown-900/85 p-3 backdrop-blur-sm max-w-md">
              <h3 className="text-base font-semibold text-white">Partnership assurance</h3>
              <ul className="mt-2 space-y-1 text-sm">
                {supportHighlights.map((highlight) => (
                  <li key={highlight} className="text-white/95 font-medium">• {highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-amber-50 py-16">
        <div className="container grid gap-10 px-4 lg:grid-cols-[0.9fr,1fr]">
          <div className="space-y-4">
            <h2 className="section-title">Visit our experience centre</h2>
            <p className="section-subtitle">
              Tour our milling showcase, sample Kyidom Long Grain Rice dishes, and explore programme activations.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white/80 p-5 text-sm text-brown-700">
                <p className="font-semibold text-brown-900">Guided tours</p>
                <p className="mt-2">Book a visit for schools, culinary teams, and development partners.</p>
              </div>
              <div className="rounded-2xl bg-white/80 p-5 text-sm text-brown-700">
                <p className="font-semibold text-brown-900">Product tastings</p>
                <p className="mt-2">Experience signature recipes prepared by Kyidom&apos;s culinary ambassadors.</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-brown-200 p-6 text-sm text-brown-600">
            <h3 className="text-lg font-semibold text-brown-900">Directions</h3>
            <p className="mt-3">Kasoa Otta City, Central Region, Ghana</p>
            <p className="mt-3">Landmarks: Off the Accra – Cape Coast Highway, adjacent to the community agrohub.</p>
            <p className="mt-3">Parking available for coaches and delivery vehicles.</p>
          </div>
        </div>
      </section>

      <section className="container px-4">
        <div className="rounded-3xl border border-brown-200 bg-white/80 p-8 text-center text-sm text-brown-700">
          <p>
            Prefer WhatsApp? Message us on <Link href="https://wa.me/233500001234" className="font-semibold text-gold-700 hover:text-gold-500">+233 50 000 1234</Link> for quick order confirmations and delivery updates.
          </p>
        </div>
      </section>
    </div>
  );
}