export interface Product {
  id: string;
  name: string;
  size: string;
  price: number;
  description: string;
  image: string;
  inStock: boolean;
  rating: number;
  reviews: number;
}

const productImages = [
  '/pics/IMG-20250315-WA0008.jpg',
  '/pics/IMG-20250315-WA0009.jpg',
  '/pics/IMG-20250315-WA0010.jpg',
  '/pics/IMG-20250315-WA0012.jpg',
  '/pics/IMG-20250315-WA0014.jpg',
  '/pics/IMG-20250315-WA0016.jpg',
];

const baseProducts: Array<Omit<Product, 'image'>> = [
  {
    id: '1', name: 'Kyidom Premium Rice', size: '5kg', price: 45.0,
    description: 'Premium quality locally grown rice, perfect for all dishes.',
    inStock: true, rating: 4.8, reviews: 124,
  },
  {
    id: '2', name: 'Kyidom Premium Rice', size: '10kg', price: 85.0,
    description: 'Most popular family size, premium quality.',
    inStock: true, rating: 4.9, reviews: 287,
  },
  {
    id: '3', name: 'Kyidom Premium Rice', size: '25kg', price: 200.0,
    description: 'Best value bulk pack for large families.',
    inStock: true, rating: 4.7, reviews: 156,
  },
  {
    id: '4', name: 'Kyidom Organic Rice', size: '5kg', price: 55.0,
    description: '100% organic, pesticide-free premium rice.',
    inStock: true, rating: 5.0, reviews: 89,
  },
  {
    id: '5', name: 'Kyidom Organic Rice', size: '10kg', price: 105.0,
    description: 'Organic family size for health-conscious consumers.',
    inStock: true, rating: 4.9, reviews: 143,
  },
  {
    id: '6', name: 'Kyidom Jasmine Rice', size: '5kg', price: 50.0,
    description: 'Fragrant jasmine variety for special occasions.',
    inStock: true, rating: 4.8, reviews: 67,
  },
];

export const products: Product[] = baseProducts.map((product, index) => ({
  ...product,
  image: productImages[index % productImages.length],
}));