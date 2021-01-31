import React from "react";

const UserDetail = (props) => {
  <div
  firstname={props.name.first}
  lastname={props.name.last}
  email={props.email}
  location={props.location}
  phone={props.phone}
/> 

}

//   return (
//     <div className="row">

//   <table className="container">
//         <thead>
//           <tr>
//               <th>Picture</th>
//               <th>ID</th>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Email</th>
//               <th>Phone</th>
//           </tr>
//         </thead>

//         <tbody>
//           <tr>
//             <td><img src={props.image} alt={props.name} /></td>
//             <td>{props.id}</td>
//             <td>{props.name}</td>
//             <td>{props.name}</td>
//             <td>{props.email}</td>
//             <td>{props.phone}</td>
//           </tr>
//         </tbody>
//       </table>




//     </div>
//   );
// }

export default UserDetail;
