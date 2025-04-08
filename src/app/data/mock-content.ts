
import { Product } from '../Shared/models/product';

export const ProductList: Product[] = [
  {
    id: 1,
    name: "Desktop",
    price: 1000,
    category: "Android",
    color: false,
    imageUrl: 'laptop.jpeg'
  },
  {
    id: 2,
    name: "iphone 11",
    price: 1100,
    category: "iOS",
    color: false,
    imageUrl: 'iphone11.jpeg'
  },
  {
    id: 3,
    name: "Airpods",
    category: "iOS",
    price: 130,
    color: true,
    imageUrl: 'OIP.jpeg'
  },
  {
    id: 4,
    name: "Monitor",
    price: 100,
    category: "Hardware",
    color: false,
    imageUrl: 'monitor.jpeg'
  },
  {
    id: 5,
    name: "Mouse",
    price: 10,
    category: "Hardware",
    color: true,
    imageUrl: 'mouse.jpeg'
  },
  {
    id: 6,
    name: "tablet",
    price: 10,
    category: "Hardware",
    color: true,
    imageUrl: 'tablet.jpeg'
  }
];
