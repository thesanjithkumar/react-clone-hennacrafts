// import classes from "./Products.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";
import "./ProductsSection.css";

export default function FacepackPowder() {
  function hover_facepack1() {
    var ele = document.getElementById("product_facepack1");
    ele.setAttribute(
      "src",
      "https://hennacrafts.com/wp-content/uploads/2021/02/arabica_coffee_2.jpg"
    );
  }

  function unhover_facepack1() {
    var ele = document.getElementById("product_facepack1");
    ele.setAttribute(
      "src",
      "https://hennacrafts.com/wp-content/uploads/2021/02/minty_walnut_400x.jpg"
    );
  }

  function hover_facepack2() {
    var ele = document.getElementById("product_facepack2");
    ele.setAttribute(
      "src",
      "https://hennacrafts.com/wp-content/uploads/2021/02/front_view_open_led_400x_2.jpg"
    );
  }

  function unhover_facepack2() {
    var ele = document.getElementById("product_facepack2");
    ele.setAttribute(
      "src",
      "https://hennacrafts.com/wp-content/uploads/2021/02/front_view_open_led_400x.jpg"
    );
  }
  function hover_facepack3() {
    var ele = document.getElementById("product_facepack3");
    ele.setAttribute(
      "src",
      "https://hennacrafts.com/wp-content/uploads/2021/02/arabica_coffee_400x_2.jpg"
    );
  }

  function unhover_facepack3() {
    var ele = document.getElementById("product_facepack3");
    ele.setAttribute(
      "src",
      "https://hennacrafts.com/wp-content/uploads/2021/02/arabica_coffee_400x.jpg"
    );
  }

  function hover_powder1() {
    var ele = document.getElementById("product_powder1");
    ele.setAttribute(
      "src",
      "https://hennacrafts.com/wp-content/uploads/2021/02/bhringraj-back-300x300.jpg"
    );
  }

  function unhover_powder1() {
    var ele = document.getElementById("product_powder1");
    ele.setAttribute(
      "src",
      "https://hennacrafts.com/wp-content/uploads/2021/02/bhringraj-600x600.jpg"
    );
  }
  function hover_powder2() {
    var ele = document.getElementById("product_powder2");
    ele.setAttribute(
      "src",
      "https://hennacrafts.com/wp-content/uploads/2021/02/blackish-brown-back-300x300.jpg "
    );
  }

  function unhover_powder2() {
    var ele = document.getElementById("product_powder2");
    ele.setAttribute(
      "src",
      "https://hennacrafts.com/wp-content/uploads/2021/02/blackish-brown-with-kit-600x600.jpg"
    );
  }

  function hover_powder3() {
    var ele = document.getElementById("product_powder3");
    ele.setAttribute(
      "src",
      "https://hennacrafts.com/wp-content/uploads/2021/02/brahmi-powder-300x300.jpg"
    );
  }

  function unhover_powder3() {
    var ele = document.getElementById("product_powder3");
    ele.setAttribute(
      "src",
      "https://hennacrafts.com/wp-content/uploads/2021/02/brahmi-powder-with-kit.jpg"
    );
  }

  function hover_powder4() {
    var ele = document.getElementById("product_powder4");
    ele.setAttribute(
      "src",
      "https://hennacrafts.com/wp-content/uploads/2021/02/dark-brown-with-kit-300x300.jpg"
    );
  }

  function unhover_powder4() {
    var ele = document.getElementById("product_powder4");
    ele.setAttribute(
      "src",
      "https://hennacrafts.com/wp-content/uploads/2021/02/dark-brown.jpg"
    );
  }

  const [isActive1, setActive1] = useState(true);
  const [isActive2, setActive2] = useState(false);

  const handleToggle1 = () => {
    setActive1(true);
    setActive2(false);
  };

  const handleToggle2 = () => {
    setActive1(false);
    setActive2(true);
  };

  return (
    <Tabs>
      <div className="products">
        <TabList className="tablist">
          <div className="product_heading_div">
            <Tab className="tab_title">
              <h1 id="henna" className="product_heading">
                <button
                  // href="#content-1-tab"
                  // data-ekit-toggle="tab"
                  // aria-controls="content-1"
                  // role="tab"
                  // data-ekit-toggle="tab"
                  className={`product_heading ${isActive1 ? "green" : ""}`}
                  onClick={handleToggle1}
                >
                  FACE PACK
                </button>
              </h1>
            </Tab>
            <Tab className="tab_title">
              <h1 id="indigo" className="product_heading">
                <button
                  // href="#content-1-tab"
                  // data-ekit-toggle="tab"
                  // aria-controls="content-1"
                  // role="tab"
                  // data-ekit-toggle="tab"
                  className={`product_heading ${isActive2 ? "green" : ""}`}
                  onClick={handleToggle2}
                >
                  POWDER
                </button>
              </h1>
            </Tab>
          </div>
        </TabList>
        <TabPanel>
          <a href="">
            <div className="product_card">
              <img
                id="product_facepack1"
                onMouseEnter={hover_facepack1}
                onMouseLeave={unhover_facepack1}
                className="product_image"
                src="https://hennacrafts.com/wp-content/uploads/2021/02/minty_walnut_400x.jpg"
              />
              <p>Face Pack</p>
              <h3 className="product_anme">Aloe vera face pack</h3>
              <p className="product_price">$0.00</p>
            </div>
          </a>
          <a href="">
            <div className="product_card">
              <img
                id="product_facepack2"
                onMouseEnter={hover_facepack2}
                onMouseLeave={unhover_facepack2}
                className="product_image"
                src="https://hennacrafts.com/wp-content/uploads/2021/02/front_view_open_led_400x.jpg"
              />
              <p>Face pack</p>
              <h3 className="product_anme">Ambba Haldi face pack</h3>
              <p className="product_price">$0.00</p>
            </div>
          </a>
          <a href="">
            <div className="product_card">
              <img
                id="product_facepack3"
                onMouseEnter={hover_facepack3}
                onMouseLeave={unhover_facepack3}
                className="product_image"
                src="https://hennacrafts.com/wp-content/uploads/2021/02/arabica_coffee_400x.jpg"
              />
              <p>Face Pack</p>
              <h3 className="product_anme">Chandan face pack</h3>
              <p className="product_price">$0.00</p>
            </div>
          </a>
          <a href="">
            <div className="product_card">
              <img
                className="product_image"
                src="https://hennacrafts.com/wp-content/uploads/2021/02/red-henna-600x600.jpg"
              />
              <p>Face Pack</p>
              <h3 className="product_anme">Hibiscus face pack</h3>
              <p className="product_price">0.00</p>
            </div>
          </a>
        </TabPanel>
        <TabPanel>
          <a href="">
            <div className="product_card">
              <img
                id="product_powder1"
                onMouseEnter={hover_powder1}
                onMouseLeave={unhover_powder1}
                className="product_image"
                src="https://hennacrafts.com/wp-content/uploads/2021/02/bhringraj-600x600.jpg"
              />
              <p>Face Pack</p>
              <h3 className="product_anme">Aloe vera face pack</h3>
              <p className="product_price">$0.00</p>
            </div>
          </a>
          <a href="">
            <div className="product_card">
              <img
                id="product_powder2"
                onMouseEnter={hover_powder2}
                onMouseLeave={unhover_powder2}
                className="product_image"
                src="https://hennacrafts.com/wp-content/uploads/2021/02/blackish-brown-with-kit-600x600.jpg"
              />
              <p>Face pack</p>
              <h3 className="product_anme">Ambba Haldi face pack</h3>
              <p className="product_price">$0.00</p>
            </div>
          </a>
          <a href="">
            <div className="product_card">
              <img
                id="product_powder3"
                onMouseEnter={hover_powder3}
                onMouseLeave={unhover_powder3}
                className="product_image"
                src="https://hennacrafts.com/wp-content/uploads/2021/02/brahmi-powder-with-kit.jpg"
              />
              <p>Face Pack</p>
              <h3 className="product_anme">Chandan face pack</h3>
              <p className="product_price">$0.00</p>
            </div>
          </a>
          <a href="">
            <div className="product_card">
              <img
                id="product_powder4"
                onMouseEnter={hover_powder4}
                onMouseLeave={unhover_powder4}
                className="product_image"
                src="https://hennacrafts.com/wp-content/uploads/2021/02/dark-brown.jpg"
              />
              <p>Face Pack</p>
              <h3 className="product_anme">Chandan face pack</h3>
              <p className="product_price">$0.00</p>
            </div>
          </a>
        </TabPanel>
        <a href="/shop" className="product_button">
          View All Products
        </a>
      </div>
    </Tabs>
  );
}
