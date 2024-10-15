import React from "react";
import Nav from "./Nav";
import logoSrc from "../assets/images/Logo.svg";

const Header = () => {
  return (
    <header>
      <img src={logoSrc} alt="logo" />
      <Nav />
    </header>
  );
};

export default Header;
