import { Fragment, useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
const [cartShown, setCartIsShown] = useState(false);

const ShowCartHandler = () => {
  setCartIsShown(true);
};

const HideCartHandler = () => {
  setCartIsShown(false);
};

  return (
    <Fragment>
      {cartShown && <Cart onClose={HideCartHandler}/>}
      <Header onShowCart ={ShowCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
