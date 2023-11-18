import { configureStore } from "@reduxjs/toolkit";
import todoList from "./slice/todoSlice";

export const store = configureStore({
  reducer: {
    todoList,
  }
})