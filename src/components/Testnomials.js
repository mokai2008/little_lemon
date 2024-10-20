import React from "react";
import classes from "./Testnomials.module.css";
import item1 from "../assets/images/item1.jpg";

const Testnomials = () => {
  return (
    <section className={classes.testo}>
      <h1>Testimonials</h1>
      <section className={classes.content}>
        <section className={classes.item}>
          <section className={classes.details}>
            <div>
              <img src={item1} alt="testo-item1" />
            </div>
            <div>8/10</div>
          </section>
          <p>Review</p>
        </section>
        <section className={classes.item}>
          <section className={classes.details}>
            <div>
              <img src={item1} alt="testo-item1" />
            </div>
            <div>8/10</div>
          </section>
          <p>Review</p>
        </section>
        <section className={classes.item}>
          <section className={classes.details}>
            <div>
              <img src={item1} alt="testo-item1" />
            </div>
            <div>8/10</div>
          </section>
          <p>Review</p>
        </section>
        <section className={classes.item}>
          <section className={classes.details}>
            <div>
              <img src={item1} alt="testo-item1" />
            </div>
            <div>8/10</div>
          </section>
          <p>Review</p>
        </section>
      </section>
    </section>
  );
};

export default Testnomials;
