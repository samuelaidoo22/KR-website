export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: 'recipe' | 'health' | 'farming';
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Perfect Jollof Rice with Kyidom Rice',
    excerpt: 'Learn how to make the perfect Jollof rice using premium Kyidom Rice. A step-by-step guide to Ghana\'s favorite dish.',
    content: 'Ingredients: 4 cups Kyidom Rice, 6 cups chicken stock, 1 can tomato paste, 4 fresh tomatoes (blended), 2 onions (1 blended, 1 sliced), 3 tbsp vegetable oil, 2 tbsp butter, 2 bay leaves, 1 tsp curry powder, 1 tsp thyme, 2 Maggi cubes, Salt and pepper to taste, Scotch bonnet peppers (optional)...',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800',
    category: 'recipe',
    date: '2024-01-15',
    readTime: '5 min read',
  },
  {
    id: '2',
    title: '10 Health Benefits of Eating Local Rice',
    excerpt: 'Discover why choosing local Kyidom Rice is better for your health and supports Ghana\'s economy.',
    content: 'Local rice offers numerous health benefits: 1. Fresher nutrients - shorter time from farm to table. 2. No artificial preservatives. 3. Rich in essential minerals. 4. Better digestibility. 5. Supports local economy...',
    image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=800',
    category: 'health',
    date: '2024-01-10',
    readTime: '7 min read',
  },
  {
    id: '3',
    title: 'How Kyidom Rice Supports Local Farmers',
    excerpt: 'Behind the scenes: Meet the farmers who grow Kyidom Rice and learn about sustainable farming practices.',
    content: 'At Kyidom Rice, we partner with over 500 local farmers across Ghana. Our commitment goes beyond just buying rice - we provide training, fair prices, and sustainable farming support...',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800',
    category: 'farming',
    date: '2024-01-05',
    readTime: '6 min read',
  },
  {
    id: '4',
    title: 'Waakye Recipe: Traditional Ghanaian Breakfast',
    excerpt: 'Make authentic Waakye with Kyidom Rice. A nutritious and delicious way to start your day.',
    content: 'Waakye is a beloved Ghanaian dish made with rice and beans. Using Kyidom Rice ensures the best flavor and texture. Ingredients needed: Kyidom Rice, black-eyed peas, millet stalks, baking soda...',
    image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=800',
    category: 'recipe',
    date: '2024-01-01',
    readTime: '4 min read',
  },
  {
    id: '5',
    title: 'The Journey from Farm to Your Table',
    excerpt: 'Follow the complete journey of Kyidom Rice from planting to packaging.',
    content: 'Every grain of Kyidom Rice has a story. It begins in the fertile fields of Ghana, where our partner farmers carefully plant and nurture each crop...',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800',
    category: 'farming',
    date: '2023-12-20',
    readTime: '8 min read',
  },
  {
    id: '6',
    title: 'Fried Rice Recipe with a Ghanaian Twist',
    excerpt: 'Transform leftover Kyidom Rice into a delicious fried rice dish with local ingredients.',
    content: 'Fried rice is versatile and perfect for using leftover Kyidom Rice. This recipe adds a Ghanaian twist with local vegetables and spices...',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800',
    category: 'recipe',
    date: '2023-12-15',
    readTime: '5 min read',
  },
];