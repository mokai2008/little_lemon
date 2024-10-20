import React from "react";
import classes from "./Button.module.css";
const Button = ({ title, ...props }) => {
  return (
    <button className={classes.customButton} {...props}>
      {title}
    </button>
  );
};

export default Button;
