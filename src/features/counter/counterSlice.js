import { createSlice } from "@reduxjs/toolkit";

// Abhi counter feature ke related koi v code ho
// For ex. Increment , reset or decrease
// So sara ka sara code hum is feature ki matlab counter feature ki 
// SLICE main likhte hain

const initialState = {count: 0};

const counterSlice = createSlice({
    name: "counter",// ye hum ko redux internally use karti hain
    initialState: initialState,// slice main hum state pass karte hain
});

const counterReducer = counterSlice.reducer;

export default counterReducer;
