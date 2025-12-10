// src/components/ProductDetail.jsx
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { products } from "../utils/api";

export default function ProductDetail({ cart, setCart, user }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(p => p._id === id);

  if (!product) return <p>Product not found</p>;

  const addToCart = () => {
    if (!user) {          // <-- use prop, not localStorage
      alert("You must login to add to cart!");
      navigate("/login");
      return;
    }

    const existing = cart.find(p => p._id === product._id);
    if (existing) {
      setCart(cart.map(p => p._id === product._id ? { ...p, qty: p.qty + 1 } : p));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const handleBuyNow = () => {
    if (!user) {
      alert("You must login to buy!");
      navigate("/login");
      return;
    }

    const existing = cart.find(p => p._id === product._id);
    let newCart;
    if (existing) {
      newCart = cart.map(p => p._id === product._id ? { ...p, qty: p.qty + 1 } : p);
    } else {
      newCart = [...cart, { ...product, qty: 1 }];
    }
    setCart(newCart);

    alert("Added to cart! Proceed to Cart to Buy Now.");
    navigate("/cart");
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ width: "300px" }} />
      <p>Price: ₹ {product.price}</p>
      <p>{product.description}</p>

      <button onClick={addToCart} style={{ marginRight: "10px", padding: "10px 15px", background: "#007bff", color: "white", border: "none", borderRadius: "8px", cursor: "pointer" }}>
        Add to Cart
      </button>

      <button onClick={handleBuyNow} style={{ padding: "10px 15px", background: "#28a745", color: "white", border: "none", borderRadius: "8px", cursor: "pointer" }}>
        Buy Now
      </button>

      <div style={{ marginTop: "20px" }}>
        <Link to="/">← Back to Products</Link>
      </div>
    </div>
  );
}
