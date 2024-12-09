import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "../Shared/ProductCard";

export default function BestSelling() {
  const products = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      originalPrice: 160,
      rating: 5,
      reviews: 88,
      image: "/images/products/1.jpg",
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      price: 960,
      originalPrice: 1160,
      rating: 4,
      reviews: 75,
      image: "/images/products/2.jpg",
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      price: 370,
      originalPrice: 400,
      rating: 5,
      reviews: 99,
      image: "/images/products/3.jpg",
    },
    {
      id: 4,
      name: "S-Series Comfort Chair",
      price: 375,
      originalPrice: 400,
      rating: 4.5,
      reviews: 99,
      image: "/images/products/4.jpg",
    },

    {
      id: 5,
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      originalPrice: 160,
      rating: 5,
      reviews: 88,
      image: "/images/products/20.jpg",
      isDiscount: true,
      discountPercentage: 30, // Random percentage between 10 and 40
    },
  ];
  return (
    <section className="container mx-auto px-4 ">
      {/* heading */}
      <div className="  mb-4">
        <div className="flex gap-2 items-center mb-2 ">
          <div className="bg-red-500 w-3 h-7 rounded"></div>

          <h2 className="text-red-500  font-semibold text-xs">This Month</h2>
        </div>

        <div className="flex justify-between ">
          <h3 className="text-2xl font-bold ">Best Selling Products</h3>
          <div className="flex gap-2">
            <button className="p-2 border rounded-full transition duration-200 ease-in-out transform hover:bg-gray-200 hover:border-gray-400 hover:scale-105">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button className="p-2 border rounded-full transition duration-200 ease-in-out transform hover:bg-gray-200 hover:border-gray-400 hover:scale-105">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* products */}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>
    </section>
  );
}
