import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { TopNavigationBar } from "./components/header/topNavigationBar/topNavigationBar";
import Main from "./all/mainAll";
import Product from "./all/productAll";
import Cart from "./all/cartAll";

function App() {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  
  return (
    <BrowserRouter>
      <TopNavigationBar cart={cart} />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              product={product}
              setProduct={setProduct}
            />
          }
        />
        <Route
          path="/product/:id"
          element={
            <Product
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart 
              cart={cart} 
              setCart={setCart}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


