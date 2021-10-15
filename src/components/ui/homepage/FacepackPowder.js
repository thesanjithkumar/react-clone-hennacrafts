// import classes from "./Products.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";
import "./ProductsSection.css";
import ProductsSectionList from "./ProductSectionList";

const DUMMY_DATA1 = [
  {
    id: "1",
    src1: "https://hennacrafts.com/wp-content/uploads/2021/02/minty_walnut_400x.jpg",
    src2: "https://hennacrafts.com/wp-content/uploads/2021/02/arabica_coffee_2.jpg",
    products_section_name: "Face Pack",
    product_name: "Ambba Haldi face pack",
    price: "$0.00",
  },
  {
    id: "2",
    src1: "https://hennacrafts.com/wp-content/uploads/2021/02/front_view_open_led_400x.jpg",
    src2: "https://hennacrafts.com/wp-content/uploads/2021/02/front_view_open_led_400x_2.jpg",
    products_section_name: "Face Pack",
    product_name: "Ambba Haldi face pack",
    price: "$0.00",
  },
  {
    id: "3",
    src1: "https://hennacrafts.com/wp-content/uploads/2021/02/arabica_coffee_400x.jpg",
    src2: "https://hennacrafts.com/wp-content/uploads/2021/02/arabica_coffee_400x_2.jpg",
    products_section_name: "Face Pack",
    product_name: "Ambba Haldi face pack",
    price: "$0.00",
  },
  {
    id: "4",
    src1: "https://hennacrafts.com/wp-content/uploads/2021/02/GoatMilklotionFinalMockup_400x-300x300.jpg",
    src2: "https://hennacrafts.com/wp-content/uploads/2021/02/GoatMilklotionFinalMockup_400x-300x300.jpg",
    products_section_name: "Face Pack",
    product_name: "Ambba Haldi face pack",
    price: "$0.00",
  },
];

const DUMMY_DATA2 = [
  {
    id: "5",
    src1: "https://hennacrafts.com/wp-content/uploads/2021/02/bhringraj-600x600.jpg",
    src2: "https://hennacrafts.com/wp-content/uploads/2021/02/bhringraj-back-300x300.jpg",
    products_section_name: "Face Pack",
    product_name: "Ambba Haldi face pack",
    price: "$0.00",
  },
  {
    id: "6",
    src1: "https://hennacrafts.com/wp-content/uploads/2021/02/blackish-brown-with-kit-600x600.jpg",
    src2: "https://hennacrafts.com/wp-content/uploads/2021/02/blackish-brown-back-300x300.jpg ",
    products_section_name: "Face Pack",
    product_name: "Ambba Haldi face pack",
    price: "$0.00",
  },
  {
    id: "7",
    src1: "https://hennacrafts.com/wp-content/uploads/2021/02/brahmi-powder-with-kit.jpg",
    src2: "https://hennacrafts.com/wp-content/uploads/2021/02/brahmi-powder-300x300.jpg",
    products_section_name: "Face Pack",
    product_name: "Ambba Haldi face pack",
    price: "$0.00",
  },
  {
    id: "8",
    src1: "https://hennacrafts.com/wp-content/uploads/2021/02/dark-brown.jpg",
    src2: "https://hennacrafts.com/wp-content/uploads/2021/02/dark-brown-with-kit-300x300.jpg",
    products_section_name: "Face Pack",
    product_name: "Ambba Haldi face pack",
    price: "$0.00",
  },
];

export default function FacepackPowder() {
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
                  className={`product_heading ${isActive2 ? "green" : ""}`}
                  onClick={handleToggle2}
                >
                  POWDER
                </button>
              </h1>
            </Tab>
          </div>
        </TabList>
        <TabPanel className="products_essentials">
          <ProductsSectionList products={DUMMY_DATA1} />
        </TabPanel>
        <TabPanel className="products_essentials">
          <ProductsSectionList products={DUMMY_DATA2} />
        </TabPanel>
        <a href="/shop" className="product_button">
          View All Products
        </a>
      </div>
    </Tabs>
  );
}
