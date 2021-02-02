import React, { Component } from "react";
import Container from "./Container/Container";
import Search from "./Search/Search";
import UserDetail from "./UserDetail";
import API from "../utils/API";

class EmployeeContainer extends Component {
  state = {
    // filter: "",
    employees: [],
    filterRun: [],
    nameSort: 0,
    search: "",
  };

  componentDidMount() {
    this.loadEmployees();
  }

  loadEmployees = async () => {
    const randomEmp = await API.getEmp();
    randomEmp.data.results.forEach((emp, idx) => {

      emp.key=idx;
  
    });
    this.setState({ employees: randomEmp.data.results });
    this.setState({ filterRun: randomEmp.data.results });
  };

  handleInputChange = (event) => {
    const { value } = event.target;
    const filterRun = this.state.employees.filter((emp) => 
      emp.email.includes(value));
      this.setState({
        search: value, filterRun,
      });
    };
 

  render() {
    return (
      <Container>
        <div className="row">
          <Search
            searchInput={this.state.search}
            handleInputChange={this.handleInputChange}
            filterRun={this.sorting}
            emailSort={this.state.emailSort}
          />
        </div>

        <div className="row">
          <div className="card center-align s12">
            <div className="col m3 s12 header">First Name</div>
            <div className="col m3 s12 header">Last Name</div> 
            <div className="col m3 s12 header">Email</div>
            <div className="col m3 s12 header">Phone</div>
            </div>
           
            <br /> <br />
       <div className="card-content">
          {this.state.filterRun.map((emp) => {
            return (
              <UserDetail
                key={emp.key}
                firstName={emp.name.first}
                lastName={emp.name.last}
                email={emp.email}
                phone={emp.phone}
              />
        
            );
          })}
        </div>
        </div>
      </Container>
    );
  }
}

export default EmployeeContainer;
