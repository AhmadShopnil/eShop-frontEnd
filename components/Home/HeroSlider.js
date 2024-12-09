import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  const menuItems = [
    { title: "Woman's Fashion", hasSubmenu: true },
    { title: "Men's Fashion", hasSubmenu: true },
    { title: "Electronics", hasSubmenu: false },
    { title: "Home & Lifestyle", hasSubmenu: false },
    { title: "Medicine", hasSubmenu: false },
    { title: "Sports & Outdoor", hasSubmenu: false },
    { title: "Baby's & Toys", hasSubmenu: false },
    { title: "Groceries & Pets", hasSubmenu: false },
    { title: "Health & Beauty", hasSubmenu: false },
  ];

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex gap-8">
        {/* Left Sidebar Menu */}
        <div className="hidden md:block w-[200px] flex-shrink-0 border-r-2 pr-4 ">
          <ul className="space-y-4 ">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href="#"
                  className="flex items-center justify-between text-gray-600 hover:text-black transition-colors "
                >
                  <span className="">{item.title}</span>
                  {item.hasSubmenu && <ChevronRight className="h-4 w-4 " />}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hero Slider */}

        <div className="flex bg-black w-auto h-[350px]">
          <Image
            src="/images/hero-3.jpg"
            alt="hero"
            width={1270}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
