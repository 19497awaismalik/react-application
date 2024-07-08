import { createSlice } from "@reduxjs/toolkit";



export const Counter=createSlice({
    initialState:0,
    name:"counter",
    reducers:{
        Increment:(state,action)=>{
            console.log(action)
           return state+1;
            
            
        },
        Decrement:(state,action)=>{
            console.log(action)
            return state-1;
        }
    }
})


export const {Decrement,Increment}=Counter.actions