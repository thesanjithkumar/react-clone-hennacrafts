// import Card from "../components/ui/Card";
import classes from "./HomePage.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function HomePage() {
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
      "https://hennacrafts.com/wp-content/uploads/2020/12/henna-3-pack-with-kit-600x600.jpg"
    );
  }

  return (
    <main>
      {/* top div section */}
      <div className={classes.cardContainer}>
        <a href="/shop" className={classes.card_a}>
          <div className={classes.card1}>
            <div className={classes.cardbottom}>
              <p className={classes.card_p}>100% BEAUTIFUL</p>
              <h2 className={classes.card_heading}>Henna</h2>
              <a href="/shop" className={classes.cardbutton}>
                <span className={classes.buttontext}>View More</span>
              </a>
            </div>
          </div>
        </a>
        <a href="/shop" className={classes.card_a}>
          <div className={classes.card2}>
            <div className={classes.cardbottom}>
              <p className={classes.card_p}>100% NATURAL</p>
              <h2 className={classes.card_heading}>Essential Oil</h2>
              <a href="/shop" className={classes.cardbutton}>
                <span className={classes.buttontext}>View More</span>
              </a>
            </div>
          </div>
        </a>
        <a href="/shop" className={classes.card_a}>
          <div className={classes.card3}>
            <div className={classes.cardbottom}>
              <p className={classes.card_p}>INGREDIENTS THAT MAKE SENSE</p>
              <h2 className={classes.card_heading}>Face Pack</h2>
              <a href="/shop" className={classes.cardbutton}>
                <span className={classes.buttontext}>View More</span>
              </a>
            </div>
          </div>
        </a>
      </div>
      {/* top div section */}
      {/* face pack products section */}
      <Tabs>
        <div className={classes.products}>
          <TabList className={classes.tabList}>
            <div className={classes.product_heading_div}>
              <Tab className={classes.tab_title}>
                <h1 id="henna" className={classes.product_heading}>
                  <a
                    // href="#content-1-tab"
                    // data-ekit-toggle="tab"
                    // aria-controls="content-1"
                    // role="tab"
                    // data-ekit-toggle="tab"
                    className={classes.product_heading}
                  >
                    HENNA
                  </a>
                </h1>
              </Tab>
              <Tab className={classes.tab_title}>
                <h1 id="indigo" className={classes.product_heading}>
                  <a
                    // href="#content-1-tab"
                    // data-ekit-toggle="tab"
                    // aria-controls="content-1"
                    // role="tab"
                    // data-ekit-toggle="tab"
                    className={classes.product_heading}
                  >
                    INDIGO
                  </a>
                </h1>
              </Tab>
            </div>
          </TabList>
          <TabPanel>
            <a href="">
              <div className={classes.product_card}>
                <img
                  className={classes.product_image}
                  src="https://hennacrafts.com/wp-content/uploads/2021/02/minty_walnut_400x.jpg"
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
                  src="https://hennacrafts.com/wp-content/uploads/2021/02/front_view_open_led_400x.jpg"
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
                  src="https://hennacrafts.com/wp-content/uploads/2021/02/arabica_coffee_400x.jpg"
                />
                <p>Face Pack</p>
                <h3 className={classes.product_name}>Chandan face pack</h3>
                <p>$0.00</p>
              </div>
            </a>
            <a href="">
              <div className={classes.product_card}>
                <img
                  className={classes.product_image}
                  src="https://hennacrafts.com/wp-content/uploads/2021/02/red-henna-600x600.jpg"
                />
                <p>Face Pack</p>
                <h3 className={classes.product_name}>Hibiscus face pack</h3>
                <p>0.00</p>
              </div>
            </a>
          </TabPanel>
          <TabPanel className={classes.products_essentials}>
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
                  src="https://hennacrafts.com/wp-content/uploads/2020/12/henna-3-pack-with-kit-600x600.jpg"
                />
                <p>Face pack</p>
                <h3 className={classes.product_name}>Ambba Haldi face pack</h3>
                <p>$0.00</p>
              </div>
            </a>
          </TabPanel>
          <a href="/shop" className={classes.product_button}>
            View All Products
          </a>
        </div>
      </Tabs>
      {/* face pack products section */}
      <Tabs>
        <div className={classes.products}>
          <TabList className={classes.tabList}>
            <div className={classes.product_heading_div}>
              <Tab className={classes.tab_title}>
                <h1 id="henna" className={classes.product_heading}>
                  <a
                    // href="#content-1-tab"
                    // data-ekit-toggle="tab"
                    // aria-controls="content-1"
                    // role="tab"
                    // data-ekit-toggle="tab"
                    className={classes.product_heading}
                  >
                    FACE PACK
                  </a>
                </h1>
              </Tab>
              <Tab className={classes.tab_title}>
                <h1 id="indigo" className={classes.product_heading}>
                  <a
                    // href="#content-1-tab"
                    // data-ekit-toggle="tab"
                    // aria-controls="content-1"
                    // role="tab"
                    // data-ekit-toggle="tab"
                    className={classes.product_heading}
                  >
                    POWDER
                  </a>
                </h1>
              </Tab>
            </div>
          </TabList>
          <TabPanel>
            <a href="">
              <div className={classes.product_card}>
                <img
                  id="product_facepack1"
                  onMouseEnter={hover_facepack1}
                  onMouseLeave={unhover_facepack1}
                  className={classes.product_image}
                  src="https://hennacrafts.com/wp-content/uploads/2021/02/minty_walnut_400x.jpg"
                />
                <p>Face Pack</p>
                <h3 className={classes.product_name}>Aloe vera face pack</h3>
                <p>$0.00</p>
              </div>
            </a>
            <a href="">
              <div className={classes.product_card}>
                <img
                  id="product_facepack2"
                  onMouseEnter={hover_facepack2}
                  onMouseLeave={unhover_facepack2}
                  className={classes.product_image}
                  src="https://hennacrafts.com/wp-content/uploads/2021/02/front_view_open_led_400x.jpg"
                />
                <p>Face pack</p>
                <h3 className={classes.product_name}>Ambba Haldi face pack</h3>
                <p>$0.00</p>
              </div>
            </a>
            <a href="">
              <div className={classes.product_card}>
                <img
                  id="product_facepack3"
                  onMouseEnter={hover_facepack3}
                  onMouseLeave={unhover_facepack3}
                  className={classes.product_image}
                  src="https://hennacrafts.com/wp-content/uploads/2021/02/arabica_coffee_400x.jpg"
                />
                <p>Face Pack</p>
                <h3 className={classes.product_name}>Chandan face pack</h3>
                <p>$0.00</p>
              </div>
            </a>
            <a href="">
              <div className={classes.product_card}>
                <img
                  className={classes.product_image}
                  src="https://hennacrafts.com/wp-content/uploads/2021/02/red-henna-600x600.jpg"
                />
                <p>Face Pack</p>
                <h3 className={classes.product_name}>Hibiscus face pack</h3>
                <p>0.00</p>
              </div>
            </a>
          </TabPanel>
          <TabPanel>
            <a href="">
              <div className={classes.product_card}>
                <img
                  id="product_powder1"
                  onMouseEnter={hover_powder1}
                  onMouseLeave={unhover_powder1}
                  className={classes.product_image}
                  src="https://hennacrafts.com/wp-content/uploads/2021/02/bhringraj-600x600.jpg"
                />
                <p>Face Pack</p>
                <h3 className={classes.product_name}>Aloe vera face pack</h3>
                <p>$0.00</p>
              </div>
            </a>
            <a href="">
              <div className={classes.product_card}>
                <img
                  id="product_powder2"
                  onMouseEnter={hover_powder2}
                  onMouseLeave={unhover_powder2}
                  className={classes.product_image}
                  src="https://hennacrafts.com/wp-content/uploads/2021/02/blackish-brown-with-kit-600x600.jpg"
                />
                <p>Face pack</p>
                <h3 className={classes.product_name}>Ambba Haldi face pack</h3>
                <p>$0.00</p>
              </div>
            </a>
            <a href="">
              <div className={classes.product_card}>
                <img
                  id="product_powder3"
                  onMouseEnter={hover_powder3}
                  onMouseLeave={unhover_powder3}
                  className={classes.product_image}
                  src="https://hennacrafts.com/wp-content/uploads/2021/02/brahmi-powder-with-kit.jpg"
                />
                <p>Face Pack</p>
                <h3 className={classes.product_name}>Chandan face pack</h3>
                <p>$0.00</p>
              </div>
            </a>
            <a href="">
              <div className={classes.product_card}>
                <img
                  id="product_powder4"
                  onMouseEnter={hover_powder4}
                  onMouseLeave={unhover_powder4}
                  className={classes.product_image}
                  src="https://hennacrafts.com/wp-content/uploads/2021/02/dark-brown.jpg"
                />
                <p>Face Pack</p>
                <h3 className={classes.product_name}>Chandan face pack</h3>
                <p>$0.00</p>
              </div>
            </a>
          </TabPanel>
          <a href="/shop" className={classes.product_button}>
            View All Products
          </a>
        </div>
      </Tabs>
      {/* face pack products section */}
      {/* Essentail oil and combo section */}
      <Tabs>
        <div className={classes.products_essentials}>
          <TabList className={classes.tabList}>
            <div className={classes.product_heading_div}>
              <Tab className={classes.tab_title}>
                <h1 id="henna" className={classes.product_heading}>
                  <a
                    // href="#content-1-tab"
                    // data-ekit-toggle="tab"
                    // aria-controls="content-1"
                    // role="tab"
                    // data-ekit-toggle="tab"
                    className={classes.product_heading}
                  >
                    ESSENTIAL OIL
                  </a>
                </h1>
              </Tab>
              <Tab className={classes.tab_title}>
                <h1 id="indigo" className={classes.product_heading}>
                  <a
                    // href="#content-2-tab"
                    // aria-controls="content-2"
                    // role="tab"
                    // aria-labelledby="content-2-tab"
                    // data-ekit-toggle="tab"
                    className={classes.product_heading}
                  >
                    COMBO
                  </a>
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
                  NAYAB Natural Hair Care Henna Powder Pack of 3 with Kit
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
                  NAYAB Organic Hair Care Henna 100gms + Essential Oil Combo
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
                  NAYAB Organic Hair Care Henna 100gms + Essential Oil Combo
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
      {/* Essentail oil and combo section */}
    </main>
  );
}

export default HomePage;
