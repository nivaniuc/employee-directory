import React from "react";
import Table from "./Table";
import search from "../components/utils/API";
import Navbar from "./Navbar";
//This employee class returns all of the information for the app
class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      results: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  componentDidMount() {
    this.queryRandomUserAPI();
  }

  queryRandomUserAPI = () => {
    search()
      .then((res) => this.setState({ results: res.data.results }))
      .catch((err) => console.log(err));
  };
  render() {
    //This filters results off of the user's searched terms
    let searchBarFilter = this.state.results.filter(
      (employee) =>
        employee.name.first
          .toLowerCase()
          .indexOf(this.state.value.toLowerCase()) !== -1 ||
        employee.name.last
          .toLowerCase()
          .indexOf(this.state.value.toLowerCase()) !== -1 ||
        employee.email.toLowerCase().indexOf(this.state.value.toLowerCase()) !==
          -1 ||
        employee.location.city
          .toLowerCase()
          .indexOf(this.state.value.toLowerCase()) !== -1 ||
        employee.location.state
          .toLowerCase()
          .indexOf(this.state.value.toLowerCase()) !== -1 ||
        employee.location.country
          .toLowerCase()
          .indexOf(this.state.value.toLowerCase()) !== -1 ||
        employee.phone.toLowerCase().indexOf(this.state.value.toLowerCase()) !==
          -1
    );

    let tableResults;

    if (this.state.value === "") {
      tableResults = this.state.results;
    } else {
      tableResults = searchBarFilter;
    }

    return (
      <div>
        <Navbar
          value={this.state.value}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <div className="container-fluid">
          <Table results={tableResults} />
        </div>
      </div>
    );
  }
}

export default Employee;
