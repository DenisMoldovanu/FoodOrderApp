import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";


function App() {

  const [cartIsSown, setCartIsShown] =useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }
  
  const hideCartHandler = () => {
    setCartIsShown(false);
  }
  return (
    <Fragment>
      {cartIsSown && <Cart onClose ={hideCartHandler}/>}
      <Header onShowCartHandler ={showCartHandler} onHideCartHandler= {hideCartHandler} />
      <main>
      <Meals/>
      </main>
    </Fragment>

  );
}

export default App;
