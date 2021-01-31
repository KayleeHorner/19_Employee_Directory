import React, { Component } from "react";
import Container from "./Container/Container";
import Search from "./Search/Search";
import UserDetail from "./UserDetail";
import API from "../utils/API";

class EmployeeContainer extends Component {
  state = {
    filter: "",
    employees: [],
    search: "",
  };

  componentDidMount() {
   this.loadEmployees();
  }

  loadEmployees = () => {
    API.loadEmployees()
    .then((res) => {
      console.log(res);
      this.setState({ employees: res.data.results });
    })
    .then(() => {
      this.setState({ filter: this.state.results });
    })
    .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    if (event.target.name === "search") {
      const inputs = event.target.value;
      this.setState(
        {
          search: inputs,
        }
      );
    }
  };

  render() {

    return (
      <React.Fragment>
      <Container>
        <div className="row">
              <Search
                search={this.state.search}
                handleInputChange={this.handleInputChange}
              />
        </div>

        <div className="row">
    
        
   
       
              <UserDetail
                  firstname={this.state.results.name.first}
                  lastname={this.state.resuls.name.last}
                  email={this.state.results.email}
                  location={this.state.results.location}
                  phone={this.state.results.phone}
                /> 
           
      
        </div>
      </Container>
      </React.Fragment>
    );



  }
}

export default EmployeeContainer;
