import React from "react";

const Square = ({ onClick, value }) => {  
  return (
    <div
      style={{
        border: "1px solid black",
        height: "100px",
        width: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "24px",
        fontWeight: "bold",
        cursor: "pointer",
      }}
      className="square"
      onClick={onClick}  
    >
      {value}
    </div>
  );
};

export default Square;
