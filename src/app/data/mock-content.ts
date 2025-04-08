
import { Product } from '../Shared/models/product';

export const mockProductList: Product[] = [
  {
    id: 1,
    name: "Desktop",
    price: 1000,
    category: "Android",
    color: false
  },
  {
    id: 2,
    name: "iphone 11",
    price: 1100,
    category: "iOS",
    color: false
  },
  {
    id: 3,
    name: "Airpods",
    category: "iOS",
    price: 130,
    color: true
  },
  {
    id: 4,
    name: "Monitor",
    price: 100,
    category: "Hardware",
    color: false
  },
  {
    id: 5,
    name: "Mouse",
    price: 10,
    category: "Hardware",
    color: true
  },
  {
    id: 6,
    name: "tablet",
    price: 10,
    category: "Hardware",
    color: true
  }
];
