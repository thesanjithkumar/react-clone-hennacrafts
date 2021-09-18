import { NavDropdown, Navbar, Nav } from "react-bootstrap";
import cropped_nayab_henna_logo_208x70 from "../img/cropped_nayab_henna_logo_208x70.jpg";
import classes from "./Layout.module.css";
function NavbarComponent() {
  return (
    <Navbar bg="" expand="lg md" fixed="top" classname={classes.navbar}>
      {/* <Container> */}
      <div className="container-fluid">
        <Navbar.Brand href="/" className="ms-3 mt-1">
          <img className="" src={cropped_nayab_henna_logo_208x70} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="mx-2" href="/">
              Home
            </Nav.Link>
            <NavDropdown
              title="Shop"
              href="/"
              className="mx-2"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Henna</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Indigo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Face Pack</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Powder</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Essential oil
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Combo</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="mx-2" href="/blog">
              Blog
            </Nav.Link>
            <Nav.Link className="mx-2" href="/contact">
              Contact
            </Nav.Link>
            <Nav.Link className="mx-2" href="/about">
              About
            </Nav.Link>
            <NavDropdown
              className="mx-2"
              title="Account"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">My Account</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Cart</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="mx-2 me-4" href="/cart">
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
      {/* </Container> */}
    </Navbar>
  );
}

export default NavbarComponent;
