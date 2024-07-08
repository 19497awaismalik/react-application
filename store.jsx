import { configureStore } from "@reduxjs/toolkit";
import { Counter } from "./src/Redux/createSlice";

export const store=configureStore({
    reducer:{
        Counter:Counter.reducer
    }
})