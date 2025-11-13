'use client';

import { useState } from 'react';
import { blogPosts } from '@/data/blogPosts';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Tag } from 'lucide-react';

export default function BlogPage() {
  const [filter, setFilter] = useState<'all' | 'recipe' | 'health' | 'farming'>('all');

  const filteredPosts = filter === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filter);

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'recipe': return 'bg-gold-500 text-white';
      case 'health': return 'bg-green-500 text-white';
      case 'farming': return 'bg-brown-700 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-brown-900 mb-4">Blog & Recipes</h1>
        <p className="text-lg text-gray-700 mb-8">Stories, recipes, and insights about Kyidom Rice</p>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              filter === 'all' ? 'bg-gold-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            All Posts
          </button>
          <button
            onClick={() => setFilter('recipe')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              filter === 'recipe' ? 'bg-gold-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Recipes
          </button>
          <button
            onClick={() => setFilter('health')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              filter === 'health' ? 'bg-gold-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Health
          </button>
          <button
            onClick={() => setFilter('farming')}
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              filter === 'farming' ? 'bg-gold-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            Farming
          </button>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="card">
              <div className="relative h-64 bg-gray-100">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
                <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${getCategoryColor(post.category)}`}>
                  {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                </span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <span className="flex items-center gap-1">
                    <Clock size={16} />
                    {post.readTime}
                  </span>
                  <span>{new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                </div>
                
                <h2 className="text-2xl font-bold text-brown-900 mb-3 hover:text-gold-600 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-700 mb-4 line-clamp-3">{post.excerpt}</p>
                
                <Link href={`/blog/${post.id}`} className="text-gold-600 hover:text-gold-700 font-semibold">
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No posts found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}