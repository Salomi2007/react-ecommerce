// src/components/Cart.jsx
import React from "react";

export default function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-gray-100 min-h-screen px-6 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-xl font-semibold text-gray-600">
          No items in the cart!
        </p>
      ) : (
        <div className="max-w-3xl mx-auto bg-white p-6 shadow-lg rounded-lg">
          {cart.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between border-b py-4"
            >
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg shadow"
              />

              {/* Product Details */}
              <div className="flex-1 ml-4">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-700">₹ {item.price}</p>
              </div>

              {/* Remove Button - Dark Red */}
              <button
                onClick={() => removeFromCart(item._id)}
                className="bg-red-900 text-blue font-bold px-3 py-2 rounded-lg shadow-md border border-red-800 hover:bg-red-800 hover:shadow-lg"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total Amount */}
          <h2 className="text-2xl font-bold mt-6 text-right">
            Total: <span className="text-green-700">₹ {total}</span>
          </h2>
        </div>
      )}
    </div>
  );
}
