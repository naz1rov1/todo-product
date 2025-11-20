import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";


export default function TodoList() {
  const { todos } = useSelector((state) => state.todo);

  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p className="todo-empty">Hozircha hech narsa yo‘q...</p>
      ) : (
        todos.map((t) => <TodoItem key={t.id} todo={t} />)
      )}
    </div>
  );
}
