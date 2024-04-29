import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0, username: "dibya" };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      //   return { ...state, count: state.count + 1 };
      state.count += 1;
    },
    reset: (state) => {
      //   return { ...state, count: 0};
      state.count = 0;
    },
    decrement: (state) => {
      //   return { ...state, count: state.count - 1 };
      state.count -= 1;
    },
  },
});

export const { increment, reset, decrement } = counterSlice.actions;

export default counterSlice.reducer;
