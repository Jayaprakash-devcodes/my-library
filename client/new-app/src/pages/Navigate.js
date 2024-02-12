import React from "react";
import { Outlet, Link } from "react-router-dom";
import './Navbar.css'; 

function Navigate() {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/userslist" className="nav-link">Users List</Link>
          </li>
          <li className="nav-item">
            <Link to="/newuser" className="nav-link">New User</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navigate;
