import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Start from "./components/start/start";
import MainAll from "./pages/mainAll";
import ProductAll from './pages/productAll';
import CartAll from './pages/cartAll';

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  const convertPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/main" element={
          <MainAll convertPrice={convertPrice} products={products} setProducts={setProducts}/>
        } />
      <Route 
        path="/product/:id" 
        element={
          <ProductAll convertPrice={convertPrice} cart={cart} setCart={setCart}/>
        } />
      <Route path="/cart" element={
            <CartAll cart={cart} setCart={setCart} convertPrice={convertPrice} />
          } />
    </Routes>
  ) 
}

export default App;


