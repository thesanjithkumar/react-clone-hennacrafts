import Footer from "./Footer";
import classes from './Layout.module.css';
import NavbarResize from "./NavbarResize";
function Layout(props) {
  return (
    <div > 
      <NavbarResize/>
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
