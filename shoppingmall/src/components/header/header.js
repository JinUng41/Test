import "./header.css"
import { useEffect } from "react";
//import {Fragment} from 'react';
//import {Product} from "../product/product"
import { getProducts } from "../../service/fetcher";

const Header = ({convertMenu, products, setProducts}) => {
    const sortProduct = (type) => {
        if (type === "All") {
        const newProduct = [...products];
        //newProduct.sort((a, b) => a.id - b.id); 
        setProducts(newProduct);
         } else if (type === "Outer") {
         const newProduct = [...products];
        //newProduct.sort((a, b) => a.price - b.price);
        newProduct.filter(products.category==="Outer")
         setProducts(newProduct);
         } else if (type === "Top") {
         const newProduct = [...products];
        //newProduct.sort((a, b) => b.price - a.price);
        newProduct.filter(products.category==="Top")
         setProducts(newProduct);
         } else if (type === "Bottom") {
         const newProduct = [...products];
        //newProduct.sort((a, b) => b.price - a.price);
        newProduct.filter(products.category==="Bottom")
         setProducts(newProduct);
         } else if (type === "Acc") {
         const newProduct = [...products];
         //newProduct.sort((a, b) => b.price - a.price);
         newProduct.filter(products.category==="Acc")
         setProducts(newProduct);
         } 
     };

     useEffect(() => {
        getProducts().then((data) => {
          setProducts(data.data.products);
        });
      }, [setProducts]);

    return (
    
        <div className="menu_header">
            <h1 id="main_title">Exception;</h1>

            <ul className="category">
                <li onClick={() => sortProduct("All")}>All</li>
                <li onClick={() => sortProduct("Outer")}>Outer</li>
                <li onClick={() => sortProduct("Top")}>Top</li>
                <li onClick={() => sortProduct("Bottom")}>Bottom</li>
                <li onClick={() => sortProduct("Acc")}>Acc</li> 
            </ul>

            <ul className="personal">
                <li className="cart">Cart</li>
                <li>Order</li>
                <li>Login</li>
            </ul>    
        </div>
    
    );
};

export default Header;