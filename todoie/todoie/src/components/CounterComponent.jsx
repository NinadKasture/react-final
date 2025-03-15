import React from 'react'
import { useState } from 'react'

const CounterComponent = () => {
    const [count,setcount]=useState(1);
    const [name,setName]=useState("even");
  return (

    <div>
      <p>This is current value - {count}</p>
      <p>This value is - {name} </p>
      <button onClick={()=>{
        const newCount=count+1;
        setcount(newCount);
        if(newCount%2===0)setName("even");
        else setName("odd");
      }}>Increment Now</button>
    </div>
  )
}

export default CounterComponent
