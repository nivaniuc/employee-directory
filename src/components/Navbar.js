import React from "react";
import Search from "./Search"

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between">
        {/* TODO: Add placeholder and folder before deploying */}
        <img src="/images/employeeIcon.PNG" alt="logo"/>
        {/* Me: How did this break?! 
            Also Me: -never added the placeholder image- */}
        <a className="navbar-brand" href="/">
        Employee Directory
        </a>
        import Search from "./Search"
        <Search value={props.value} handleChange={props.handleChange} handleSubmit={props.handleSubmit}/>
      </nav>
  );
}

export default Navbar;