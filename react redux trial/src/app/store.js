import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../features/todoSlice";
const store = configureStore({
  reducer: {
    todo: TodoReducer,
  },
});

export default store;
