import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between">
        <img src="/images/employeeIcon.PNG" alt="logo"/>
        <a className="navbar-brand" href="/">
        Employee Directory
        </a>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
    </nav>
  );
}

export default Navbar;