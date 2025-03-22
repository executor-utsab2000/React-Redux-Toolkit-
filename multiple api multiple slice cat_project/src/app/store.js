import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from "../features/categorySlice";
import ProjectReducer from "../features/projectSlice";

const store = configureStore({
  reducer: {
    category: CategoryReducer,
    project: ProjectReducer,
  },
});

export default store;
