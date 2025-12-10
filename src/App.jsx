// src/App.jsx
import { Link, Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Login from "./components/Login";
import "./App.css";

function App() {
  const navigate = useNavigate();

  // Cart and User state
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")) || null);

  // Sync cart with localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Sync user with localStorage
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <div>
      {/* Header */}
      <header style={{ display: "flex", justifyContent: "space-between", padding: "20px", background: "#ffe4e6" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 style={{ color: "#d6336c" }}>Skincare Store</h1>
        </Link>

        <div>
          <Link to="/cart" style={{ marginRight: "20px", fontSize: "22px", textDecoration: "none" }}>
            🛒 Cart ({cart.length})
          </Link>

          {user ? (
            <>
              <span style={{ fontSize: "18px", marginRight: "10px" }}>Hi, {user.username}</span>
              <button
                onClick={() => {
                  setUser(null);                  // logout user
                  localStorage.removeItem("user"); // remove from localStorage
                  navigate("/");                  // redirect home
                }}
                style={{
                  padding: "6px 12px",
                  background: "#dc3545",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "14px"
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" style={{ fontSize: "18px" }}>Login</Link>
          )}
        </div>
      </header>

      {/* Main Routes */}
      <main style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Products cart={cart} setCart={setCart} user={user} />} />
          <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart} user={user} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} user={user} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
