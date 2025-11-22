import React from "react";
import { useSelector } from "react-redux";

export default function ProductItem({ product, onEdit, onDelete }) {
  const user = useSelector((s) => s.auth.user);

  return (
    <div className="product-card">
      {product.image && (
        <img src={product.image} alt={product.name} className="product-img" />
      )}

      <h2 className="card-name">{product.name}</h2>
      <p className="card-desc">{product.description}</p>
      <span className="card-price">${product.price}</span>

      {user && (
        <div className="card-actions">
          <button onClick={() => onEdit(product)} className="edit-btn">
            Edit
          </button>
          <button onClick={() => onDelete(product.id)} className="delete-btn">
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
