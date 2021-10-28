import cropped_nayab_henna_logo_208x70 from "../img/cropped_nayab_henna_logo_208x70.jpg";
import classes from "./navbar.module.css";
import { Link, useLocation } from 'react-router-dom';
import { useState, useContext, useRef, useEffect } from 'react';
import { FaBars, FaShoppingBag } from 'react-icons/fa';
import ProductFilterContext from '../shop_page/ProductFilterContext';


function NavbarComponent(props) {
  const [shop_dropdown, setShopDropdown] = useState(false);
  const [account_dropdown, setAccountDropdown] = useState(false);
  const [bar_dropdown, setBarDropdown] = useState(false);
  const location = useLocation();
  const filterctx=useContext(ProductFilterContext);

  function useOutsideAlerter(ref, setDropdown) {

    useEffect(() => {
      function handleOutsideClick(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setDropdown(false)
        }
      }
      document.addEventListener("click", handleOutsideClick);
    }, [ref]);
  }

  const shoplist = useRef(null);
  const accountlist = useRef(null);
  useOutsideAlerter(shoplist, setShopDropdown);
  useOutsideAlerter(accountlist, setAccountDropdown);


  function ShopDropdown() {
    if (shop_dropdown == true)
      setShopDropdown(false);
    else
      setShopDropdown(true);
  }

  function AccountDropdown() {
    if (account_dropdown == true)
      setAccountDropdown(false);
    else
      setAccountDropdown(true);
  }

  function BarDropdown() {
    if (bar_dropdown == true)
      setBarDropdown(false);
    else
      setBarDropdown(true);
  }

  function filterProductByCategory(cat_val)
  {
    // console.log(cat_val)
    filterctx.setFilterApplied((prevVal)=>{
      return {...prevVal,category:cat_val}
    })
  }

  // console.log(location.pathname);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={cropped_nayab_henna_logo_208x70} />
        {props.appwidth <= 881 && (
          <Link to="/">
            <FaShoppingBag size={40} className={classes.bag} />
          </Link>
        )}
        {props.appwidth <= 881 && (
          <FaBars className={classes.bar} size={40} onClick={BarDropdown} />
        )}
      </div>
      {(bar_dropdown || props.appwidth > 881) && (
        <nav className={classes.nav}>
          <ul className={classes.navlink}>
            <li>
              <Link to="/" className={`${classes.link} ${location.pathname == '/' ? classes.curpage : classes.notcurpage}`}>
                Home
              </Link>
            </li>
            <li onClick={ShopDropdown} className={classes.dropdowntitle} ref={shoplist}>
              <Link to="/shop" className={`${classes.link} ${location.pathname == '/shop' ? classes.curpage : classes.notcurpage}`} >
                <span>Shop</span>
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
                      <Link to="/shop" className={classes.link} onClick={()=>{filterProductByCategory("Henna")}}>
                        Henna
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop" className={classes.link} onClick={()=>{filterProductByCategory("Indigo")}}>
                        Indigo
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop" className={classes.link} onClick={()=>{filterProductByCategory("Face pack")}}>
                        Face Pack
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop" className={classes.link} onClick={()=>{filterProductByCategory("Essential oil")}}>
                        Essential Oil
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop" className={classes.link} onClick={()=>{filterProductByCategory("Combo")}}>
                        Combo
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li>
              <Link to="/blog" className={`${classes.link} ${location.pathname == '/blog' ? classes.curpage : classes.notcurpage}`}>
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`${classes.link} ${location.pathname == '/contact' ? classes.curpage : classes.notcurpage}`}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className={`${classes.link} ${location.pathname == '/about' ? classes.curpage : classes.notcurpage}`}>
                About
              </Link>
            </li>
            <li onClick={AccountDropdown} className={classes.dropdowntitle} ref={accountlist}>
              <Link to="/account" className={`${classes.link} ${location.pathname == '/account' || location.pathname == '/cart' || location.pathname == '/dashboard' ? classes.curpage : classes.notcurpage}`}>
                <span>Account</span>
                <span className={account_dropdown ? classes.accountarrowup : classes.accountarrowdown}></span>
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
            {props.appwidth > 881 && (
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
