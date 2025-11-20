import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, deleteProduct, editProduct } from "../store/productSlice";

export default function ProductPage() {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price) return;

    if (editingId) {
      dispatch(editProduct({ id: editingId, ...formData }));
      setEditingId(null);
    } else {
      dispatch(addProduct({ id: Date.now(), ...formData }));
    }

    setFormData({ name: "", price: "", description: "", image: "" });
  };

  const handleEditClick = (product) => {
    setEditingId(product.id);
    setFormData({
      name: product.name,
      price: product.price,
      description: product.description,
      image: product.image,
    });
  };

  return (
    <div className="product-page">
      <h1 className="product-title">Products</h1>

      <form onSubmit={handleSubmit} className="product-form">
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Image URL"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        />
        <button type="submit" className="add-btn">
          {editingId ? "Save" : "Add Product"}
        </button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setFormData({ name: "", price: "", description: "", image: "" });
            }}
            className="cancel-btn"
          >
            Cancel
          </button>
        )}
      </form>

      <div className="product-grid">
        {products.length === 0 && <p className="empty-text">No products yet</p>}
        {products.map((p) => (
          <div key={p.id} className="product-card">
            {p.image && (
              <img src={p.image} alt={p.name} className="product-img" />
            )}
            <h2 className="card-name">{p.name}</h2>
            <p className="card-desc">{p.description}</p>
            <span className="card-price">${p.price}</span>
            <div className="card-actions">
              <button onClick={() => handleEditClick(p)} className="edit-btn">
                Edit
              </button>
              <button
                onClick={() => dispatch(deleteProduct(p.id))}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
