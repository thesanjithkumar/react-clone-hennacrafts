// import classes from "./Products.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";
import "./ProductsSection.css";

export default function Card() {
  function hover_essentialoil1() {
    var ele = document.getElementById("product_essentialoil1");
    ele.setAttribute(
      "src",
      "https://hennacrafts.com/wp-content/uploads/2020/12/h4-300x300.jpg"
    );
  }

  function unhover_essentialoil1() {
    var ele = document.getElementById("product_essentialoil1");
    ele.setAttribute(
      "src",
      "https://hennacrafts.com/wp-content/uploads/2020/12/t1.jpg"
    );
  }

  function hover_essentialoil2() {
    var ele = document.getElementById("product_essentialoil2");
    ele.setAttribute(
      "src",
      "https://hennacrafts.com/wp-content/uploads/2020/12/h4-300x300.jpg"
    );
  }

  function unhover_essentialoil2() {
    var ele = document.getElementById("product_essentialoil2");
    ele.setAttribute(
      "src",
      "https://hennacrafts.com/wp-content/uploads/2020/12/h1.jpg"
    );
  }

  function hover_combo1() {
    var ele = document.getElementById("product_combo1");
    ele.setAttribute(
      "src",
      "https://hennacrafts.com/wp-content/uploads/2020/12/henna-back-300x300.jpg"
    );
  }

  function unhover_combo1() {
    var ele = document.getElementById("product_combo1");
    ele.setAttribute(
      "src",
      "https://hennacrafts.com/wp-content/uploads/2020/12/indigo-3-pack-with-kit.jpg"
    );
  }

  function hover_combo2() {
    var ele = document.getElementById("product_combo2");
    ele.setAttribute(
      "src",
      "https://hennacrafts.com/wp-content/uploads/2020/12/h1-300x300.jpg"
    );
  }

  function unhover_combo2() {
    var ele = document.getElementById("product_combo2");
    ele.setAttribute(
      "src",
      "https://hennacrafts.com/wp-content/uploads/2020/12/henna-benefits.jpg"
    );
  }

  function hover_combo3() {
    var ele = document.getElementById("product_combo3");
    ele.setAttribute(
      "src",
      "https://hennacrafts.com/wp-content/uploads/2020/12/t1-300x300.jpg"
    );
  }

  function unhover_combo3() {
    var ele = document.getElementById("product_combo3");
    ele.setAttribute(
      "src",
      "https://hennacrafts.com/wp-content/uploads/2020/12/henna-front-600x600.jpg"
    );
  }

  const [isActive1, setActive1] = useState(true);
  const [isActive2, setActive2] = useState(false);

  const handleToggle1 = () => {
    setActive1(!isActive1);
    setActive2(false);
  };

  const handleToggle2 = () => {
    setActive1(false);
    setActive2(!isActive2);
  };

  console.log(isActive1, isActive2);
  return (
    <main>
      <Tabs>
        <div className="products_essentials">
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
                    <p>ESSENTIAL OIL</p>
                  </button>
                </h1>
              </Tab>
              <Tab className="tab_title">
                <h1 id="indigo" className="product_heading">
                  <button
                    // href="#content-2-tab"
                    // aria-controls="content-2"
                    // role="tab"
                    // aria-labelledby="content-2-tab"
                    // data-ekit-toggle="tab"
                    onClick={handleToggle2}
                    className={`product_heading ${isActive2 ? "green" : ""}`}
                  >
                    <p>COMBO</p>
                  </button>
                </h1>
              </Tab>
            </div>
          </TabList>
          <TabPanel>
            <a href="">
              <div
                className="product_card"
                id="content-1"
                aria-labelledby="content-1-tab"
                role="tabpanel"
              >
                <img
                  id="product_essentialoil1"
                  onMouseEnter={hover_essentialoil1}
                  onMouseLeave={unhover_essentialoil1}
                  className="product_image"
                  src="https://hennacrafts.com/wp-content/uploads/2020/12/t1.jpg"
                />
                <p>Essential Oil</p>
                <h3 className="product_name">Eucalyptus Essential Oil</h3>
                <p>
                  <span className="strikethrough">$299.00</span> $119.00
                </p>
              </div>
            </a>
            <a href="">
              <div className="product_card">
                <img
                  id="product_essentialoil2"
                  onMouseEnter={hover_essentialoil2}
                  onMouseLeave={unhover_essentialoil2}
                  className="product_image"
                  src="https://hennacrafts.com/wp-content/uploads/2020/12/h1.jpg"
                />
                <p>Essential Oil</p>
                <h3 className="product_name">NAYAB Tea Tree Essential Oil</h3>
                <p>
                  <span className="strikethrough">$299.00</span> $119.00
                </p>
              </div>
            </a>
          </TabPanel>
          <TabPanel>
            <a href="">
              <div
                className="product_card"
                id="content-2"
                role="tabpanel"
                aria-labelledby="content-tab"
              >
                <img
                  id="product_combo1"
                  onMouseEnter={hover_combo1}
                  onMouseLeave={unhover_combo1}
                  className="product_image"
                  src="https://hennacrafts.com/wp-content/uploads/2020/12/indigo-3-pack-with-kit.jpg"
                />
                <p>Face Pack</p>
                <h3 className="product_name">NAYAB Natural Hair Care Henna</h3>
                <p>$0.00</p>
              </div>
            </a>
            <a href="">
              <div className="product_card">
                <img
                  id="product_combo2"
                  onMouseEnter={hover_combo2}
                  onMouseLeave={unhover_combo2}
                  className="product_image"
                  src="https://hennacrafts.com/wp-content/uploads/2020/12/henna-benefits.jpg"
                />
                <p>Face pack</p>
                <h3 className="product_name">NAYAB Organic Hair Care Henna</h3>
                <p>$0.00</p>
              </div>
            </a>
            <a href="">
              <div className="product_card">
                <img
                  id="product_combo3"
                  onMouseEnter={hover_combo3}
                  onMouseLeave={unhover_combo3}
                  className="product_image"
                  src="https://hennacrafts.com/wp-content/uploads/2020/12/henna-front-600x600.jpg"
                />
                <p>Face pack</p>
                <h3 className="product_name">NAYAB Organic Hair Care Henna</h3>
                <p>$0.00</p>
              </div>
            </a>
          </TabPanel>
          <a href="/shop" className="product_button">
            View All Products
          </a>
        </div>
      </Tabs>
    </main>
  );
}
