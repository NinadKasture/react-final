import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

 

const MyCoponent = () => {
    const [count, setCount] = useState(0)
useEffect(()=>{
    console.log("mycomp is loading...")
},[])

useEffect(()=>{
    console.log("count got updated!")
},[count])


  return (
    <div>
      <p>This is the current value of count - {count}</p>
      <button onClick={()=>{
        setCount(count+1);
      }}>Increase</button>
    </div>
  )
}

export default MyCoponent
