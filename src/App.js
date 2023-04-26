import { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
const [cartShown, setCartIsShown] = useState(false);

const ShowCartHandler = () => {
  setCartIsShown(true);
};

const HideCartHandler = () => {
  setCartIsShown(false);
};

  return (
    <CartProvider>
      {cartShown && <Cart onClose={HideCartHandler}/>}
      <Header onShowCart ={ShowCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
