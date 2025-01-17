import { products } from "./../data/data";
import { StaticImageData } from "next/image";

export interface IIcons {
  icon: StaticImageData;
  link: string;
}
export interface ILinks {
  label: string;
  url: string;
}
interface IProductImage {
  id: string;
  url: StaticImageData;
}

export interface IProduct {
  _id: string;
  name: string;
  imagePath: string;
  price: string;
  description: string;
  discountPercentage: string;
  isFeaturedProduct: boolean;
  stockLevel: number;
  category: string;
}

export interface IBlog {
  id: string;
  title: string;
  readTime: string;
  date: string;
  image: StaticImageData;
}

export interface ICartStore {
  cart: ICart[];
  addToCart: (newItem: {
    id: string;
    name: string;
    imagePath: string;
    price: string;
    description: string;
    discountPercentage: string;
    isFeaturedProduct: boolean;
    stockLevel: number;
    category: string;
    color: string;
    size: string;
    quantity: number;
  }) => void;
  removeFromCart: (itemId: string) => void;
  totalAmount: number;
  handleCartIncrement: (id: string) => void;
  handleCartDecrement: (id: string) => void;
}

export interface ICart {
  id: string;
  userId: string;
  productId: string;
  productTitle: string;
  productImage: string;
  productPrice: number;
  quantity: number;
  productStock: number;
  productSize: string;
  productColor: string;
}
