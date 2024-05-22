import React from "react";
import littlelemon_logo from "../images/littlelemon_logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src={littlelemon_logo}
            alt="Little Lemon Logo"
            width="190"
            height="54"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="./">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./Header.js">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Menu
              </a>
            </li>
            <Link to="/Booking" class="nav-item">
              <a class="nav-link" aria-label="On Click">
                Reservations
              </a>
            </Link>
            <button>LOGIN</button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
