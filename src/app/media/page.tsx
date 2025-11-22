"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import MediaGallery from '../../components/MediaGallery';
import { mediaItems, allTags } from '../../data/media';

export default function MediaPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Media</h1>
      <p className="text-gray-600 mb-6">A gallery of our products, people and impact. Click any image to enlarge.</p>

      {/** Baobab feature with thumbnail and share buttons */}
      <div className="mb-6 rounded-2xl border border-gray-200 bg-white/5 p-4">
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <div className="w-full sm:w-40 h-28 relative overflow-hidden rounded-md flex-shrink-0">
            <Image
              src="/pics/IMG-20250315-WA0014.jpg"
              alt="Kyidom product feature"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-lg font-semibold">From Struggle to Success in Ghana</h2>
            <p className="mt-2 text-sm text-gray-300">
              At the NextGen Opportunities Forum 2025 (British Council, Accra), we sat down with Ms. Sarah Aidoo,
              founder of Kyidom Foods, to uncover how she turned locally produced rice into a recognized Ghanaian brand.
              Her story is a true entrepreneurship success journey—packed with lessons on resilience, branding, and business
              growth in Africa.
            </p>

            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://baobabentrepreneur.com/kyidoom-foods-ghanaian-entrepreneurship-success-story/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-4 py-2 text-sm font-semibold text-brown-900 hover:bg-gold-400"
              >
                Read full feature
              </a>

              {/* Share buttons */}
              <div className="ml-auto flex items-center gap-2">
                {(() => {
                  const featureUrl = 'https://baobabentrepreneur.com/kyidoom-foods-ghanaian-entrepreneurship-success-story/';
                  const shareText = 'From Struggle to Success in Ghana — Kyidom Foods featured on Baobab Entrepreneur';
                  return (
                    <>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(featureUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded bg-white/5 text-sm hover:bg-white/10"
                        aria-label="Share on Facebook"
                      >
                        Facebook
                      </a>
                      <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(featureUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded bg-white/5 text-sm hover:bg-white/10"
                        aria-label="Share on Twitter"
                      >
                        X
                      </a>
                      <a
                        href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + featureUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 rounded bg-white/5 text-sm hover:bg-white/10"
                        aria-label="Share on WhatsApp"
                      >
                        WhatsApp
                      </a>
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      </div>

      <MediaGallery items={mediaItems} tags={allTags} />
    </main>
  );
}

