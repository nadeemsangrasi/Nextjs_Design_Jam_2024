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
  id: string;
  name: string;
  price: string;
  image: StaticImageData;
  price: string;
  images: IProductImage[];
  description: string;
  averageRating: string;
}

export interface IBlog {
  id: string;
  title: string;
  readTime: string;
  date: string;
  image: StaticImageData;
}
