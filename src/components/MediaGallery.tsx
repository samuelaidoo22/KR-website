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
  const [visible, setVisible] = useState(9);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = selectedTag ? items.filter((i) => (i.tags || []).includes(selectedTag)) : items;

  const showMore = () => setVisible((v) => v + 9);

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

      <MediaGrid items={filtered.slice(0, visible)} onOpen={(idx) => setLightboxIndex(idx)} />

      {visible < filtered.length && (
        <div className="mt-6 text-center">
          <button className="px-4 py-2 bg-gray-800 text-white rounded" onClick={showMore}>
            Load more
          </button>
        </div>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}
