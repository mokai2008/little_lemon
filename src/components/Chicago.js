import React from "react";
import classes from "./Chicago.module.css";
import pic1 from "../assets/images/item1.jpg";
import pic2 from "../assets/images/item2.jpg";

const Chicago = () => {
  return (
    <section className={classes.chicago}>
      <div className={classes.details}>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          We are a family owned mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
      </div>
      <div className={classes.images}>
        <img src={pic1} alt="chicago-item1" />
        <img src={pic2} alt="chicago-item2" />
      </div>
    </section>
  );
};

export default Chicago;
