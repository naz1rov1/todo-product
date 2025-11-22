  import { createSlice } from "@reduxjs/toolkit";

  export const todoSlice = createSlice({
    name: "todo",
    initialState: {
      todos: [],
    },
    reducers: {
      addTodo: (state, action) => {
        state.todos = [action.payload, ...state.todos];
      },
      deleteTodo: (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      },
      toggleTodo: (state, action) => {
        state.todos = state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, checked: !todo.checked } : todo
        );
      },
      editTodo: (state, action) => {
        const { id, title } = action.payload;
        state.todos = state.todos.map((todo) =>
          todo.id === id ? { ...todo, title } : todo
        );
      },
    },
  });

  export const { addTodo, deleteTodo, toggleTodo, editTodo } = todoSlice.actions;
  export default todoSlice.reducer;
