import React from "react";
import classes from "./Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul className={classes.list}>
        <li>
          <NavLink to="/" className={(isActive) => (isActive ? "active" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <a href="/">About</a>
        </li>

        <li>
          <a href="/">Menu</a>
        </li>
        <li>
          <NavLink
            to="/booking"
            className={(isActive) => (isActive ? "active" : "")}
          >
            Reservations
          </NavLink>
        </li>
        <li>
          <a href="/">Order Online</a>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
