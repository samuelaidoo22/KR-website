'use client';

import { useState } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Filter } from 'lucide-react';

export default function ShopPage() {
  const [sortBy, setSortBy] = useState('popular');
  const [filterSize, setFilterSize] = useState('all');

  let filteredProducts = [...products];

  // Filter by size
  if (filterSize !== 'all') {
    filteredProducts = filteredProducts.filter(p => p.size === filterSize);
  }

  // Sort products
  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-brown-900 mb-4">Shop Kyidom Rice</h1>
        <p className="text-lg text-gray-700 mb-8">Premium quality rice in various sizes</p>

        {/* Filters & Sort */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-gold-600" />
              <span className="font-semibold">Filter & Sort:</span>
            </div>
            
            <select
              value={filterSize}
              onChange={(e) => setFilterSize(e.target.value)}
              className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-gold-600 focus:outline-none"
            >
              <option value="all">All Sizes</option>
              <option value="5kg">5kg</option>
              <option value="10kg">10kg</option>
              <option value="25kg">25kg</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-gold-600 focus:outline-none"
            >
              <option value="popular">Most Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>

            <div className="ml-auto text-gray-600">
              {filteredProducts.length} products found
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}