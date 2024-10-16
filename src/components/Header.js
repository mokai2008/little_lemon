import React from "react";
import Nav from "./Nav";
import logoSrc from "../assets/images/Logo.svg";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={logoSrc} alt="logo" />
      <Nav />
    </header>
  );
};

export default Header;
