// import classes from "./Products.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";
import "./ProductsSection.css";

export default function HennaIndigo() {
  // const [color, setColor] = useState({ color: "#000000" });

  // const setStyle = (color) => {
  //   setColor(color);
  // };

  // function tab() {
  //   if (color == "#000000") setColor({ color: "#719d0f" });
  //   else setColor({ color: "#000000" });
  // }

  function hover_henna() {
    var ele = document.getElementById("product_henna");
    ele.setAttribute(
      "src",
      "https://hennacrafts.com/wp-content/uploads/2021/02/red-henna-with-kit-300x300.jpg"
    );
  }

  function unhover_henna() {
    var ele = document.getElementById("product_henna");
    ele.setAttribute(
      "src",
      "https://hennacrafts.com/wp-content/uploads/2021/02/red-henna-600x600.jpg"
    );
  }

  function hover_indigo1() {
    var ele = document.getElementById("product_indigo1");
    ele.setAttribute(
      "src",
      "https://hennacrafts.com/wp-content/uploads/2020/12/indigo-benefits-300x300.jpg"
    );
  }

  function unhover_indigo1() {
    var ele = document.getElementById("product_indigo1");
    ele.setAttribute(
      "src",
      "https://hennacrafts.com/wp-content/uploads/2020/12/indigo-with-kit.jpg"
    );
  }

  function hover_indigo2() {
    var ele = document.getElementById("product_indigo2");
    ele.setAttribute(
      "src",
      "https://hennacrafts.com/wp-content/uploads/2020/12/indigo-back-300x300.jpg"
    );
  }

  function unhover_indigo2() {
    var ele = document.getElementById("product_indigo2");
    ele.setAttribute(
      "src",
      "https://hennacrafts.com/wp-content/uploads/2020/12/henna-3-pack-with-kit.jpg"
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
                  HENNA
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
                  INDIGO
                </button>
              </h1>
            </Tab>
          </div>
        </TabList>
        <TabPanel>
          <a href="">
            <div className="product_card">
              <img
                className="product_image"
                src="https://hennacrafts.com/wp-content/uploads/2021/02/orange-peel-1-300x300.jpg"
              />
              <p>Face Pack</p>
              <h3 className="product_name">Aloe vera face pack</h3>
              <p>$0.00</p>
            </div>
          </a>
          <a href="">
            <div className="product_card">
              <img
                className="product_image"
                src="https://hennacrafts.com/wp-content/uploads/2021/02/pudina-leaves-300x300.jpg"
              />
              <p>Face pack</p>
              <h3 className="product_name">Ambba Haldi face pack</h3>
              <p>$0.00</p>
            </div>
          </a>
          <a href="">
            <div className="product_card">
              <img
                className="product_image"
                src="https://hennacrafts.com/wp-content/uploads/2021/02/nagarmota-with-kit-300x300.jpg"
              />
              <p>Face Pack</p>
              <h3 className="product_name">Aloe vera face pack</h3>
              <p>$0.00</p>
            </div>
          </a>
          <a href="">
            <div className="product_card">
              <img
                id="product_henna"
                onMouseEnter={hover_henna}
                onMouseLeave={unhover_henna}
                className="product_image"
                src="https://hennacrafts.com/wp-content/uploads/2021/02/red-henna.jpg"
              />
              <p>Face pack</p>
              <h3 className="product_name">Ambba Haldi face pack</h3>
              <p>$0.00</p>
            </div>
          </a>
        </TabPanel>
        <TabPanel>
          <div className="products_essentials">
            <a href="">
              <div className="product_card">
                <img
                  id="product_indigo1"
                  onMouseEnter={hover_indigo1}
                  onMouseLeave={unhover_indigo1}
                  className="product_image"
                  src="https://hennacrafts.com/wp-content/uploads/2020/12/indigo-with-kit.jpg"
                />
                <p>Face Pack</p>
                <h3 className="product_name">Aloe vera face pack</h3>
                <p>$0.00</p>
              </div>
            </a>
            <a href="">
              <div className="product_card">
                <img
                  id="product_indigo2"
                  onMouseEnter={hover_indigo2}
                  onMouseLeave={unhover_indigo2}
                  className="product_image"
                  src="https://hennacrafts.com/wp-content/uploads/2020/12/henna-3-pack-with-kit.jpg"
                />
                <p>Face pack</p>
                <h3 className="product_name">Ambba Haldi face pack</h3>
                <p>$0.00</p>
              </div>
            </a>
          </div>
        </TabPanel>
        <a href="/shop" className="product_button">
          View All Products
        </a>
      </div>
    </Tabs>
  );
}
