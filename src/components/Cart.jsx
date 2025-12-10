// src/components/Cart.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart({ cart, setCart, user }) {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const increaseQty = (id) => {
    setCart(cart.map(i => i._id === id ? { ...i, qty: i.qty + 1 } : i));
  };

  const decreaseQty = (id) => {
    setCart(cart.map(i => i._id === id ? { ...i, qty: i.qty - 1 } : i).filter(i => i.qty > 0));
  };

  const removeItem = (id) => setCart(cart.filter(i => i._id !== id));

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleBuyNow = () => {
    if (!user) {           // <-- use prop, not localStorage
      alert("You must login to buy!");
      navigate("/login");
      return;
    }
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    setOrderPlaced(true);
    setCart([]);
  };

  return (
    <div>
      <h2>Your Cart</h2>

      {cart.length === 0 && !orderPlaced && <p>Your cart is empty</p>}

      {cart.map(item => (
        <div key={item._id} style={{ borderBottom: "1px solid #ccc", padding: "15px 0" }}>
          <h3>{item.name}</h3>
          <img src={item.image} alt={item.name} style={{ width: "150px" }} />
          <p>Price: ₹ {item.price}</p>

          <div>
            <button onClick={() => decreaseQty(item._id)}>-</button>
            <span style={{ margin: "0 10px" }}>{item.qty}</span>
            <button onClick={() => increaseQty(item._id)}>+</button>
          </div>

          <button
            onClick={() => removeItem(item._id)}
            style={{ marginTop: "10px", background: "red", color: "white", padding: "8px", border: "none", borderRadius: "8px" }}
          >
            Remove
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h2>Total: ₹ {total}</h2>
          <button
            onClick={handleBuyNow}
            style={{ padding: "12px 20px", background: "#28a745", color: "white", border: "none", borderRadius: "10px", cursor: "pointer", fontSize: "18px" }}
          >
            Buy Now
          </button>
        </div>
      )}

      {orderPlaced && (
        <div style={{ marginTop: "30px", padding: "20px", background: "#d4edda", color: "#155724", borderRadius: "10px", fontSize: "20px", textAlign: "center" }}>
          ✅ Your order has been placed!
        </div>
      )}
    </div>
  );
}
