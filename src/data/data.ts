import tImg1 from "@/assets/images/ourTop/Trenton modular sofa_3 1.png";
import tImg2 from "@/assets/images/ourTop/Granite dining table with dining chair 1.png";
import tImg3 from "@/assets/images/ourTop/Outdoor bar table and stool 1.png";
import tImg4 from "@/assets/images/ourTop/Plain console with teak mirror 1.png";
import bImg1 from "@/assets/images/blog/Rectangle 13.png";
import bImg2 from "@/assets/images/blog/Rectangle 14.png";
import bImg3 from "@/assets/images/blog/Rectangle 15.png";

import icon1 from "@/assets/icons/Vector (1).png";
import icon2 from "@/assets/icons/Vector (2).png";
import icon3 from "@/assets/icons/Vector (3).png";
import icon from "@/assets/icons/Vector.png";

import { IBlog, IIcons, ILinks, IProduct } from "@/types/types";
export const icons: IIcons[] = [
  { icon: icon3, link: "" },
  { icon: icon2, link: "" },
  { icon: icon1, link: "/wishlist" },
  { icon: icon, link: "/carts" },
];

export const links: ILinks[] = [
  { label: "Home", url: "/" },
  { label: "Shop", url: "/shop" },
  { label: "About", url: "#about" },
  { label: "Contact", url: "/contact" },
];
export const ourtTopData: IProduct[] = [
  {
    id: "1",
    name: "Trenton modular sofa_3",
    price: "Rs. 25,000.00",
    image: tImg1,
  },
  {
    id: "2",
    name: "Granite dining table with dining chair",
    price: "Rs. 25,000.00",
    image: tImg2,
  },
  {
    id: "3",
    name: "Outdoor bar table and stool",
    price: "Rs. 25,000.00",
    image: tImg3,
  },
  {
    id: "4",
    name: "Plain console with teak mirror",
    price: "Rs. 25,000.00",
    image: tImg4,
  },
];

export const blogData: IBlog[] = [
  {
    id: "1",
    title: "Going all in with millennial design",
    image: bImg1,
    readTime: "3 min",
    date: "Oct 2022",
  },
  {
    id: "2",
    title: "Going all in with millennial design",
    image: bImg2,
    readTime: "3 min",
    date: "Oct 2022",
  },
  {
    id: "3",
    title: "Going all in with millennial design",
    image: bImg3,
    readTime: "3 min",
    date: "Oct 2022",
  },
];
