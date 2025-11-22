import type { MediaItem } from '../data/media';

type Props = {
  item: MediaItem;
  onClick?: () => void;
};

export default function MediaCard({ item, onClick }: Props) {
  return (
    <div className="rounded overflow-hidden bg-white shadow-sm">
      <button onClick={onClick} className="block w-full text-left">
        <img src={item.src} alt={item.alt} className="w-full h-40 object-cover" />
        <span className="sr-only">{item.alt}</span>
      </button>
    </div>
  );
}
