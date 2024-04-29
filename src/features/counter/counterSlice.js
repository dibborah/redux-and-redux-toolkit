import { createSlice } from "@reduxjs/toolkit";

const initialState = {count: 0};

const counterSlice = createSlice({
    name:"counter",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        decrement: (state) => {
            state.count -= 1;
        },
    }
})

export const {increment, reset, decrement} =  counterSlice.actions;

export default counterSlice.reducer;