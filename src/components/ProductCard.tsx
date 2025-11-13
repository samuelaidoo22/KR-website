'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '@/data/products';
import { useCartStore } from '@/store/cartStore';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      size: product.size,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <div className="card">
      <Link href={`/product/${product.id}`}>
        <div className="relative h-64 bg-gray-100">
          <Image src={product.image} alt={product.name} fill className="object-cover" />
        </div>
      </Link>
      
      <div className="p-6">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-xl font-bold text-brown-900 mb-2 hover:text-gold-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-2">{product.size}</p>
        
        <div className="flex items-center mb-3">
          <Star className="w-5 h-5 text-gold-500 fill-current" />
          <span className="ml-1 text-sm text-gray-700">{product.rating} ({product.reviews} reviews)</span>
        </div>
        
        <p className="text-gray-700 mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gold-600">GH₵ {product.price.toFixed(2)}</span>
          <button
            onClick={handleAddToCart}
            className="bg-gold-600 hover:bg-gold-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center space-x-2"
          >
            <ShoppingCart size={20} />
            <span>Add to Cart</span>
          </button>
        </div>
        
        {!product.inStock && (
          <div className="mt-3 text-red-600 font-semibold">Out of Stock</div>
        )}
      </div>
    </div>
  );
}