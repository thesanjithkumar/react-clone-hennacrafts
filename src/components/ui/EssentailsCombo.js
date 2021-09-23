import classes from "./Products.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

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

  return (
    <main>
      <Tabs>
        <div className={classes.products_essentials}>
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
                    ESSENTIAL OIL
                  </button>
                </h1>
              </Tab>
              <Tab className={classes.tab_title}>
                <h1 id="indigo" className={classes.product_heading}>
                  <button
                    // href="#content-2-tab"
                    // aria-controls="content-2"
                    // role="tab"
                    // aria-labelledby="content-2-tab"
                    // data-ekit-toggle="tab"
                    className={classes.product_heading}
                  >
                    COMBO
                  </button>
                </h1>
              </Tab>
            </div>
          </TabList>
          <TabPanel>
            <a href="">
              <div
                className={classes.product_card}
                id="content-1"
                aria-labelledby="content-1-tab"
                role="tabpanel"
              >
                <img
                  id="product_essentialoil1"
                  onMouseEnter={hover_essentialoil1}
                  onMouseLeave={unhover_essentialoil1}
                  className={classes.product_image}
                  src="https://hennacrafts.com/wp-content/uploads/2020/12/t1.jpg"
                />
                <p>Essential Oil</p>
                <h3 className={classes.product_name}>
                  Eucalyptus Essential Oil
                </h3>
                <p>
                  <span className={classes.strikethrough}>$299.00</span> $119.00
                </p>
              </div>
            </a>
            <a href="">
              <div className={classes.product_card}>
                <img
                  id="product_essentialoil2"
                  onMouseEnter={hover_essentialoil2}
                  onMouseLeave={unhover_essentialoil2}
                  className={classes.product_image}
                  src="https://hennacrafts.com/wp-content/uploads/2020/12/h1.jpg"
                />
                <p>Essential Oil</p>
                <h3 className={classes.product_name}>
                  NAYAB Tea Tree Essential Oil
                </h3>
                <p>
                  <span className={classes.strikethrough}>$299.00</span> $119.00
                </p>
              </div>
            </a>
          </TabPanel>
          <TabPanel>
            <a href="">
              <div
                className={classes.product_card}
                id="content-2"
                role="tabpanel"
                aria-labelledby="content-tab"
              >
                <img
                  id="product_combo1"
                  onMouseEnter={hover_combo1}
                  onMouseLeave={unhover_combo1}
                  className={classes.product_image}
                  src="https://hennacrafts.com/wp-content/uploads/2020/12/indigo-3-pack-with-kit.jpg"
                />
                <p>Face Pack</p>
                <h3 className={classes.product_name}>
                  NAYAB Natural Hair Care Henna
                </h3>
                <p>$0.00</p>
              </div>
            </a>
            <a href="">
              <div className={classes.product_card}>
                <img
                  id="product_combo2"
                  onMouseEnter={hover_combo2}
                  onMouseLeave={unhover_combo2}
                  className={classes.product_image}
                  src="https://hennacrafts.com/wp-content/uploads/2020/12/henna-benefits.jpg"
                />
                <p>Face pack</p>
                <h3 className={classes.product_name}>
                  NAYAB Organic Hair Care Henna
                </h3>
                <p>$0.00</p>
              </div>
            </a>
            <a href="">
              <div className={classes.product_card}>
                <img
                  id="product_combo3"
                  onMouseEnter={hover_combo3}
                  onMouseLeave={unhover_combo3}
                  className={classes.product_image}
                  src="https://hennacrafts.com/wp-content/uploads/2020/12/henna-front-600x600.jpg"
                />
                <p>Face pack</p>
                <h3 className={classes.product_name}>
                  NAYAB Organic Hair Care Henna
                </h3>
                <p>$0.00</p>
              </div>
            </a>
          </TabPanel>
          <a href="/shop" className={classes.product_button}>
            View All Products
          </a>
        </div>
      </Tabs>
    </main>
  );
}
