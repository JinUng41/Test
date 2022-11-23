import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
// import { TopNavigationBar } from "./components/header/topNavigationBar/topNavigationBar";
// import Main from "./all/mainAll";
// import Product from "./all/productAll";
// import Cart from "./all/cartAll";

import Start from "./components/start/start";
import Main from "./components/main/main";
import MainAll from "./pages/mainAll";

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/main" element={
        <MainAll products={products} setProducts={setProducts}/>
        } />
    </Routes>
  )
}

export default App;


