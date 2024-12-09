"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Minus, Plus, Truck, RotateCcw } from "lucide-react";

export default function ProductDetails() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState("M");

  const images = [
    "/images/products/1.jpg",
    "/images/products/2.jpg",
    "/images/products/3.jpg",
    "/images/products/4.jpg",
  ];

  const relatedProducts = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: 192.0,
      rating: 4.5,
      reviews: 88,
      image: "/images/products/1.jpg",
      discount: "-40%",
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      price: 960.0,
      rating: 4.0,
      reviews: 75,
      image: "/images/products/2.jpg",
      discount: "-35%",
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      price: 370.0,
      rating: 4.8,
      reviews: 99,
      image: "/images/products/3.jpg",
      discount: "-30%",
    },
    {
      id: 4,
      name: "RGB Liquid CPU Cooler",
      price: 160.0,
      rating: 4.4,
      reviews: 65,
      image: "/images/products/4.jpg",
      discount: "-25%",
    },
    {
      id: 5,
      name: "AK-900 Wired Keyboard",
      price: 960.0,
      rating: 4.0,
      reviews: 75,
      image: "/images/products/5.jpg",
      discount: "-35%",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-sm mb-8">
        <Link href="/" className="text-gray-500 hover:text-gray-700">
          Home
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link href="/gaming" className="text-gray-500 hover:text-gray-700">
          Gaming
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-900">Havit HV-G92 Gamepad</span>
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative h-[380px]  ">
            <Image
              src={images[selectedImage]}
              alt="Product"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative  h-24 w-full rounded-lg overflow-hidden border-2 ${
                  selectedImage === index
                    ? "border-red-500"
                    : "border-transparent"
                }`}
              >
                <Image
                  src={image}
                  alt={`Product view ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Havit HV-G92 Gamepad</h1>
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <span className="text-gray-500">(150 Reviews)</span>
              <span className="text-gray-300">|</span>
              <span className="text-green-500">In Stock</span>
            </div>
          </div>

          <div>
            <span className="text-2xl font-bold pt-4">$192.00</span>

            <p className="text-gray-600  ">
              PlayStation 5 Controller Skin High quality and durable, with a
              beautiful design. This PS5 Controller Skin protect your device
              from scratches
            </p>
          </div>
          {/* <div className="w-full border border-gray-200 "></div> */}

          <div className="space-y-4  ">
            {/* choose colour */}
            <div className="flex items-center gap-4 ">
              <h3 className="font-medium  ">Colours:</h3>
              <div className="flex gap-2 ">
                <button
                  onClick={() => setSelectedColor("black")}
                  className={`w-4 h-4 rounded-full bg-black ${
                    selectedColor === "black"
                      ? "ring-2 ring-red-500 ring-offset-2"
                      : ""
                  }`}
                />
                <button
                  onClick={() => setSelectedColor("white")}
                  className={`w-4 h-4 rounded-full bg-white border ${
                    selectedColor === "white"
                      ? "ring-2 ring-red-500 ring-offset-2"
                      : ""
                  }`}
                />
              </div>
            </div>
            {/* choose size */}
            <div className="flex items-center gap-4">
              <h3 className="font-medium mb-2">Size:</h3>
              <div className="flex gap-2">
                {["M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-10 h-10 rounded-md border ${
                      selectedSize === size
                        ? "border-red-500 text-red-500"
                        : "border-gray-300 text-gray-600"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            {/* quantity */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded-md">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-100"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-100"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button className="px-8 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                Buy Now
              </button>
              <button className="p-2 border rounded-md hover:bg-gray-100">
                <Heart className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="border rounded-lg p-4 space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gray-100 rounded-full">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-medium">Free Delivery</h4>
                <p className="text-sm text-gray-500">
                  Enter your postal code for delivery availability
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gray-100 rounded-full">
                <RotateCcw className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-medium">Return Delivery</h4>
                <p className="text-sm text-gray-500">
                  Free 30 Days Delivery Returns. Details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div>
        <h2 className="text-2xl font-bold mt-10 mb-4">Related Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {relatedProducts.map((product) => (
            <div key={product.id} className="group">
              <div className="relative aspect-square mb-4">
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                  {product.discount}
                </span>
                <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="w-5 h-5" />
                </button>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="font-medium mb-2">{product.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-red-500 font-medium">
                  ${product.price.toFixed(2)}
                </span>
                <div className="flex items-center gap-1">
                  <div className="flex text-yellow-400 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm">
                    ({product.reviews})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
