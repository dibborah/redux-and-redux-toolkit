import { createSlice } from "@reduxjs/toolkit";

// Abhi counter feature ke related koi v code ho
// For ex. Increment , reset or decrease
// So sara ka sara code hum is feature ki matlab counter feature ki
// SLICE main likhte hain

// reducer are responsible for updating the state

const initialState = { count: 0 };

const counterSlice = createSlice({
  name: "counter", // ye hum ko redux internally use karti hain
  initialState: initialState, // slice main hum state pass karte hain
  reducers: {
    increment: (state) => {// ye yesa return kana implicitly (internally) handle karta hain  IMMER.js
        // TO HUM NAHI V KARE to chalega
        return {count: state.count + 1};// yaha pe + karke = karna padega tab state update hogi
    },
    decrement: (state) => {
        state.count -= 1// here we are mutating an existing state 
    },
    reset: (state) => {
        state.count = 0// we are not returning a new state as we do with useState
        // redux internally return a new state by conversing the current state;
    },
  },
});

// CounterSlice (jo Slice hum create karte hain)
// uske pas reducer v hota hain aur action v
// So we do both .reducer and .actions

export const {increment, reset, decrement} = counterSlice.actions;

const counterReducer = counterSlice.reducer;

export default counterReducer;
