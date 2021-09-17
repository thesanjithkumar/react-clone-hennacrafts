import React from "react";
import { MDBFooter, MDBRow, MDBCol } from "mdb-react-ui-kit";
import classes from "./Layout.module.css";
import nayab_henna_logo from "../img/nayab_henna_logo.png";
function Footer() {
  return (
    <div className={classes.footer}>
      <MDBFooter className="text-lg-left">
        <div className="container-fluid py-4 ms-4 mt-3">
          <MDBRow className="mb-5 mt-4">
            <MDBCol lg="4" md="12" className={classes.left}>
              <h1 className="">About Us</h1>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                atque ea quis molestias. Fugiat pariatur maxime quis culpa
                corporis vitae repudiandae aliquam voluptatem veniam, est atque
                cumque eum delectus sint!
              </p>
            </MDBCol>

            <MDBCol lg="4" md="12" className="">
              {/* <h6 className="text-uppercase">Image Placeholder</h6> */}
              {/* <div className={classes.footer_img_div}> */}
              <img
                className={classes.footer_img}
                src={nayab_henna_logo}
                alt=""
              />
              <p className="mt-4">COMPANY NAME</p>
              {/* </div> */}
              {/* 
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-light">
                    Just a
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-light">
                    PlaceHolder
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-light">
                    Until we get
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-light">
                    An image
                  </a>
                </li>
              </ul> */}
            </MDBCol>

            <MDBCol lg="2" md="6" className={classes.links}>
              <h6 className="lead mb-2">Quick Links</h6>

              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-light">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-light">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-light">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-light">
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol lg="2" md="6" className={classes.links}>
              <h5 className="lead mb-2">Site Links</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-light">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-light">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-light">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-light">
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol lg="6" md="6" className={classes.left}>
              <p>
                Copyright 2021
                <span className=""> | Company Name</span>
              </p>
            </MDBCol>
            <MDBCol lg="6" md="6" className={classes.footer_icons}>
              <p className="text-light">Placeholder for icons</p>
            </MDBCol>
          </MDBRow>
        </div>
      </MDBFooter>
    </div>
  );
}
export default Footer;
