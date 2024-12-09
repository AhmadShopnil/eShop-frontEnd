import Link from "next/link";
import { Search, Heart, ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b">
      {/* Top Menu */}

      <div className="bg-black">
        <div className="container mx-auto px-4  text-white py-3  flex justify-between items-center text-sm font-semibold">
          <p>Winter Sale For All Suits And Free Express Delivery - OFF 50%!</p>
          <button>Login</button>
        </div>
      </div>

      {/* Main Menu */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Exclusive
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-red-500">
            Home
          </Link>
          <Link href="/contact" className="hover:text-red-500">
            Contact
          </Link>
          <Link href="/about" className="hover:text-red-500">
            About
          </Link>
          <Link href="/sign-up" className="hover:text-red-500">
            Sign Up
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="hidden md:block relative ">
            <input
              type="search"
              placeholder="What are you looking for?"
              className="md:w-[300px] pl-8 pr-4 py-2 border rounded-md"
            />
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Heart className="h-5 w-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
