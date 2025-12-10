// src/components/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !email) return alert("Please enter both username and email");

    // Save user info (username + email)
    setUser({ username, email });

    // Redirect to home
    navigate("/");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "12px" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
        />
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "20px" }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "#d6336c",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}
