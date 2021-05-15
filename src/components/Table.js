import React from "react";
import Tbody from "./Tbody";
//This function is what generates the randomized table of employees
function Table(props) {
  console.log(props.results);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Picture</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Location</th>
        </tr>
      </thead>
      <Tbody results={props.results} />
    </table>
  );
}

export default Table;
