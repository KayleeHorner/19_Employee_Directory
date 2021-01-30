import React from "react";

function Div(props) {
  return (
    <div className="container">
    
      <div>{props.children}</div>
    </div>
  );
}

export default Div
