// AddTodo.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../store/todoSlice";

export default function AddTodo() {
  const dispatch = useDispatch();
  const user = useSelector((s) => s.auth.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) return; // ❗ login bo‘lmasa hech nima qo‘shmaydi

    const value = e.target[0].value.trim();
    if (value) {
      dispatch(addTodo({ id: Date.now(), title: value, checked: false }));
      e.target.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Yangi vazifa..."
        className="todo-input"
        required
        disabled={!user} // ❗ login bo‘lmasa blok
      />
      <button disabled={!user} className="todo-add-btn">
        Qo‘shish
      </button>
    </form>
  );
}
