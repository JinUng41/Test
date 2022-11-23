import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Start from "./components/start/start";
import MainAll from "./pages/mainAll";
import ProductAll from './pages/productAll';

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/main" element={
          <MainAll products={products} setProducts={setProducts}/>
        } />
      <Route path="/product/:id" element={
          <ProductAll cart={cart} setCart={setCart}/>
        } />
    </Routes>
  ) 
}

export default App;


