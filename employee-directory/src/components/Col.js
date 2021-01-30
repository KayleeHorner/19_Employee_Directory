import React from "react";

function Col(props) {

  return (
    <div className="col m10 offset-m1 s12">
      {props.children}
    </div>
  );
}

export default Col;
