import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import TodoPage from "./pages/TodoPage";
import ProductPage from "./pages/ProductPage";

export default function App() {
  return (
    <div>
    
      <nav className="navbar">
        <NavLink
          to="/todos"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Todo List
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Products
        </NavLink>
      </nav>

   
      <Routes>
        <Route path="/todos" element={<TodoPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="*" element={<TodoPage />} />
      </Routes>
    </div>
  );
}
