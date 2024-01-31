import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import classes from './App.module.css'
import Checkout from "./components/Checkout/Checkout";
import { ProductProvider } from "./contexts/ProductContext";
import { CartProvider } from "./contexts/CartContext";
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
const AppWrapper = () => {
  let routes = useRoutes([
    { path: "/", element: <Main /> },
    { path: "/checkout", element: <Checkout /> },
    // ...
  ]);
  return routes;
};
const App = () => {
  return (
    <div className={classes.AppContainer}>
      <CartProvider>
        <ProductProvider>
          <Header/>
          <Router>
            <AppWrapper />
        </Router>
      </ProductProvider>
    </CartProvider>
    </div>
  );
};

export default App;