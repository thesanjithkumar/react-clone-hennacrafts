import React from "react";
import nayab_henna_logo from "../img/nayab_henna_logo.png";
import { Link } from "react-router-dom";
import classes from "./footer.module.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.main}>
        <div className={classes.about}>
          <h2 class={classes.helvetica}>About us</h2>
          <p>
            Mr. Suraj Mal Parihar started our business in 1980 as a Mehandi
            Powder Udyog at Sojat City, the only wholesale marketof henna in
            India.
          </p>
        </div>
        <div className={classes.logo}>
          <img src={nayab_henna_logo} alt="nayab" className={classes.img} />
          <span>HENNACRAFTS</span>
        </div>
        <div className={classes.nav}>
          <ul>
            <li>
              <h3 class={classes.helvetica}>Quick links</h3>
            </li>
            <li>
              <Link to="/" className={classes.link}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className={classes.link}>
                Tester/Samples
              </Link>
            </li>
            <li>
              <Link to="/" className={classes.link}>
                Other Henna Products
              </Link>
            </li>
            <li>
              <Link to="/" className={classes.link}>
                Glitter Henna Products
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <h3 class={classes.helvetica}>Site links</h3>
            </li>
            <li>
              <Link to="/" className={classes.link}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/" className={classes.link}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/" className={classes.link}>
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/" className={classes.link}>
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.media}>
        <div className={classes.copyright}>
          Copyright &copy; 2021 | HennaCrafts
        </div>
        <div className={classes.socialmedia}>
          <Link to="/">
            <FaFacebookF className={classes.facebook} />
          </Link>
          <Link to="/">
            <FaInstagram className={classes.instagram} />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
