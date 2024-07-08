import React, { useMemo, useState } from 'react'

const Form = () => {
  let [counter, setcounter] = useState(0);
  const [toggle, setToggle] = useState(false);
  const handle=()=>{
       return setcounter(counter+1);
  }

const handle2=(counter)=>{
  console.log(counter)
  for(let i=0;i<100000000;i++){   }
  return counter;

}
const value=useMemo(()=>{
  return handle2(counter);
  
  },[counter])
  
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={handle}>counter</button>
      <button onClick={()=>setToggle(!toggle)}>{toggle?"Malik":"Awais"}</button>
    </div>
  )
}

export default Form
