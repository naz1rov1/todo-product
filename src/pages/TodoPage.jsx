import React from "react";
import AddTodo from "../pages/AddTodo";
import TodoList from "../pages/TodoList";


export default function TodoPage() {
  return (
    <div className="todo-page">
      <h1 className="todo-title">Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}
