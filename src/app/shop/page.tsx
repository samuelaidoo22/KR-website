import { redirect } from 'next/navigation';

export default function ShopPage() {
  // Redirect `/shop` to `/products` since the shop page has been removed
  redirect('/products');
}