import React, { Component } from "react";
import Container from "./Container";
// import Col from "./Col";
import Div from "./Div";
import Span from "./Header/SpanHead";
import Search from "./Search/Search";
import UserDetail from "./UserDetail";
import API from "../utils/API";


class EmployeeContainer extends Component {

    state = {
      employees: [],
        results: [],
        search: '',
    };
  
    componentDidMount() {
        this.loadEmployees();
        // this.searchUsers();
      }
  

      searchUsers = () => {
        API.search()
          .then(res => this.setState({ results: res.data.results }
            // , () => this.search()
            ))
          .catch(err => console.log(err));
      };

      loadEmployees = () => {
        API.load()
          .then(res => this.setState({ results: res.data.results }
            // , () => this.search()
            ))
          .catch(err => console.log(err));
      };
    
      handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        }, 
        () => {
            this.search();
        // });
      });
        }
    
      
      handleFormSubmit = event => {
        event.preventDefault();
        this.searchUsers(this.state.search);
      };
    
      search = () => {
       const filteredResults = this.state.results.filter((result) => {
         result.email.includes(this.state.search)
       });
       this.setState({ filteredResults: filteredResults });
      };

      render() {
        return (
          <Container>
             <Span />
              <div className="row">
              <div className="col">
                  <div>
                      <Search>

                    <input
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                  />
                  </Search>
         </div>
              </div>
              </div>
            <div className="row">
              <div className="col">
                <Div>
                  
                  {this.state.name ? (
                    <UserDetail
                    image={this.state.results.picture.thumbnail}
                      firstname={this.state.results.name.first}
                      lastname={this.state.results.name.last}
                      email={this.state.results.email}
                      location={this.state.results.location}
                      phone={this.state.phone}
                    />
                  ) : (
                    <h3>No Results to Display</h3>
                  )}
                </Div>
              </div>
             
            </div>
          </Container>
        );
      }
    }

export default EmployeeContainer;