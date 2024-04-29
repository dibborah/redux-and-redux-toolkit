// The first step in redux is :

// 1. Make a store

// state change ---> using dispatch function(action) // input => Action kya hoga

// multiple feature // one slice per feature

// per slice => reducer

// Jitne v hum feature banayenge 
// Jitne v slice hum banayenge
// Humme store ko batana parta hain ki humne kya kya slice(feature) banaya

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,// the object we get using useSelector hook by react-redux will give use an object 
        // in the name of COUNTER since here we named the property name as COUNTER
    },
});