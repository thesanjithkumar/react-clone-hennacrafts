// import classes from "./Products.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";
import "./ProductsSection.css";
import ProductsSectionList from "./ProductSectionList";

const DUMMY_DATA1 = [
  {
    id: "1",
    src1: "https://hennacrafts.com/wp-content/uploads/2020/12/t1.jpg",
    src2: "https://hennacrafts.com/wp-content/uploads/2020/12/h4-300x300.jpg",
    products_section_name: "Face Pack",
    product_name: "Ambba Haldi face pack",
    price: "$119.00",
  },
  {
    id: "2",
    src1: "https://hennacrafts.com/wp-content/uploads/2020/12/h1.jpg",
    src2: "https://hennacrafts.com/wp-content/uploads/2020/12/h4-300x300.jpg",
    products_section_name: "Face Pack",
    product_name: "Ambba Haldi face pack",
    price: "$119.00",
  },
];

const DUMMY_DATA2 = [
  {
    id: "3",
    src1: "https://hennacrafts.com/wp-content/uploads/2020/12/indigo-3-pack-with-kit.jpg",
    src2: "https://hennacrafts.com/wp-content/uploads/2020/12/henna-back-300x300.jpg",
    products_section_name: "Face Pack",
    product_name: "Ambba Haldi face pack",
    price: "$100.00",
  },
  {
    id: "4",
    src1: "https://hennacrafts.com/wp-content/uploads/2020/12/henna-benefits.jpg",
    src2: "https://hennacrafts.com/wp-content/uploads/2020/12/h1-300x300.jpg",
    products_section_name: "Face Pack",
    product_name: "Ambba Haldi face pack",
    price: "$249.00",
  },
  {
    id: "5",
    src1: "https://hennacrafts.com/wp-content/uploads/2020/12/henna-front-600x600.jpg",
    src2: "https://hennacrafts.com/wp-content/uploads/2020/12/t1-300x300.jpg",
    products_section_name: "Face Pack",
    product_name: "Ambba Haldi face pack",
    price: "$299.00",
  },
];

export default function Card() {
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

  // console.log(isActive1, isActive2);
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
                  ESSENTIAL OIL
                </button>
              </h1>
            </Tab>
            <Tab className="tab_title">
              <h1 id="indigo" className="product_heading">
                <button
                  className={`product_heading ${isActive2 ? "green" : ""}`}
                  onClick={handleToggle2}
                >
                  COMBO
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
