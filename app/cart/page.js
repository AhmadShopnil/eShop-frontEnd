"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronUp,
  ChevronDown,
  Heart,
  ShoppingCart,
  User,
  Search,
  X,
} from "lucide-react";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "LCD Monitor",
      price: 650,
      quantity: 1,
      image: "/images/products/1.jpg",
    },
    {
      id: 2,
      name: "H1 Gamepad",
      price: 550,
      quantity: 2,
      image: "/images/products/3.jpg",
    },
  ]);

  const updateQuantity = (id, change) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-2 text-sm">
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900">Cart</span>
        </div>
      </div>

      {/* Cart Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-4">Product</th>
                    <th className="text-left py-4 px-4">Price</th>
                    <th className="text-left py-4 px-4">Quantity</th>
                    <th className="text-left py-4 px-4">Subtotal</th>
                    <th className="py-4 px-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-4">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={80}
                            height={80}
                            className="rounded-lg"
                          />
                          <span className="font-medium">{item.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">${item.price.toFixed(2)}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center border rounded-md w-24">
                          <input
                            type="text"
                            value={item.quantity}
                            className="w-12 text-center border-0 p-2"
                            readOnly
                          />
                          <div className="flex flex-col border-l">
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="px-2 py-1 hover:bg-gray-100"
                            >
                              <ChevronUp className="h-3 w-3" />
                            </button>
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="px-2 py-1 hover:bg-gray-100 border-t"
                            >
                              <ChevronDown className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="py-4 px-4">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 hover:bg-gray-100 rounded-full"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between mt-8">
              <Link
                href="/shop"
                className="px-6 py-3 border rounded-md hover:bg-gray-100"
              >
                Return To Shop
              </Link>
              <button className="px-6 py-3 border rounded-md hover:bg-gray-100">
                Update Cart
              </button>
            </div>
          </div>

          {/* Cart Summary */}
          <div className="lg:w-[400px]">
            <div className="border rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Cart Total</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-3 border-b">
                  <span>Subtotal:</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between py-3 font-semibold">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <button className="w-full mt-6 px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
                Process to checkout
              </button>
            </div>

            <div className="mt-6">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="flex-1 px-4 py-2 border rounded-md"
                />
                <button className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
                  Apply Coupon
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
