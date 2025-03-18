 import React from 'react';
 import { useEffect,useState } from 'react';
import './App.css';
import MyCoponent from './components/MyCoponent';
import Timer from './components/Timer';

function App() {
  useEffect(()=>{
    console.log("useEffect hook is called");
  })

 const [curr, setcurr] = useState(1);

  return (
     <>
       <Timer/>
      {/* {curr?<MyCoponent/>:<></>}
     <button onClick={()=>{
       setcurr(!curr);
     }}>toggle</button> */}
     </>
  );
}

export default App;
