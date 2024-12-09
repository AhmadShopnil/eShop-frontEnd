import ProductCard from "../Shared/ProductCard";

export default function ExploreProducts() {
  const products = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      originalPrice: 160,
      rating: 5,
      reviews: 88,
      image: "/images/products/13.jpg",
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      price: 960,
      originalPrice: 1160,
      rating: 4,
      reviews: 75,
      image: "/images/products/14.jpg",
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      price: 370,
      originalPrice: 400,
      rating: 5,
      reviews: 99,
      image: "/images/products/15.jpg",
    },
    {
      id: 4,
      name: "S-Series Comfort Chair",
      price: 375,
      originalPrice: 400,
      rating: 4.5,
      reviews: 99,
      image: "/images/products/16.jpg",
    },
    {
      id: 5,
      name: "Gaming Mouse Pad XL",
      price: 25,
      originalPrice: 35,
      rating: 4.3,
      reviews: 50,
      image: "/images/products/17.jpg",
    },
    {
      id: 6,
      name: "Wireless Headphones",
      price: 180,
      originalPrice: 200,
      rating: 4.7,
      reviews: 120,
      image: "/images/products/18.jpg",
    },
    {
      id: 7,
      name: "Portable SSD 500GB",
      price: 90,
      originalPrice: 110,
      rating: 4.8,
      reviews: 150,
      image: "/images/products/19.jpg",
    },
    {
      id: 8,
      name: "Mechanical Keyboard RGB",
      price: 150,
      originalPrice: 180,
      rating: 4.6,
      reviews: 180,
      image: "/images/products/20.jpg",
    },
    {
      id: 9,
      name: "IPS LCD Gaming Monitor",
      price: 370,
      originalPrice: 400,
      rating: 5,
      reviews: 99,
      image: "/images/products/21.jpg",
    },
    {
      id: 10,
      name: "IPS LCD Gaming Monitor",
      price: 370,
      originalPrice: 400,
      rating: 5,
      reviews: 99,
      image: "/images/products/22.jpg",
    },
  ];

  return (
    <section className="container mx-auto px-4  ">
      {/* heading */}
      <div className="  mb-4">
        <div className="flex gap-2 items-center mb-2 ">
          <div className="bg-red-500 w-3 h-7 rounded "></div>

          <h2 className="text-red-500  font-semibold text-xs">All Products</h2>
        </div>

        <div className="flex justify-between">
          <h3 className="text-2xl font-bold ">Explore Our Products</h3>
          {/* View All Buttons */}

          <button
            className="bg-red-500 px-5 py-2 text-white rounded-md transition duration-300 
          ease-in-out transform hover:bg-red-600 hover:scale-105 hover:shadow-lg"
          >
            View All
          </button>
        </div>
      </div>

      {/* products */}

      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
