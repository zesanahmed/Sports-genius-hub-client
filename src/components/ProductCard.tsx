import { Link } from "react-router-dom";
import { FaShoppingCart, FaInfoCircle } from "react-icons/fa";

type Product = {
  id: string;
  title: string;
  price: string;
  image: string;
  oldPrice?: string;
  rating: number;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { id, title, price, oldPrice, image, rating } = product;

  return (
    <div className="group bg-white shadow-md overflow-hidden relative w-64">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover transform group-hover:scale-105 transition duration-500"
        />

        {/* Hover Icons */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition duration-300">
          <button className="p-3 bg-white rounded-full hover:bg-lime-500 hover:text-white transition">
            <FaShoppingCart size={18} />
          </button>
          <Link
            to={`/product/${id}`}
            className="p-3 bg-white rounded-full hover:bg-lime-500 hover:text-white transition"
          >
            <FaInfoCircle size={18} />
          </Link>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4 text-center bg-gray-50">
        <h3 className="font-semibold text-xl">{title}</h3>
        <div className="mt-1">
          {oldPrice && (
            <span className="text-gray-400 line-through mr-2">{oldPrice}</span>
          )}
          <span className="text-gray-600 text-xl">{price}</span>
        </div>
        {/* Rating */}
        <div className="flex justify-center mt-2">
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className={`text-xl ${
                i < rating ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
