import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../features/usersSlice";

const store = configureStore({
  reducer: {
    user: UserSlice,
  },
});

export default store;
