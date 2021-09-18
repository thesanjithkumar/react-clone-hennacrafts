import Footer from "./Footer";
import classes from "./Layout.module.css";
import NavbarComponent from "./NavbarComponent";

function Layout(props) {
  return (
    <div>
      <NavbarComponent />
      <main className={classes.main}>{props.children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
