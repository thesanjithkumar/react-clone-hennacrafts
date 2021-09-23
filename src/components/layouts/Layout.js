import Footer from "./Footer";
import NavbarResize from "./NavbarResize";
function Layout(props) {
  return (
    <div> 
      <NavbarResize/>
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
