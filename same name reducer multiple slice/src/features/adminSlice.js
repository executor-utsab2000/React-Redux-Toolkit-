import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data.unshift(action.payload);
    },
  },
});

export const { setData } = adminSlice.actions;
export default adminSlice.reducer;
