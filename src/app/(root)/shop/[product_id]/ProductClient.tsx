"use client";

import { useCartStore } from "@/context/store/CartStore";
import { ICartStore, IProduct } from "@/types/types";
import { Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProductClient({ product }: { product: IProduct }) {
  const { addToCart } = useCartStore() as ICartStore;
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("L");
  const [selectedColor, setSelectedColor] = useState("purple");
  const [quantity, setQuantity] = useState(1);
  const [images, setImages] = useState([
    product.imagePath,
    product.imagePath,
    product.imagePath,
  ]);

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap items-center gap-2 text-sm py-12">
        <span className="text-custom-gray text-lg">
          <Link href={"/"}>Home</Link>
        </span>
        <span className="text-2xl">&gt;</span>
        <span className="text-custom-gray text-lg">
          <Link href={"/shop"}>Shop</Link>
        </span>
        <span className="text-2xl">&gt;</span>
        <span className="text-gray-900">
          <span className=" text-custom-gray text-2xl">| </span>
          <span className="text-2xl">{product.name}</span>
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[100px,2fr,2fr] gap-4">
        <div className="md:space-y-4 flex lg:flex-col overflow-x-auto gap-4 lg:gap-0">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`flex-shrink-0 aspect-square bg-[#F9F1E7] rounded-lg p-2 ${
                selectedImage === index ? "ring-2 ring-custom-gray" : ""
              }`}
            >
              <Image
                src={img}
                alt={`Product view ${index + 1}`}
                width={100}
                height={100}
                className="w-full h-full object-contain"
              />
            </button>
          ))}
        </div>
        <div className="space-y-4">
          <div className="aspect-square bg-[#F9F1E7] rounded-lg p-0">
            <Image
              src={images[selectedImage]}
              alt="Product view"
              className="w-full h-full"
              height={1000}
              width={1000}
            />
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-medium">{product.name}</h1>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-4 h-4 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <span className="text-gray-500 text-sm">5 Customer Review</span>
          </div>
          <div className="text-2xl">Rs. {product.price}</div>
          <p className="text-gray-600 text-sm md:text-base">
            {product.description}
          </p>

          {/* Size Selector */}
          <div className="space-y-2">
            <span className="text-sm text-gray-600">Size</span>
            <div className="flex gap-4">
              {["L", "XL", "XS"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-10 h-10 rounded-lg border ${
                    selectedSize === size
                      ? "border-black bg-black text-white"
                      : "border-gray-200"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selector */}
          <div className="space-y-2">
            <span className="text-sm text-gray-600">Color</span>
            <div className="flex gap-4">
              {[
                { name: "purple", class: "bg-purple-600" },
                { name: "black", class: "bg-black" },
                { name: "gold", class: "bg-yellow-700" },
              ].map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-8 h-8 rounded-full ${color.class} ${
                    selectedColor === color.name
                      ? "ring-2 ring-black ring-offset-2"
                      : ""
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex items-center border border-gray-200 rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2 text-lg"
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-12 text-center border-0 focus:ring-0"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2 text-lg"
              >
                +
              </button>
            </div>
            <button
              onClick={() => {
                addToCart({
                  ...product,
                  id: product._id,
                  size: selectedSize,
                  color: selectedColor,
                  quantity: quantity,
                });
              }}
              className="px-8 py-2 bg-white text-black border-2 border-black rounded-lg hover:bg-black hover:text-white transition-colors"
            >
              Add To Cart
            </button>
          </div>

          {/* Product Meta */}
          <div className="pt-6 space-y-2 border-t text-sm">
            <div className="flex gap-2">
              <span className="text-gray-600">SKU</span>
              <span>:</span>
              <span>SS001</span>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-600">Category</span>
              <span>:</span>
              <span>{product.category}</span>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-600">Tags</span>
              <span>:</span>
              <span>Sofa, Chair, Home, Shop</span>
            </div>
            <div className="flex gap-2">
              <span className="text-gray-600">Share</span>
              <span>:</span>
              <div className="flex gap-2">
                <button className="hover:text-gray-600">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>
                <button className="hover:text-gray-600">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </button>
              </div>
              <button className="pl-20">
                <Heart className="w-5 h-5 text-red-500" />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
