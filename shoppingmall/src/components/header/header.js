import "./header.css"
import { useEffect } from "react";
//import {Fragment} from 'react';
//import {Product} from "../product/product"
import { getProducts } from "../../service/fetcher";

const Header = ({convertMenu, products, setProducts}) => {
    const sortProduct = (type) => {
        if (type === "All") {
            const newProduct = [...products];
            setProducts(newProduct);
        } 
        else if (type === "Outer") {
            const newProduct = [...products];
            const result = newProduct.filter(product => product.category==="Outer")
            setProducts(result);
            console.log(result);
        } 
        else if (type === "Top") {
            const newProduct = [...products];
            const result = newProduct.filter(product => product.category==="Top")
            setProducts(result);
            console.log(result);

        } 
        else if (type === "Bottom") {
            const newProduct = [...products];
            const result = newProduct.filter(product => product.category==="Bottom")
            setProducts(result);
            console.log(result);

        } 
        else if (type === "Acc") {
            const newProduct = [...products];
            const result = newProduct.filter(product => product.category.includes("Acc"))
            setProducts(result);
            console.log(result);
            console.log(newProduct);
            console.log(...products);
        } 
     };

     useEffect(() => {
        getProducts().then((data) => {
          setProducts(data.data.products);
        });
      }, [setProducts]);

    return ( 
        <div className="menu_header">
            <div className="main_title">Exception;</div>
            <ul className="category">
                <li><span onClick={() => sortProduct("All")}>All</span></li>
                <li><span onClick={() => sortProduct("Outer")}>Outer</span></li>
                <li><span onClick={() => sortProduct("Top")}>Top</span></li>
                <li><span onClick={() => sortProduct("Bottom")}>Bottom</span></li>
                <li><span onClick={() => sortProduct("Acc")}>Acc</span></li>
            </ul>

            <ul className="personal">
                <li>Order</li>
                <li>Login</li>
            </ul>    
        </div>   
    );
};

export default Header;