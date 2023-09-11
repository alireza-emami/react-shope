import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Commponents/HomePage";
import Header from "./Commponents/Header";

export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

const App = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(
    JSON.parse(localStorage.getItem("cartItems") || "[]")
  );

  function addToCart(item: CartItem) {
    const newCartItems = [...cartItems, item];
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  }

  return (
    <>
      <Router>
        <Header cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<HomePage addToCart={addToCart} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
