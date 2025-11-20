import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import countReducer from "./countSlice";
import productReducer from "./productSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    count: countReducer,
    product: productReducer,
  },
});

export default store;
