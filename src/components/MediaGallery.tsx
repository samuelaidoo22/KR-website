"use client";
import { useState } from 'react';
import type { MediaItem } from '../data/media';
import MediaGrid from './MediaGrid';
import Lightbox from './Lightbox';

type Props = {
  items: MediaItem[];
  tags: string[];
};

export default function MediaGallery({ items, tags }: Props) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = selectedTag ? items.filter((i) => (i.tags || []).includes(selectedTag)) : items;

  // Deduplicate images by `src` to avoid repeated images in the gallery/lightbox
  const unique = Array.from(new Map(filtered.map((it) => [it.src, it])).values());

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2">
        <button
          className={`px-3 py-1 rounded ${selectedTag === null ? 'bg-gray-800 text-white' : 'bg-gray-100'}`}
          onClick={() => setSelectedTag(null)}
        >
          All
        </button>
        {tags.map((t) => (
          <button
            key={t}
            className={`px-3 py-1 rounded ${selectedTag === t ? 'bg-gray-800 text-white' : 'bg-gray-100'}`}
            onClick={() => setSelectedTag((s) => (s === t ? null : t))}
          >
            {t}
          </button>
        ))}
      </div>

      <MediaGrid items={unique} onOpen={(idx) => setLightboxIndex(idx)} />

      {lightboxIndex !== null && (
        <Lightbox
          items={unique}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}
