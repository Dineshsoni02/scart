import "./App.css";
import { useState } from "react";
import Cart from "./components/cart/Cart";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import data from "./data";

function App() {
  const { products } = data;
  const [cartItems, setcartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setcartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setcartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setcartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setcartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Header countCartItems={cartItems.length}/>
      <div className="main_area">
        <Main products={products} onAdd={onAdd} />
        <Cart cartItems={cartItems} onRemove={onRemove} onAdd={onAdd} />
      </div>
    </div>
  );
}

export default App;
