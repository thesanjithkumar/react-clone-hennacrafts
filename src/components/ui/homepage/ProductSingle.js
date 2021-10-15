import "./ProductsSection.css";
import { useState } from "react";

export default function ProductSingle(props) {
  const [isHover, setHover] = useState(false);
  function hover() {
    setHover(true);
  }

  function unhover() {
    setHover(false);
  }
  return (
    <a href="">
      <div className="product_card">
        <img
          id="product_indigo2"
          onMouseEnter={hover}
          onMouseLeave={unhover}
          className="product_image"
          src={isHover ? props.src2 : props.src1}
        />
        <p>{props.products_section_name}</p>
        <h3 className="product_name">{props.product_name}</h3>
        <p className="product_price">{props.price}</p>
      </div>
    </a>
  );
}
