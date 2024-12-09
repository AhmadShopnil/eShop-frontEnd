"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Grid,
  List,
  ChevronDown,
  Star,
  Heart,
  ShoppingCart,
  Eye,
} from "lucide-react";

export default function ShopPage() {
  const [viewMode, setViewMode] = useState("grid");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState("newest");

  const products = [
    {
      id: 1,
      name: "Havit HV-G92 Gamepad",
      price: 192.0,
      rating: 4.5,
      reviews: 88,
      image: "/images/products/1.jpg",
      isNew: true,
      category: "Gaming",
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      price: 960.0,
      rating: 4.0,
      reviews: 75,
      image: "/images/products/2.jpg",
      isNew: false,
      category: "Electronics",
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      price: 370.0,
      rating: 4.8,
      reviews: 99,
      image: "/images/products/3.jpg",
      isNew: true,
      category: "Electronics",
    },
    {
      id: 4,
      name: "RGB Liquid CPU Cooler",
      price: 160.0,
      rating: 4.4,
      reviews: 65,
      image: "/images/products/4.jpg",
      isNew: false,
      category: "Electronics",
    },
    {
      id: 5,
      name: "Logitech G502 Mouse",
      price: 87.0,
      rating: 4.7,
      reviews: 130,
      image: "/images/products/5.jpg",
      isNew: true,
      category: "Gaming",
    },
    {
      id: 6,
      name: "Razer Kraken Headset",
      price: 112.0,
      rating: 4.3,
      reviews: 55,
      image: "/images/products/6.jpg",
      isNew: false,
      category: "Gaming",
    },
  ];

  const categories = ["Gaming", "Electronics", "Computers", "Accessories"];

  const filteredProducts = products
    .filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    )
    .filter(
      (product) =>
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category)
    )
    .sort((a, b) => {
      if (sortBy === "newest") return b.id - a.id;
      if (sortBy === "price-low-high") return a.price - b.price;
      if (sortBy === "price-high-low") return b.price - a.price;
      return 0;
    });

  const handleCategoryToggle = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Shop</h1>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 ${
              viewMode === "grid" ? "text-red-500" : "text-gray-500"
            }`}
          >
            <Grid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 ${
              viewMode === "list" ? "text-red-500" : "text-gray-500"
            }`}
          >
            <List className="w-5 h-5" />
          </button>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded-md px-3 py-2 text-sm bg-white"
          >
            <option value="newest">Newest Arrivals</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters */}

        <div className="w-full lg:w-48 space-y-6">
          <div>
            <h2 className="font-semibold mb-2">Categories</h2>
            {categories.map((category) => (
              <label key={category} className="flex items-center gap-2 mb-2">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryToggle(category)}
                  className="rounded text-red-500 focus:ring-red-500"
                />
                {category}
              </label>
            ))}
          </div>

          <div>
            <h2 className="font-semibold mb-2">Price Range</h2>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([Number(e.target.value), priceRange[1]])
                }
                className="w-20 border rounded-md px-2 py-1"
              />
              <span>-</span>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], Number(e.target.value)])
                }
                className="w-20 border rounded-md px-2 py-1"
              />
            </div>
          </div>
        </div>

        {/* Product Grid/List */}
        <div className="flex-1">
          <div
            className={`grid gap-6 ${
              viewMode === "grid"
                ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
                : "grid-cols-1"
            }`}
          >
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`group ${viewMode === "list" ? "flex gap-4" : ""}`}
              >
                <div
                  className={`relative ${
                    viewMode === "list" ? "w-48" : "aspect-square"
                  } mb-4 overflow-hidden rounded-lg`}
                >
                  {product.isNew && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full z-10">
                      New
                    </span>
                  )}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-gray-800 px-4 py-2 rounded-full hover:bg-red-500 hover:text-white transition-colors duration-300 flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                  </div>
                </div>
                <div className={viewMode === "list" ? "flex-1" : ""}>
                  <h3 className="font-medium mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-red-500 font-medium">
                      ${product.price.toFixed(2)}
                    </span>
                    <div className="flex items-center gap-1">
                      <div className="flex text-yellow-400 text-sm">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? "fill-current"
                                : "stroke-current fill-transparent"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-500 text-sm">
                        ({product.reviews})
                      </span>
                    </div>
                  </div>
                  {viewMode === "list" && (
                    <p className="text-gray-600 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  )}
                  <div className="flex items-center gap-2">
                    <button className="flex-1 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-red-500 hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 group">
                      <ShoppingCart className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                      <span className="font-medium">Add to Cart</span>
                    </button>
                    {/* <button className="p-2 border border-gray-300 rounded-full hover:bg-red-500 hover:border-red-500 hover:text-white transition-colors duration-300">
                      <Heart className="w-5 h-5" />
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-center">
        <nav className="flex items-center gap-2">
          <button className="px-4 py-2 border rounded-md hover:bg-gray-100 transition-colors duration-300">
            Previous
          </button>
          <button className="px-4 py-2 border rounded-md bg-red-500 text-white">
            1
          </button>
          <button className="px-4 py-2 border rounded-md hover:bg-gray-100 transition-colors duration-300">
            2
          </button>
          <button className="px-4 py-2 border rounded-md hover:bg-gray-100 transition-colors duration-300">
            3
          </button>
          <button className="px-4 py-2 border rounded-md hover:bg-gray-100 transition-colors duration-300">
            Next
          </button>
        </nav>
      </div>
    </div>
  );
}
