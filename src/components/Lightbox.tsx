"use client";
import { useEffect, useState } from 'react';
import type { MediaItem } from '../data/media';

type Props = {
  items: MediaItem[];
  startIndex: number;
  onClose: () => void;
};

export default function Lightbox({ items, startIndex, onClose }: Props) {
  const [index, setIndex] = useState(startIndex);

  useEffect(() => setIndex(startIndex), [startIndex]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setIndex((i) => Math.max(0, i - 1));
      if (e.key === 'ArrowRight') setIndex((i) => Math.min(items.length - 1, i + 1));
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [items.length, onClose]);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(items.length - 1, i + 1));

  const item = items[index];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="relative max-w-4xl w-full mx-4">
        <button className="absolute top-2 right-2 text-white text-2xl" onClick={onClose} aria-label="Close">×</button>

        <div className="bg-white rounded">
          <img src={item.src} alt={item.alt} className="w-full max-h-[70vh] object-contain bg-black" />
          <div className="p-4 flex items-center justify-between">
            <div className="text-sm text-gray-200">{item.alt}</div>
            <div className="flex gap-2">
              <button onClick={prev} className="px-3 py-1 bg-gray-800 text-white rounded">Prev</button>
              <button onClick={next} className="px-3 py-1 bg-gray-800 text-white rounded">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
