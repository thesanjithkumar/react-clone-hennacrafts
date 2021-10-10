import "./App.css";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import AccountPage from "./pages/AccountPage";
import CartPage from "./pages/CartPage";
import ProductDescription from "./components/shop_page/Product_Description/ProductDescription";

import ChatModal from "../src/components/ui/ChatModal/ChatModal";
import CurrencyConverter from "../src/components/ui/CurrencyConverter/CurrencyConverter";
import PrivacyandPolicy from "./pages/PrivacyandPolicy";
import TermsAndCondition from "./pages/TermsAndConditions";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/shop">
            <ShopPage />
          </Route>
          <Route path="/blog">
            <BlogPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/account">
            <AccountPage />
          </Route>
          <Route path="/cart">
            <CartPage />
          </Route>
          <Route path="/privacy_policy">
            <PrivacyandPolicy />
          </Route>
          <Route path="/terms-and-conditions">
            <TermsAndCondition />
          </Route>
          <Route path="/FAQ">
            <FAQ />
          <Route path='/product_description'>
            <ProductDescription/>
          </Route>
        </Switch>
        {/* chat modal */}
        <ChatModal />
        {/* chat modal */}
        <CurrencyConverter />
      </Layout>
    </div>
  );
}

export default App;
