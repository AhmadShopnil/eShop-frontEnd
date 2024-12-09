import Image from "next/image";
import Link from "next/link";
import { Send, Twitter, Instagram, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-9">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Exclusive Section */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Exclusive</h2>
            <p className="text-sm">Subscribe</p>
            <p className="text-sm">Get 10% off your first order</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border border-white/20 rounded-l px-4 py-2 text-sm w-full focus:outline-none focus:border-white"
              />
              <button className="bg-transparent border border-l-0 border-white/20 rounded-r px-4 hover:bg-white/10">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Support Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold">Support</h2>
            <address className="not-italic text-sm text-gray-300">
              New Busstand, Tangail,
              <br />
              Dhaka, Bangladesh.
            </address>
            <p className="text-sm text-gray-300">e-shop@gmail.com</p>
            <p className="text-sm text-gray-300">+880185700</p>
          </div>

          {/* Account Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold">Account</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/account" className="hover:text-white">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-white">
                  Login / Register
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-white">
                  Cart
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="hover:text-white">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-white">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Link Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold">Quick Link</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/privacy-policy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms Of Use
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold">Follow Us</h2>
            {/* <p className="text-xs text-gray-300">Social Media</p> */}

            <div className="flex gap-4 pt-4">
              <Link href="#" className="hover:text-gray-300">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-gray-300">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>© Copyright e-Shop 2024. All right reserved</p>
        </div>
      </div>
    </footer>
  );
}
