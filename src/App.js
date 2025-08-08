import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Product from "./Pages/Product/Product";
import Contact from "./Pages/Contact/Contact";
import ProductDescription from "./Pages/Product/ProductDescription";
import About from "./Pages/About/About";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Loader from "./Component/Loader/Loader";
import Dash from "./Pages/Dash/Dash";
import Products from "./Pages/Dash/Products/Products"
import Messages from "./Pages/Dash/Messages/Messages";
import Settings from "./Pages/Dash/Settings/Settings";

const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); // Simulate loading time
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/product" component={Product} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/productDescription" component={ProductDescription} />
          <Route path="/dashboard" component={Dashboard} />

          <Route path="/dash" component={Dash}/>
          <Route path="/dashproducts" component={Products  } />
          <Route path="/dashmessages" component={Messages} />
          <Route path="/settings" component={Settings} />
        </Switch>
      )}
    </>
  );
};

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
