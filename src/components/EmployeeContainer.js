import React, { Component } from "react";
import Container from "./Container/Container";
import Search from "./Search/Search";
import UserDetail from "./UserDetail";
import API from "../utils/API";

class EmployeeContainer extends Component {
  state = {
    // filter: "",
    employees: [],
    filteredEmp: [],
    nameSort: 0,
    search: "",
  };

  componentDidMount() {
    this.loadEmployees();
  }

  loadEmployees = async () => {
    const randomEmp = await API.getEmp();
    randomEmp.data.results.forEach((employee) => {
      const fullName =
        employee.name.first[0].toUpperCase() +
        employee.name.first.substring(1) +
        " " +
        employee.name.last[0] +
        employee.name.last.substring(0);

      employee.name = fullName;
    });
    this.setState({ employees: randomEmp.data.results });
    this.setState({ filteredEmp: randomEmp.data.results });
  };

  handleInputChange = (event) => {
    const { value } = event.target;
    const filterRun = this.state.employees.filter((emp) => {
      emp.email.includes(value)});
      this.setState({
        search: value, filterRun,
      });
    };
 

  // sorting = (event) => {
  //   const name = event.currentTarget.getAttribute('name');
  //   let sort = this.state[name + 'Sort'];
  //   sort === 0 ? (sort = 1) : sort === 1 ? (sort = -1) : (sort = 0);
  //   let sorted;
  //   sorted = this.state.filtereedEmp.sort((emp1, emp2) => {
  //     if (emp1[name] < emp2[name]) {
  //       return sort * -1;
  //     }
  //     if (emp1[name] > emp2[name]) {
  //       return sort * 1;
  //     }
  //     return 0;
  //   })
  // }

  render() {
    return (
      <Container>
        <div className="row">
          <Search
            searchInput={this.state.search}
            handleInputChange={this.handleInputChange}
          />
        </div>

        <div className="row">
          {this.state.employees.map((emp) => {
            return (
              <UserDetail
                firstname={emp.name}
                lastname={emp.name.last}
                email={emp.email}
                picture={emp.picture.thumbnail}
                phone={emp.phone}
              />
            );
          })}
        </div>
      </Container>
    );
  }
}

export default EmployeeContainer;
