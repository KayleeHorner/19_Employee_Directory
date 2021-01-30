import React from "react";

const UserDetail = (props) => {

  return (
    <div className="row">

  <table className="container">
        <thead>
          <tr>
              <th>Picture</th>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td><img src={props.image} alt={props.name} /></td>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
          </tr>
        </tbody>
      </table>




    </div>
  );
}

export default UserDetail;
