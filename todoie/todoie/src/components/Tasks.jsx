import React from 'react';
import '../style.css';  

const Tasks = (props) => {
  return (
    <li className="task-item">
    <span>
      {props.completed ? <></>:<input type="checkbox" />}
      <span className="task-text">{props.text}</span>
    </span>
      <p className="task-options">...</p>
    </li>
  );
};

export default Tasks;
