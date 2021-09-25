import classes from "./Products.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";

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

  return (
    <Tabs>
      <div className={classes.products}>
        <TabList className={classes.tabList}>
          <div className={classes.product_heading_div}>
            <Tab className={classes.tab_title}>
              <h1 id="henna" className={classes.product_heading}>
                <button
                  // href="#content-1-tab"
                  // data-ekit-toggle="tab"
                  // aria-controls="content-1"
                  // role="tab"
                  // data-ekit-toggle="tab"
                  className={classes.product_heading}
                >
                  HENNA
                </button>
              </h1>
            </Tab>
            <Tab className={classes.tab_title}>
              <h1 id="indigo" className={classes.product_heading}>
                <button
                  // href="#content-1-tab"
                  // data-ekit-toggle="tab"
                  // aria-controls="content-1"
                  // role="tab"
                  // data-ekit-toggle="tab"
                  className={classes.product_heading}
                >
                  INDIGO
                </button>
              </h1>
            </Tab>
          </div>
        </TabList>
        <TabPanel>
          <a href="">
            <div className={classes.product_card}>
              <img
                className={classes.product_image}
                src="https://hennacrafts.com/wp-content/uploads/2021/02/orange-peel-1-300x300.jpg"
              />
              <p>Face Pack</p>
              <h3 className={classes.product_name}>Aloe vera face pack</h3>
              <p>$0.00</p>
            </div>
          </a>
          <a href="">
            <div className={classes.product_card}>
              <img
                className={classes.product_image}
                src="https://hennacrafts.com/wp-content/uploads/2021/02/pudina-leaves-300x300.jpg"
              />
              <p>Face pack</p>
              <h3 className={classes.product_name}>Ambba Haldi face pack</h3>
              <p>$0.00</p>
            </div>
          </a>
          <a href="">
            <div className={classes.product_card}>
              <img
                className={classes.product_image}
                src="https://hennacrafts.com/wp-content/uploads/2021/02/nagarmota-with-kit-300x300.jpg"
              />
              <p>Face Pack</p>
              <h3 className={classes.product_name}>Aloe vera face pack</h3>
              <p>$0.00</p>
            </div>
          </a>
          <a href="">
            <div className={classes.product_card}>
              <img
                id="product_henna"
                onMouseEnter={hover_henna}
                onMouseLeave={unhover_henna}
                className={classes.product_image}
                src="https://hennacrafts.com/wp-content/uploads/2021/02/red-henna.jpg"
              />
              <p>Face pack</p>
              <h3 className={classes.product_name}>Ambba Haldi face pack</h3>
              <p>$0.00</p>
            </div>
          </a>
        </TabPanel>
        <TabPanel>
          <div className={classes.products_essentials}>
            <a href="">
              <div className={classes.product_card}>
                <img
                  id="product_indigo1"
                  onMouseEnter={hover_indigo1}
                  onMouseLeave={unhover_indigo1}
                  className={classes.product_image}
                  src="https://hennacrafts.com/wp-content/uploads/2020/12/indigo-with-kit.jpg"
                />
                <p>Face Pack</p>
                <h3 className={classes.product_name}>Aloe vera face pack</h3>
                <p>$0.00</p>
              </div>
            </a>
            <a href="">
              <div className={classes.product_card}>
                <img
                  id="product_indigo2"
                  onMouseEnter={hover_indigo2}
                  onMouseLeave={unhover_indigo2}
                  className={classes.product_image}
                  src="https://hennacrafts.com/wp-content/uploads/2020/12/henna-3-pack-with-kit.jpg"
                />
                <p>Face pack</p>
                <h3 className={classes.product_name}>Ambba Haldi face pack</h3>
                <p>$0.00</p>
              </div>
            </a>
          </div>
        </TabPanel>
        <a href="/shop" className={classes.product_button}>
          View All Products
        </a>
      </div>
    </Tabs>
  );
}
