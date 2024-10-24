import React from "react";
import classes from "./CallToAction.module.css";
import callToAction from "../assets/images/restaurant.jpg";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();
  const navigateToReservations = () => {
    navigate("/booking");
  };
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
          <Button title="Reserve a table" onClick={navigateToReservations} />
        </section>
        <section className={classes.item}>
          <img src={callToAction} alt="Little Lemon restaurant" />
        </section>
      </section>
    </section>
  );
};

export default CallToAction;
