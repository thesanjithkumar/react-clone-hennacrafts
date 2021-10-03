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
import { useState } from "react";

//imports img
import { SiMessenger } from "react-icons/si";
import messenger_icon from "../src/components/ui/homepage/img/messenger_icon.png";
import horizontal_dots from "../src/components/ui/homepage/img/horizontal_dots.png";
import hyphen from "../src/components/ui/homepage/img/hyphen.png";
import ChatModal from "../src/components/ui/homepage/ChatModal/ChatModal";

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
        </Switch>
        {/* chat modal */}
        <ChatModal />

        {/* chat modal */}
      </Layout>
    </div>
  );
}

export default App;
