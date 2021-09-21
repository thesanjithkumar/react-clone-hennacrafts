import cropped_nayab_henna_logo_208x70 from "../img/cropped_nayab_henna_logo_208x70.jpg";
import classes from "./Navbar.module.css";
// import { FaBars } from "react-icons/fa";

function NavbarComponent() {
  function NavbarToggler() {}
  return (
    <headers>
      <div className={classes.navbar}>
        <nav>
          <label className={classes.logo}>
            <a href="/">
              <img src={cropped_nayab_henna_logo_208x70} alt="" />
            </a>
          </label>
          <ul id="mynav" className={classes.mynav}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <div className={classes.dropdown}>
                <span>
                  <a href="/shop">
                    Shop <i className={classes.down}></i>
                  </a>
                </span>
                <div className={classes.dropdown_content}>
                  <p>
                    <a href="">Henna</a>
                  </p>
                  <p>
                    <a href="">Indigo</a>
                  </p>
                  <p>
                    <a href="">Face Pack</a>
                  </p>
                  <p>
                    <a href="">Powder</a>
                  </p>
                  <p>
                    <a href="">Essential Oil</a>
                  </p>
                  <p>
                    <a href="">Combo</a>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <div className={classes.dropdown}>
                <span>
                  <a href="/account">
                    Account <i class={classes.down}></i>
                  </a>
                </span>
                <div className={classes.dropdown_content}>
                  <p>
                    <a href="/account">My Account</a>
                  </p>
                  <p>
                    <a href="/cart">Cart</a>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <a href="/cart" className={classes.cart}>
                Cart
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </headers>
  );
}

export default NavbarComponent;
