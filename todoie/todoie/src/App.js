import React from "react";
import Header from "./components/Header.jsx";
import Tasks from "./components/Tasks.jsx";
import Button from "./components/Button.jsx";
import "./style.css";
import CounterComponent from "./components/CounterComponent.jsx";

const app=()=>{
  return (
    <div className="todo-container">
      <CounterComponent/>
      <Header text = "Todo List App"/>
      <Tasks text="eat"/>
      <Tasks text="sleep"/>
      <Tasks text="code"/>
      <Tasks text ="play"/>
      <Button/>
    </div>
  )
}

export default app;