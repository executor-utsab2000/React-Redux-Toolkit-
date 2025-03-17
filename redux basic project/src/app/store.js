import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlice";

const store = configureStore({
  reducer: todoReducer, // making store aware of reducers
});

export default store;
