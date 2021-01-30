import React from "react";
// import EmployeeContainer from "./components/EmployeeContainer";
import UserDetail from "./components/UserDetail";
import Header from "../src/components/Header/SpanHead";
import Search from "../src/components/Search/Search";


function App() {
  return (
    <div>
      <Header />
      <Search />
      <UserDetail />
       {/* <EmployeeContainer/> */}
    </div>
  )};

export default App;
