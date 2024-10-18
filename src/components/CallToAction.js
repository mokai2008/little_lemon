import React from "react";
import classes from "./CallToAction.module.css";
import callToAction from "../assets/images/restaurant.jpg";

const CallToAction = () => {
  return (
    <section className={classes.call}>
      <section className={classes.content}>
        <section className={classes.item}>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button>Reserve a Table</button>
        </section>
        <section className={classes.item}>
          <img src={callToAction} alt="Little Lemon restaurant" />
        </section>
      </section>
    </section>
  );
};

export default CallToAction;
