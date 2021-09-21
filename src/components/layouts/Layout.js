import Footer from "./Footer";
import NavbarComponent from "./NavbarComponent";

function Layout(props) {
  return (
    <div>
      <NavbarComponent />
      <main>{props.children}</main>

      <Footer />
    </div>
  );
}

export default Layout;
