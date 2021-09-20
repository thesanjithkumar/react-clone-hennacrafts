import Footer from "./Footer";
import NavbarComponent from "./NavbarComponent";
import classes from './Layout.module.css';

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
