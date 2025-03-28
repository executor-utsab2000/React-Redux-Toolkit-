import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../features/todo/todoSlice";

const store = configureStore({
  reducer: {
    todo: TodoReducer,
  },
});

export default store;
