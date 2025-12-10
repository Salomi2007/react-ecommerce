import React from "react";
import { products } from "../utils/api";
import { Link } from "react-router-dom";

export default function Products({ setCart, cart }) {
  const addToCart = (item) => {
    const existing = cart.find(p => p._id === item._id);
    if (existing) {
      setCart(cart.map(p => p._id === item._id ? { ...p, qty: p.qty + 1 } : p));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "#d6336c" }}>Skincare Products</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
        {products.map((product) => (
          <div key={product._id} style={{ padding: "15px", background: "#fff0f6", borderRadius: "12px" }}>
            <Link to={ `/product/${product._id}`} style={{ textDecoration: "none", color: "black" }}>
              <h3>{product.name}</h3>
              <img src={product.image} alt={product.name} style={{ width: "100%", borderRadius: "12px" }} />
              <p style={{ marginTop: "10px" }}>{product.description}</p>
            </Link>
            <p>₹ {product.price}</p>
            <button onClick={() => addToCart(product)} style={{ padding: "10px", background: "#d6336c", color: "white", border: "none", borderRadius: "6px", cursor: "pointer", marginTop: "10px" }}>
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
