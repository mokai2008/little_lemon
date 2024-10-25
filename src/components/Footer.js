import React from "react";
import classes from "./Footer.module.css";
import footerImg from "../assets/images/item3.jpg";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <section className={classes.footer_content}>
        <div className={classes.footer_img}>
          <img src={footerImg} alt="footer-img" />
        </div>
        <div className={classes.footer_nav}>
          <h3>Navigation</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>
        <div className={classes.contact}>
          <h3>Contact</h3>
          <ul>
            <li>123-456-7890</li>
            <li>123 street name</li>
            <li>Chicago, IL 60654</li>
          </ul>
        </div>
        <div className={classes.social}>
          <h3>Social</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
