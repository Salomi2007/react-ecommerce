import React from "react";
import { products } from "../utils/api";

export default function Products({ cart, setCart }) {
  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="bg-gray-100 min-h-screen px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-lg rounded-lg p-5 hover:shadow-2xl transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="rounded-lg mb-4 w-full h-60 object-cover"
            />

            <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>

            <p className="text-gray-700 mb-2">{product.description}</p>

            <p className="text-xl font-bold text-green-700 mb-4">
              ₹ {product.price}
            </p>

            <button
              onClick={() => addToCart(product)}
              className="w-full bg-red-800 text-red font-bold px-4 py-2 rounded-lg shadow-lg border border-red-900 hover:bg-red-900 hover:shadow-xl transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
