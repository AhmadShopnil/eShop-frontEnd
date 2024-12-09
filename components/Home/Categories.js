import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Categories() {
  const categories = [
    { name: "Phones", icon: "📱" },
    { name: "Computers", icon: "💻" },
    { name: "SmartWatch", icon: "⌚" },
    { name: "Camera", icon: "📸" },
    { name: "HeadPhones", icon: "🎧" },
    { name: "Gaming", icon: "🎮" },
  ];

  return (
    <section className="container mx-auto px-4 ">
      <div className="pt-4 pb-14 border-y-2 ">
        <div className="  mb-4">
          <div className="flex gap-2 items-center mb-2 ">
            <div className="bg-red-500 w-3 h-7 rounded"></div>

            <h2 className="text-red-500  font-semibold text-xs">Categories</h2>
          </div>

          <div className="flex justify-between ">
            <h3 className="text-2xl font-bold ">Browse By Categories</h3>
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="border rounded-md p-8 flex flex-col items-center justify-center hover:border-red-500 cursor-pointer transition-colors "
            >
              <span className="text-6xl mb-2">{category.icon}</span>
              <span className="font-medium">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
