import React from "react";
import classes from "./Specials.module.css";
import item1 from "../assets/images/item1.jpg";
import item2 from "../assets/images/item2.jpg";
import item3 from "../assets/images/item3.jpg";
import Button from "./Button";

const Specials = () => {
  return (
    <section className={classes.specials}>
      <section className={classes.header}>
        <h1>This Week's Specials!</h1>
        <Button title="Online Menu" />
      </section>

      <section className={classes.content}>
        <section className={classes.item}>
          <img src={item1} alt="specials-item1" />

          <section className={classes.details}>
            <section className={classes.tags}>
              <p>Avocado</p>
              <p className={classes.price}>$10.99</p>
            </section>
            <p>Avocado and mango salad with a side of dressing.</p>
            <a className={classes.order}>Order a delivery</a>
          </section>
        </section>
        <section className={classes.item}>
          <img src={item2} alt="specials-item2" />
          <section className={classes.details}>
            <section className={classes.tags}>
              <p>Avocado</p>
              <p className={classes.price}>$10.99</p>
            </section>
            <p>Avocado and mango salad with a side of dressing.</p>
            <a className={classes.order}>Order a delivery</a>
          </section>
        </section>
        <section className={classes.item}>
          <img src={item3} alt="specials-item3" />
          <section className={classes.details}>
            <section className={classes.tags}>
              <p>Avocado</p>
              <p className={classes.price}>$10.99</p>
            </section>
            <p>Avocado and mango salad with a side of dressing.</p>
            <a className={classes.order}>Order a delivery</a>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Specials;
