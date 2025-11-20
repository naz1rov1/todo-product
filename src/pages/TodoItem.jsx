import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo, editTodo } from "../store/todoSlice";


export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.title);

  const save = () => {
    const trimmed = text.trim();
    if (trimmed) {
      dispatch(editTodo({ id: todo.id, title: trimmed }));
    }
    setEditing(false);
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.checked}
        onChange={() => dispatch(toggleTodo(todo.id))}
        className="todo-check"
      />

      {editing ? (
        <input
          className="todo-edit-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && save()}
          autoFocus
        />
      ) : (
        <span className={`todo-text ${todo.checked ? "todo-done" : ""}`}>
          {todo.title}
        </span>
      )}

      <div className="todo-actions">
        {editing ? (
          <>
            <button className="save-btn" onClick={save}>
              Saqlash
            </button>
            <button className="cancel-btn" onClick={() => setEditing(false)}>
              Bekor
            </button>
          </>
        ) : (
          <button className="edit-btn" onClick={() => setEditing(true)}>
            Tahrirlash
          </button>
        )}

        <button
          className="delete-btn"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          O‘chirish
        </button>
      </div>
    </div>
  );
}
