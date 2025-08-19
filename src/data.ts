export const CATEGORIES = ['books', 'tech'] as const;
export type Category = typeof CATEGORIES[number];

export interface Product {
  id: number;
  title: string;
  category: Category;
  price: number;
  imageUrl: string;
}

export const PRODUCTS: Product[] = [
  // Books
  {
    id: 1,
    title: 'Signals & Slots: Reactive UIs with Angular',
    category: 'books',
    price: 29.99,
    imageUrl: 'https://picsum.photos/seed/ang-book-1/600/400'
  },
  {
    id: 2,
    title: 'Mastering Angular Forms',
    category: 'books',
    price: 34.5,
    imageUrl: 'https://picsum.photos/seed/ang-book-2/600/400'
  },
  {
    id: 3,
    title: 'Zoneless in Practice',
    category: 'books',
    price: 27.0,
    imageUrl: 'https://picsum.photos/seed/ang-book-3/600/400'
  },
  {
    id: 4,
    title: 'RxJS by Example — 2025 Edition',
    category: 'books',
    price: 39.0,
    imageUrl: 'https://picsum.photos/seed/ang-book-4/600/400'
  },
  {
    id: 5,
    title: 'TypeScript Tactics',
    category: 'books',
    price: 24.5,
    imageUrl: 'https://picsum.photos/seed/ang-book-5/600/400'
  },
  {
    id: 6,
    title: 'Patterns for Angular Components',
    category: 'books',
    price: 31.25,
    imageUrl: 'https://picsum.photos/seed/ang-book-6/600/400'
  },
  {
    id: 7,
    title: 'CDK Cookbook',
    category: 'books',
    price: 28.75,
    imageUrl: 'https://picsum.photos/seed/ang-book-7/600/400'
  },
  {
    id: 8,
    title: 'Web Animations in Angular',
    category: 'books',
    price: 26.0,
    imageUrl: 'https://picsum.photos/seed/ang-book-8/600/400'
  },

  // Tech
  {
    id: 101,
    title: 'Wireless Mechanical Keyboard',
    category: 'tech',
    price: 129.99,
    imageUrl: 'https://picsum.photos/seed/ang-tech-1/600/400'
  },
  {
    id: 102,
    title: 'USB-C Dock (11-in-1)',
    category: 'tech',
    price: 89.0,
    imageUrl: 'https://picsum.photos/seed/ang-tech-2/600/400'
  },
  {
    id: 103,
    title: '1080p USB Camera',
    category: 'tech',
    price: 54.0,
    imageUrl: 'https://picsum.photos/seed/ang-tech-3/600/400'
  },
  {
    id: 104,
    title: 'Noise-Canceling Headphones',
    category: 'tech',
    price: 199.0,
    imageUrl: 'https://picsum.photos/seed/ang-tech-4/600/400'
  },
  {
    id: 105,
    title: 'Portable SSD — 1TB',
    category: 'tech',
    price: 109.0,
    imageUrl: 'https://picsum.photos/seed/ang-tech-5/600/400'
  },
  {
    id: 106,
    title: '27″ 4K Monitor',
    category: 'tech',
    price: 349.0,
    imageUrl: 'https://picsum.photos/seed/ang-tech-6/600/400'
  },
  {
    id: 107,
    title: 'Ergonomic Mouse',
    category: 'tech',
    price: 59.0,
    imageUrl: 'https://picsum.photos/seed/ang-tech-7/600/400'
  },
  {
    id: 108,
    title: 'Adjustable Desk LED Light',
    category: 'tech',
    price: 39.0,
    imageUrl: 'https://picsum.photos/seed/ang-tech-8/600/400'
  }
];
