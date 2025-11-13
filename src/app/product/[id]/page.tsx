'use client';
import { useParams } from 'next/navigation';
import { products } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import Image from 'next/image';
import { ShoppingCart, Star } from 'lucide-react';
import { useState } from 'react';

export default function ProductDetailPage() {
  const params = useParams();
  const addItem = useCartStore((state) => state.addItem);
  const [quantity, setQuantity] = useState(1);
  const product = products.find(p => p.id === params.id);

  if (!product) return <div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl">Product Not Found</h1></div>;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({ id: product.id, name: product.name, size: product.size, price: product.price, image: product.image });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-xl shadow-lg p-8">
          <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
            <Image src={product.image} alt={product.name} fill className="object-cover" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-brown-900 mb-4">{product.name}</h1>
            <p className="text-xl text-gray-700 mb-4">{product.size}</p>
            <div className="text-4xl font-bold text-gold-600 mb-6">GH₵ {product.price.toFixed(2)}</div>
            <p className="text-gray-700 mb-8">{product.description}</p>
            <div className="flex items-center gap-3 mb-6">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-12 h-12 bg-gray-200 rounded-lg font-bold">-</button>
              <span className="text-2xl font-semibold w-16 text-center">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="w-12 h-12 bg-gray-200 rounded-lg font-bold">+</button>
            </div>
            <button onClick={handleAddToCart} className="btn-primary flex items-center"><ShoppingCart className="mr-2" size={24} />Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}