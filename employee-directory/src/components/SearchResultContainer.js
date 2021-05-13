import React, { Component } from "react";
import ResultList from "./ResultList";
import Header from "./Header";
import API from "../utils/API";

// eslint-disable-next-line
class SearchResultContainer extends Component {
  state = {
    search: "",
    results: [],
    displayed: [],
    ascending: true,
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchAll();
  }

  searchAll = () => {
    API.search()
      .then(res => {
        console.log(res)
        this.setState({ results: res.data.results })
        this.setState({ displayed: res.data.results })
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    console.log(event)
    console.log(event.target)
    console.log(event.target.value)
    this.setState({
      search: event.target.value
    });
  };
  handleFormSubmit = (event) => {
    event.preventDefault()
    this.employeeSearch(this.state.search)
  };
  employeeSearch = (employee) => {
    let employeeList = this.state.displayed
    const result = employeeList.filter(employees => employees == employee)
    this.setState({ displayed: result })
  };
  // need an event handler
  sortByName = () => {
    let sortedProducts = this.state.displayed
    if (this.state.ascending) {
      sortedProducts.sort((a, b) => {
        if (a["name"]["first"] < b["name"]["first"]) {
          return -1;
        }
        if (a["name"]["first"] > b["name"]["first"]) {
          return 1;
        }
        return 0;
      });
    } else {
      sortedProducts.sort((a, b) => {
        if (a["name"]["first"] > b["name"]["first"]) {
          return -1;
        }
        if (a["name"]["first"] < b["name"]["first"]) {
          return 1;
        }
        return 0;
      });
    }
    this.setState({ ascending: !this.state.ascending });
    this.setState({ displayed: sortedProducts })
  };
 

  render() {
    return (
      <div>
        <Header handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange} />
        <ResultList results={this.state.displayed} employeeSort={this.sortByName} />
      </div>
    );
  }
}

export default SearchResultContainer;
