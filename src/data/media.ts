export type MediaItem = {
  id: string;
  src: string;
  alt: string;
  tags?: string[];
  date?: string;
};

export const mediaItems: MediaItem[] = [
  { id: '1', src: '/pics/IMG-20250315-WA0008.jpg', alt: 'Kyidom packaging', tags: ['product', 'packaging'], date: '2025-03-15' },
  { id: '2', src: '/pics/IMG-20250315-WA0010.jpg', alt: 'Chef selection bulk packs', tags: ['product', 'bulk'], date: '2025-03-15' },
  { id: '3', src: '/pics/IMG-20250315-WA0014.jpg', alt: 'Kyidom product hero', tags: ['hero', 'product'], date: '2025-03-15' },
  { id: '4', src: '/pics/IMG-20250315-WA0029.jpg', alt: 'Female agripreneur holding Kyidom rice', tags: ['people', 'farm'], date: '2025-03-15' },
  { id: '5', src: '/pics/IMG-20250315-WA0037.jpg', alt: 'Retail outlet', tags: ['retail','outlet'], date: '2025-03-15' },
  { id: '6', src: '/pics/IMG-20250315-WA0026.jpg', alt: 'Rice closeup', tags: ['product'], date: '2025-03-15' },
  { id: '7', src: '/pics/IMG-20250315-WA0041.jpg', alt: 'Field harvest', tags: ['farm','people'], date: '2025-03-15' },
  { id: '8', src: '/pics/IMG-20250315-WA0054.jpg', alt: 'Packed bags', tags: ['packaging','product'], date: '2025-03-15' },
  { id: '9', src: '/pics/IMG-20250315-WA0063.jpg', alt: 'Distribution', tags: ['logistics'], date: '2025-03-15' },
];

export const allTags = Array.from(new Set(mediaItems.flatMap((m) => m.tags || [])));
