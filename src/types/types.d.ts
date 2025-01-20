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
  images: { url: string }[];
}

export interface ICartStore {
  cart: ICart[];
  wishList: IWishList[];
  addToWishList: (newItem: {
    id: string;
    name: string;
    imagePath: string;
    price: string;
  }) => void;
  removeFromWishList: (itemId: string) => void;
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
    images: { url: string }[];
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
export interface IWishList {
  id: string;
  userId: string;
  productId: string;
  productTitle: string;
  productImage: string;
  productPrice: number;
}
export interface IBlogPost {
  _id: string;
  title: string; // The title of the blog post
  author: string; // The author of the blog post
  publishedAt: string; // The publication date in ISO format
  category: string; // The category of the blog post
  excerpt: string; // A short summary of the blog post
  imageUrl: string; // The image object for the blog post
}
