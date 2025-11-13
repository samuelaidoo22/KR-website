'use client';

import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';

export default function CartButton() {
  const totalItems = useCartStore((state) => state.getTotalItems());

  return (
    <Link href="/cart" className="relative p-2 text-brown-800 hover:text-gold-600 transition-colors duration-200">
      <ShoppingCart size={28} />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-gold-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-bounce-slow">
          {totalItems}
        </span>
      )}
    </Link>
  );
}