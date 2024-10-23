import React from "react";
import Nav from "./Nav";
import logoSrc from "../assets/images/Logo.svg";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={classes.header}>
      <NavLink to="/">
        <img src={logoSrc} alt="logo" />
      </NavLink>
      <Nav />
    </header>
  );
};

export default Header;
