import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import TodoPage from "./pages/TodoPage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./pages/ProtectedRoute";

export default function App() {
  return (
    <div>
      {/* === NAVBAR === */}
      <nav
        style={{
          display: "flex",
          gap: "20px",
          padding: "15px 25px",
          background: "#222",
        }}
      >
        <NavLink
          to="/todos"
          style={{ color: "white", textDecoration: "none", fontSize: "18px" }}
        >
          Todos
        </NavLink>

        <NavLink
          to="/products"
          style={{ color: "white", textDecoration: "none", fontSize: "18px" }}
        >
          Products
        </NavLink>

        <NavLink
          to="/profile"
          style={{ color: "white", textDecoration: "none", fontSize: "18px" }}
        >
          Profile
        </NavLink>

        <NavLink
          to="/login"
          style={{ color: "white", textDecoration: "none", fontSize: "18px" }}
        >
          Login
        </NavLink>
      </nav>

      {/* === ROUTES === */}
      <Routes>
        {/* Login sahifasi */}
        <Route path="/login" element={<LoginPage />} />

        {/* Profile faqat login bo'lsa */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        {/* Products faqat login bo'lsa */}
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <ProductPage />
            </ProtectedRoute>
          }
        />

        {/* Todos sahifasi umumiy ko‘rinadi, 
            lekin CRUD faqat login bo‘lsa ishlaydi */}
        <Route path="/todos" element={<TodoPage />} />

        {/* Default sahifa */}
        <Route path="*" element={<TodoPage />} />
      </Routes>
    </div>
  );
}
