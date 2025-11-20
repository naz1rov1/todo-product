import React from "react";

export default function ProductItem({ product, onEdit, onDelete }) {
  return (
    <div className="product-card">
      {product.image && (
        <img src={product.image} alt={product.name} className="product-img" />
      )}
      <h2 className="card-name">{product.name}</h2>
      <p className="card-desc">{product.description}</p>
      <span className="card-price">${product.price}</span>
      <div className="card-actions">
        <button onClick={() => onEdit(product)} className="edit-btn">
          Edit
        </button>
        <button onClick={() => onDelete(product.id)} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
}
