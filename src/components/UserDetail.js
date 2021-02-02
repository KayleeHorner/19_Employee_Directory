import React from "react";

const UserDetail = (props) => {
  return (
    <div className="row center-align">
        <hr/>
      <div className="col m3 s12">{props.firstName}</div>
      <div className="col m3 s12">{props.lastName}</div>
      <div className="col m3 s12">{props.email}</div>
      <div className="col m3 s12">{props.phone}</div>
    
    </div>

  );
  
};

export default UserDetail;
