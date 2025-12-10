// src/components/ProductDetail.jsx
import { useParams } from "react-router-dom";
import { products } from "../utils/api";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p._id === id);

  if (!product) return <h2 className="text-center mt-10">Product not found</h2>;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold">{product.name}</h1>

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-80 object-cover rounded-lg mt-4"
      />

      {/* ⭐ FULL DESCRIPTION */}
      <p className="text-gray-700 text-lg mt-4">{product.description}</p>

      <p className="text-2xl font-semibold text-pink-600 mt-6">
        ₹{product.price}
      </p>
    </div>
  );
}
