import cropped_nayab_henna_logo_208x70 from "../img/cropped_nayab_henna_logo_208x70.jpg";
import classes from "./navbar.module.css";
import { Link } from 'react-router-dom';
import {useState} from 'react';
import {FaBars,FaShoppingBag} from 'react-icons/fa';

function NavbarComponent(props) {
  const [shop_dropdown,setShopDropdown]=useState(false);
  const [account_dropdown,setAccountDropdown]=useState(false);
  const [bar_dropdown,setBarDropdown]=useState(false);

  function ShopDropdown()
  {
    if(shop_dropdown==true)
    setShopDropdown(false);
    else
    setShopDropdown(true);
  }

  function AccountDropdown()
  {
    if(account_dropdown==true)
    setAccountDropdown(false);
    else
    setAccountDropdown(true);
  }

  function BarDropdown()
  {
    if(bar_dropdown==true)
    setBarDropdown(false);
    else
    setBarDropdown(true);
  }
  
  console.log(props.appwidth);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={cropped_nayab_henna_logo_208x70} />
        {props.appwidth <= 768 && (
          <Link to="/">
            <FaShoppingBag size={40} className={classes.bag} />
          </Link>
        )}
        {props.appwidth <= 768 && (
          <FaBars className={classes.bar} size={40} onClick={BarDropdown} />
        )}
      </div>
      {(bar_dropdown || props.appwidth > 768) && (
        <nav className={classes.nav}>
          <ul className={classes.navlink}>
            <li>
              <Link to="/" className={classes.link}>
                Home
              </Link>
            </li>
            <li onClick={ShopDropdown}>
              <Link to="/shop" className={classes.link}>
                Shop{" "}
                <span
                  className={
                    shop_dropdown ? classes.shoparrowup : classes.shoparrowdown
                  }
                ></span>
              </Link>
              <div className={classes.shop_dropdown}>
                {shop_dropdown && (
                  <ul>
                    <li>
                      <Link to="/" className={classes.link}>
                        Henna
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className={classes.link}>
                        Indigo
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className={classes.link}>
                        Face Pack
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className={classes.link}>
                        Essential Oil
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className={classes.link}>
                        Combo
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li>
              <Link to="/blog" className={classes.link}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className={classes.link}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className={classes.link}>
                About
              </Link>
            </li>
            <li onClick={AccountDropdown}>
              <Link to="/account" className={classes.link}>
                Account
                <span
                  className={
                    account_dropdown
                      ? classes.accountarrowup
                      : classes.accountarrowdown
                  }
                ></span>
              </Link>
              <div className={classes.account_dropdown}>
                {account_dropdown && (
                  <ul>
                    <li>
                      <Link to="/account" className={classes.link}>
                        My Account
                      </Link>
                    </li>
                    <li>
                      <Link to="/cart" className={classes.link}>
                        Cart
                      </Link>
                    </li>
                    <li>
                      <Link to="/dashboard" className={classes.link}>
                        Dashboard
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            {props.appwidth > 768 && (
              <li>
                <Link to="/cart">
                  <FaShoppingBag size={40} className={classes.bag} />
                </Link>
              </li>
            )}
          </ul>
        </nav>
      )}
    </header>
  );

}

export default NavbarComponent;
