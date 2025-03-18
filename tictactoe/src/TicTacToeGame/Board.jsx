import React from "react";
import Square from "./Square";
import { useState } from "react";

const Board = () => {
const [state,setState]=useState(Array(9).fill(null));
const [Xturn, setXTurn] = useState(true);

const handleclick=(ind)=>{
    if(state[ind]!==null)return;
    const copyState=[...state];
    copyState[ind]=Xturn ? 'X' : 'O';
    setState(copyState);
    setXTurn(!Xturn);
}

const checkwinner=()=>{
    const winnerLogic = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for(let logic of winnerLogic){
        const [a,b,c]=logic;
        if(state[a] && state[a] === state[b] && state[b] === state[c]){
            return state[a];
        }
    }
    return false;
}
 
const isWinner = checkwinner();

//console.log("state",state)
  return (
    <div className="Board-area">
      {isWinner ? <>{isWinner} Won the game! <button onClick={()=>{
        setState(Array(9).fill(null));
      }}>Play again</button></> :<> 
      <h4>Player {Xturn ? 'X' : 'O'} Please Move!</h4>
       <div className="board-row">
        <Square onClick={()=>handleclick(0)} value={state[0]}/>
        <Square onClick={()=>handleclick(1)} value={state[1]}/>
        <Square onClick={()=>handleclick(2)} value={state[2]}/>
      </div>
      <div className="board-row">
        <Square onClick={()=>handleclick(3)} value={state[3]}/>
        <Square onClick={()=>handleclick(4)} value={state[4]}/>
        <Square onClick={()=>handleclick(5)} value={state[5]}/>
      </div>
      <div className="board-row">
        <Square onClick={()=>handleclick(6)} value={state[6]}/>
        <Square onClick={()=>handleclick(7)} value={state[7]}/>
        <Square onClick={()=>handleclick(8)} value={state[8]}/>
      </div></>}
    </div>
  );
};

export default Board;
