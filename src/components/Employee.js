import React from "react";
import Table from "./Table";
import search from "./utils/API";

class Employee extends React.Component {
  state = {
    results: [],
  };

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

export default Employee;