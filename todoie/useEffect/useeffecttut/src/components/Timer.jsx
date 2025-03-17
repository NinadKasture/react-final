import React from 'react'
import { useEffect,useState } from 'react'



const Timer = () => {

    const [time, setTime] = useState(0)

    useEffect(()=>{
        const timer=setInterval(()=>{
            setTime(prevtime=>prevtime+1);
        },time*1000)

        return function(){
            clearInterval(timer);       
        }
    },[time])
  return (
    <div>
      <h1>StopWatch</h1>
      <h3>Current time is {time}</h3>
    </div>
  )
}

export default Timer
