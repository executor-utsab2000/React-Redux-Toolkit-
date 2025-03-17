import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
  loading: true,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.todoList = action.payload.data;
      state.loading = action.payload.loading;
    },
  },
});

export const { setData } = userSlice.actions;
export default userSlice.reducer;
