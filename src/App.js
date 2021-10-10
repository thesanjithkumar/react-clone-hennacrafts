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
import Dashboard from "./pages/Dashboard";
import PrivacyandPolicy from "./pages/PrivacyandPolicy";
import TermsAndCondition from "./pages/TermsAndConditions";
import FAQ from "./pages/FaqFooter";
import Blog1 from "./components/ui/blogpage/Blog1";
import Blog2 from "./components/ui/blogpage/Blog2";
import Blog3 from "./components/ui/blogpage/Blog3";

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
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/privacy_policy">
            <PrivacyandPolicy />
          </Route>
          <Route path="/terms-and-conditions">
            <TermsAndCondition />
          </Route>
          <Route path="/FAQ">
            <FAQ />
          </Route>
          <Route path="/product_description">
            <ProductDescription />
          </Route>
          <Route path="/Blog1">
            <Blog1 />
          </Route>
          <Route path="/Blog2">
            <Blog2 />
          </Route>
          <Route path="/Blog3">
            <Blog3 />
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
