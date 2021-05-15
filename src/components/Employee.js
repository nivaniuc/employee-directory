import React from "react";
import Table from "./Table";
import search from "../components/utils/API";
import Navbar from "./Navbar";

class Employees extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            results: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange(event) {
    this.setState({value: event.target.value});
    }

    handleSubmit(event) {
    event.preventDefault();
    }

  // If this mounts properly, use the giphy api to get images as placeholders (past self)
  componentDidMount() {
    this.queryRandomUserAPI();
  }

  queryRandomUserAPI = () => {
    search()
      .then((res) => this.setState({ results: res.data.results }))
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="container-fluid">
        <Table results={this.state.results} />
      </div>
    );
  }
}

export default Employees;
