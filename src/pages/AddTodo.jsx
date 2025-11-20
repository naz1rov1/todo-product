import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";

export default function AddTodo() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
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
      />
      <button className="todo-add-btn">Qo‘shish</button>
    </form>
  );
}
