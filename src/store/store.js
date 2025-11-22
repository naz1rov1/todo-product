// store/store.js
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import countReducer from "./countSlice";
import productReducer from "./productSlice";
import authReducer from "./authSlice"; // ✅ MUHIM!

const store = configureStore({
  reducer: {
    todo: todoReducer,
    count: countReducer,
    product: productReducer,
    auth: authReducer, // ✅ MUHIM!
  },
});

export default store;
