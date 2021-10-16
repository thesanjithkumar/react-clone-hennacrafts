import "./CurrencyConverter.css";
import { useState } from "react";

export default function CurrencyConverter() {
  const [isActiveUSD, setisActiveUSD] = useState(true);
  const [isActiveCAD, setisActiveCAD] = useState(false);

  const ToggleUSD = () => {
    setisActiveUSD(true);
    setisActiveCAD(false);
  };

  const ToggleCAD = () => {
    setisActiveCAD(true);
    setisActiveUSD(false);
  };

  console.log(isActiveCAD, isActiveUSD);

  return (
    <div
      className="currency_converter_parent_div"
      id="currency_converter_parent_div"
    >
      <div className="currency_converter_div">
        <div className="heading" id="heading">
          <p className="heading_title">SELECT YOUR CURRENCY</p>
        </div>
        <div
          className={`currency ${isActiveUSD ? "active" : "black_background"}`}
          onClick={ToggleUSD}
        >
          <a href="#" className="title">
            USD <span className="us_span">UNITED STATES (US) DOLLARS</span>
          </a>
        </div>
        <div
          className={`currency ${isActiveCAD ? "active" : "black_background"}`}
          onClick={ToggleCAD}
        >
          <a href="#" className="title">
            CAD <span className="cad_span">CANADIAN DOLLAR</span>
          </a>
        </div>
      </div>
    </div>
  );
}
