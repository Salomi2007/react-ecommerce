// src/components/Products.jsx
import React from "react";
import { products } from "../utils/api";
import { Link } from "react-router-dom";

export default function Products({ cart, setCart }) {
  const addToCart = (item) => {
    setCart([...cart, { ...item, quantity: 1 }]);
  };

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((p) => (
        <div
          key={p._id}
          className="bg-white shadow-md rounded-xl p-4 border border-gray-200"
        >
          <h2 className="text-xl font-bold">{p.name}</h2>

          <img
            src={p.image}
            alt={p.name}
            className="w-full h-48 object-cover rounded-lg mt-3"
          />

          {/* ⭐ DESCRIPTION */}
          <p className="text-gray-700 mt-3 text-sm">{p.description}</p>

          <p className="mt-2 text-pink-600 font-semibold">₹{p.price}</p>

          <div className="flex gap-3 mt-4">
            <button
              onClick={() => addToCart(p)}
              className="bg-pink-600 text-white px-4 py-2 rounded-lg"
            >
              Add to Cart
            </button>

            <Link
              to={`/product/${p._id}`}
              className="bg-gray-800 text-white px-4 py-2 rounded-lg"
            >
              View
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
