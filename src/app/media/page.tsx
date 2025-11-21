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

      <MediaGallery items={mediaItems} tags={allTags} />
    </main>
  );
}
    </div>
  );
}
