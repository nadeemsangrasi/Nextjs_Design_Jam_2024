import tImg1 from "@/assets/images/ourTop/Trenton modular sofa_3 1.png";
import tImg2 from "@/assets/images/ourTop/Granite dining table with dining chair 1.png";
import tImg3 from "@/assets/images/ourTop/Outdoor bar table and stool 1.png";
import tImg4 from "@/assets/images/ourTop/Plain console with teak mirror 1.png";
import bImg1 from "@/assets/images/blog/Rectangle 13.png";
import bImg2 from "@/assets/images/blog/Rectangle 14.png";
import bImg3 from "@/assets/images/blog/Rectangle 15.png";
import img1 from "@/assets/images/shop/Bella chair and table 1.png";
import img2 from "@/assets/images/shop/Cloud sofa three seater + ottoman_1 1.png";
import img3 from "@/assets/images/shop/Grain coffee table 1.png";
import img4 from "@/assets/images/shop/Grain coffee table 1.png";
import img5 from "@/assets/images/shop/Kent coffee table 1.png";
import img6 from "@/assets/images/shop/Maya sofa three seater 1.png";
import img7 from "@/assets/images/shop/Outdoor sofa set 1 (1).png";
import img8 from "@/assets/images/shop/Outdoor sofa set 1.png";
import img9 from "@/assets/images/shop/Plain console_ 1.png";
import img10 from "@/assets/images/shop/Reclaimed teak Sideboard 1.png";
import img11 from "@/assets/images/shop/Round coffee table_color 2 1.png";
import img12 from "@/assets/images/shop/SJP_0825  1.png";

import icon1 from "@/assets/icons/Vector (1).png";
import icon2 from "@/assets/icons/Vector (2).png";
import icon3 from "@/assets/icons/Vector (3).png";
import icon from "@/assets/icons/Vector.png";

import { IBlog, IIcons, ILinks, IProduct } from "@/types/types";
export const icons: IIcons[] = [
  { icon: icon3, link: "/account" },
  { icon: icon2, link: "/" },
  { icon: icon1, link: "/" },
  { icon: icon, link: "/cart" },
];

export const links: ILinks[] = [
  { label: "Home", url: "/" },
  { label: "Shop", url: "/shop" },
  { label: "Blogs", url: "/blogs" },
  { label: "Contact", url: "/contact" },
];
export const ourtTopData: IProduct[] = [
  {
    id: "1",
    name: "Trenton modular sofa_3",
    price: "Rs. 25,000.00",
    image: tImg1,
    images: [
      { id: "14.1", url: bImg3 },
      { id: "14.2", url: bImg2 },
    ],
    description: "Durable outdoor sofa set perfect for your garden or balcony.",
    averageRating: "4.6",
  },
  {
    id: "2",
    name: "Granite dining table with dining chair",
    price: "Rs. 25,000.00",
    image: tImg2,
    images: [
      { id: "14.1", url: img2 },
      { id: "14.2", url: img1 },
    ],
    description: "Durable outdoor sofa set perfect for your garden or balcony.",
    averageRating: "4.6",
  },
  {
    id: "3",
    name: "Outdoor bar table and stool",
    price: "Rs. 25,000.00",
    image: tImg3,
    images: [
      { id: "14.1", url: bImg1 },
      { id: "14.2", url: bImg2 },
    ],
    description: "Durable outdoor sofa set perfect for your garden or balcony.",
    averageRating: "4.6",
  },
  {
    id: "4",
    name: "Plain console with teak mirror",
    price: "Rs. 25,000.00",
    image: tImg4,
    images: [
      { id: "14.1", url: img1 },
      { id: "14.2", url: img2 },
    ],
    description: "Durable outdoor sofa set perfect for your garden or balcony.",
    averageRating: "4.6",
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

export const products: IProduct[] = [
  {
    id: "1",
    name: "Twerton Modular Sofa",
    price: "Rs. 25,000.00",
    image: img2,
    images: [
      { id: "1.1", url: img1 },
      { id: "1.2", url: img2 },
    ],
    description: "Comfortable modular sofa for your living room.",
    averageRating: "4.5",
  },
  {
    id: "2",
    name: "Granite Dining Table with Chairs",
    price: "Rs. 25,000.00",
    image: img3,
    images: [
      { id: "2.1", url: img3 },
      { id: "2.2", url: img4 },
    ],
    description: "Modern dining table with granite top and matching chairs.",
    averageRating: "4.7",
  },
  {
    id: "3",
    name: "Outdoor Bar Table and Stool",
    price: "Rs. 15,000.00",
    image: img4,
    images: [
      { id: "3.1", url: img4 },
      { id: "3.2", url: img5 },
    ],
    description: "Perfect for outdoor gatherings and parties.",
    averageRating: "4.6",
  },
  {
    id: "4",
    name: "Plain Console with Teak Mirror",
    price: "Rs. 20,000.00",
    image: img6,
    images: [
      { id: "4.1", url: img6 },
      { id: "4.2", url: img7 },
    ],
    description: "Elegant console with a teak-framed mirror.",
    averageRating: "4.4",
  },
  {
    id: "5",
    name: "Grain Coffee Table",
    price: "Rs. 15,000.00",
    image: img8,
    images: [
      { id: "5.1", url: img8 },
      { id: "5.2", url: img9 },
    ],
    description: "Minimalistic coffee table for modern homes.",
    averageRating: "4.3",
  },
  {
    id: "6",
    name: "Kent Coffee Table",
    price: "Rs. 22,500.00",
    image: img10,
    images: [
      { id: "6.1", url: img10 },
      { id: "6.2", url: img11 },
      { id: "6.3", url: img12 },
    ],
    description: "Stylish coffee table with a sleek design.",
    averageRating: "4.8",
  },
  {
    id: "7",
    name: "Outdoor Sofa Set",
    price: "Rs. 50,000.00",
    image: img7,
    images: [
      { id: "7.1", url: img7 },
      { id: "7.2", url: img8 },
    ],
    description: "Durable outdoor sofa set perfect for your garden or balcony.",
    averageRating: "4.6",
  },
  {
    id: "8",
    name: "Reclaimed Teak Sideboard",
    price: "Rs. 45,000.00",
    image: img9,
    images: [
      { id: "8.1", url: img9 },
      { id: "8.2", url: img10 },
    ],
    description: "Eco-friendly sideboard made from reclaimed teak.",
    averageRating: "4.7",
  },
  {
    id: "9",
    name: "Round Coffee Table",
    price: "Rs. 30,000.00",
    image: img11,
    images: [
      { id: "9.1", url: img11 },
      { id: "9.2", url: img12 },
    ],
    description: "Elegant round coffee table to complement your living room.",
    averageRating: "4.6",
  },
  {
    id: "10",
    name: "Maya Sofa Three Seater",
    price: "Rs. 55,000.00",
    image: img6,
    images: [
      { id: "10.1", url: img6 },
      { id: "10.2", url: img7 },
    ],
    description: "Spacious and comfortable three-seater sofa for family use.",
    averageRating: "4.8",
  },
];
