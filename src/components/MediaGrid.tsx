import type { MediaItem } from '../data/media';
import MediaCard from './MediaCard';

type Props = {
  items: MediaItem[];
  onOpen: (index: number) => void;
};

export default function MediaGrid({ items, onOpen }: Props) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item, i) => (
        <MediaCard key={item.id} item={item} onClick={() => onOpen(i)} />
      ))}
    </div>
  );
}
