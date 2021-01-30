import React from "react";

const Container = ({ children }) => {
  return (
  <div className="container">
  
    <div>{children}</div>
    </div>
  );
}
// return <div >{props.children}</div>;

export default Container;
