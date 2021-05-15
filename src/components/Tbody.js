import React from "react";
//This function makes table rows for each of the employees
function Tbody(props) {
  console.log(props);
  const tableData = props.results.map((employee) => (
    <tr>
      <th scope="row">
        {employee.name.first} {employee.name.last}
      </th>
      <td>
        <img
          className="img-fluid img-thumbnail"
          src={employee.picture.medium}
          alt={employee.name.first}
        />
      </td>
      <td>{employee.email}</td>
      <td>{employee.phone}</td>
      <td>
        {employee.location.city}, {employee.location.state}
      </td>
    </tr>
  ));

  return <tbody>{tableData}</tbody>;
}

export default Tbody;
