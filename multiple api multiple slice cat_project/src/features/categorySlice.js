import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: true,
  error: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setData: (state, action) => {
      if (!action.payload.loading) {
        (state.data = action.payload.data),
          (state.loading = action.payload.loading);
      }
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setData, setError } = categorySlice.actions;
export default categorySlice.reducer;
