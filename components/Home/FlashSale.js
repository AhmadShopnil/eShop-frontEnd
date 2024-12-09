"use client";

import { useState, useEffect } from "react";

import ProductCard from "../Shared/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FlashSales() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const newSeconds = prev.seconds - 1;
        if (newSeconds >= 0) return { ...prev, seconds: newSeconds };

        const newMinutes = prev.minutes - 1;
        if (newMinutes >= 0)
          return { ...prev, minutes: newMinutes, seconds: 59 };

        const newHours = prev.hours - 1;
        if (newHours >= 0)
          return { ...prev, hours: newHours, minutes: 59, seconds: 59 };

        const newDays = prev.days - 1;
        if (newDays >= 0)
          return { days: newDays, hours: 23, minutes: 59, seconds: 59 };

        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const products = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      originalPrice: 160,
      rating: 5,
      reviews: 88,
      image: "/images/products/5.jpg",
      isDiscount: true,
      discountPercentage: 30, // Random percentage between 10 and 40
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      price: 960,
      originalPrice: 1160,
      rating: 4,
      reviews: 75,
      image: "/images/products/6.jpg",
      isDiscount: true,
      discountPercentage: 40, // Random percentage between 10 and 40
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      price: 370,
      originalPrice: 400,
      rating: 5,
      reviews: 99,
      image: "/images/products/7.jpg",
      isDiscount: true,
      discountPercentage: 20, // Random percentage between 10 and 40
    },
    {
      id: 4,
      name: "S-Series Comfort Chair",
      price: 375,
      originalPrice: 400,
      rating: 4.5,
      reviews: 99,
      image: "/images/products/8.jpg",
      isDiscount: true,
      discountPercentage: 25, // Random percentage between 10 and 40
    },

    {
      id: 6,
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      originalPrice: 160,
      rating: 5,
      reviews: 88,
      image: "/images/products/15.jpg",
      isDiscount: true,
      discountPercentage: 30, // Random percentage between 10 and 40
    },
  ];

  return (
    <section className="container mx-auto px-4 ">
      <div className="mb-4 flex justify-between">
        <div className=" ">
          <div className="flex gap-2 items-center mb-1 ">
            <div className="bg-red-500 w-3 h-7 rounded"></div>

            <h2 className="text-red-500  font-semibold text-xs">Todays</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-4  md:gap-20  items-center">
            <h3 className="text-2xl font-bold ">Flash Sales</h3>
            {/* timer start */}
            <div className="flex gap-4 text-xl font-semibold">
              <div className="">
                <h3 className="text-xs ">Days</h3>
                <span className="text-3xl 0">
                  {timeLeft.days.toString().padStart(2, "0")}
                </span>
              </div>
              <span className="text-2xl text-red-500">:</span>
              <div>
                <h3 className="text-xs ">Hours</h3>
                <span className="text-3xl ">
                  {timeLeft.hours.toString().padStart(2, "0")}
                </span>
              </div>
              <span className="text-2xl text-red-500 ">:</span>
              <div>
                <h3 className="text-xs">Minutes</h3>
                <span className="text-3xl ">
                  {timeLeft.minutes.toString().padStart(2, "0")}
                </span>
              </div>
              <span className="text-2xl text-red-500">:</span>
              <div>
                <h3 className="text-xs">Seconds</h3>
                <span className="text-3xl">
                  {timeLeft.seconds.toString().padStart(2, "0")}
                </span>
              </div>
            </div>
            {/* timer end*/}
          </div>
        </div>
      </div>

      {/* products */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>
    </section>
  );
}
