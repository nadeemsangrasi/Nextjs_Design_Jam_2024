import { StaticImageData } from "next/image";

export interface IIcons {
  icon: StaticImageData;
  link: string;
}
export interface ILinks {
  label: string;
  url: string;
}
export interface IProduct {
  id: string;
  name: string;
  price: string;
  image: StaticImageData;
}

export interface IBlog {
  id: string;
  title: string;
  readTime: string;
  date: string;
  image: StaticImageData;
}
