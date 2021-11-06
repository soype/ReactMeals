import React, { useState } from "react";
import "./App.css";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {

  const [cartOn, setCartOn] = useState(false);

  const showCartHandler = () =>{
    setCartOn(true);
  }

  const hideCartHandler = () =>{
    setCartOn(false);
  }

  return (
    <CartProvider>
      {cartOn && <Cart onClose={hideCartHandler}></Cart>}
      <Header onShowCart={showCartHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
