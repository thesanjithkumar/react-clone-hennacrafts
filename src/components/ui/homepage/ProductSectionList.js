import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProductSingle from "./ProductSingle";
import "./ProductsSection.css";

export default function ProductsSection(props) {
  return (
    <div>
      {props.products.map((product) => (
        <ProductSingle
          key={product.id}
          src1={product.src1}
          src2={product.src2}
          product_name={product.product_name}
          price={product.price}
          products_section_name={product.products_section_name}
        />
      ))}
    </div>
  );
}
