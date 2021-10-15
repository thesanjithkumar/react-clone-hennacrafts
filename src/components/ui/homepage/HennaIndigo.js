// import classes from "./Products.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";
import ProductsSectionList from "./ProductSectionList";

const DUMMY_DATA1 = [
  {
    id: "1",
    src1: "https://hennacrafts.com/wp-content/uploads/2021/02/orange-peel-1-300x300.jpg",
    src2: "https://hennacrafts.com/wp-content/uploads/2021/02/orange-peel-1-300x300.jpg",
    products_section_name: "Face Pack",
    product_name: "Ambba Haldi face pack",
    price: "$0.00",
  },
  {
    id: "2",
    src1: "https://hennacrafts.com/wp-content/uploads/2021/02/pudina-leaves-300x300.jpg",
    src2: "https://hennacrafts.com/wp-content/uploads/2021/02/pudina-leaves-300x300.jpg",
    products_section_name: "Face Pack",
    product_name: "Ambba Haldi face pack",
    price: "$0.00",
  },
  {
    id: "3",
    src1: "https://hennacrafts.com/wp-content/uploads/2021/02/nagarmota-with-kit-300x300.jpg",
    src2: "https://hennacrafts.com/wp-content/uploads/2021/02/nagarmota-with-kit-300x300.jpg",
    products_section_name: "Face Pack",
    product_name: "Ambba Haldi face pack",
    price: "$0.00",
  },
  {
    id: "4",
    src1: "https://hennacrafts.com/wp-content/uploads/2021/02/red-henna.jpg",
    src2: "https://hennacrafts.com/wp-content/uploads/2021/02/red-henna-with-kit-300x300.jpg",
    products_section_name: "Face Pack",
    product_name: "Ambba Haldi face pack",
    price: "$100.00",
  },
];

const DUMMY_DATA2 = [
  {
    id: "5",
    src1: "https://hennacrafts.com/wp-content/uploads/2020/12/indigo-with-kit.jpg",
    src2: "https://hennacrafts.com/wp-content/uploads/2020/12/indigo-benefits-300x300.jpg",
    products_section_name: "Face Pack",
    product_name: "Ambba Haldi face pack",
    price: "$179.00",
  },
  {
    id: "6",
    src1: "https://hennacrafts.com/wp-content/uploads/2020/12/henna-3-pack-with-kit.jpg",
    src2: "https://hennacrafts.com/wp-content/uploads/2020/12/indigo-back-300x300.jpg",
    products_section_name: "Face Pack",
    product_name: "Ambba Haldi face pack",
    price: "$249.00",
  },
];

export default function HennaIndigo() {
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
                  HENNA
                </button>
              </h1>
            </Tab>
            <Tab className="tab_title">
              <h1 id="indigo" className="product_heading">
                <button
                  className={`product_heading ${isActive2 ? "green" : ""}`}
                  onClick={handleToggle2}
                >
                  INDIGO
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
