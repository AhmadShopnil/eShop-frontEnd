import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";

function ProductCard({ product }) {
  const { isDiscount, discountPercentage } = product;
  return (
    <div key={product.id} className="border rounded-md overflow-hidden group">
      <div className="relative">
        {isDiscount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
            - {discountPercentage} %
          </span>
        )}

        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="w-full h-48 object-cover"
        />

        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {/* Add to cart button */}

          <button className="bg-white text-black px-4 py-2 rounded-full flex items-center">
            <ShoppingCart className="h-5 w-5 mr-2" />
            Add to Cart
          </button>
          {/* Add to Favourite button */}
          <button className="absolute top-2 right-2 p-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <Heart className="h-5 w-5 text-red-500" />
          </button>
        </div>
      </div>
      {/* content */}
      <div className="p-4">
        <h3 className="font-semibold mb-2">{product.name}</h3>
        <div className="flex gap-2 mb-2">
          <span className="text-red-500">${product.price}</span>
          <span className="text-gray-400 line-through">
            ${product.originalPrice}
          </span>
        </div>
        {/* Review count */}
        <div className="flex items-center gap-2">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="text-yellow-400">
                ★
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-500">({product.reviews})</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
