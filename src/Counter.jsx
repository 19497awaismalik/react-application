import React from 'react'
import { useDispatch } from 'react-redux'
import {Increment,Decrement} from './Redux/createSlice'
const Counter = (props) => {
    const {state}=props
    const dispatch=useDispatch();
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={()=>dispatch(Decrement(state))}>Decrement</button>
        <button onClick={()=>dispatch(Increment(state))}>Increment</button>
    </div>
  )
}

export default Counter