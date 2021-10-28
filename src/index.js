import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import {ProductFilterContextProvider} from './components/shop_page/ProductFilterContext'

ReactDOM.render(
  <ProductFilterContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ProductFilterContextProvider>,
  document.getElementById("root")
);
