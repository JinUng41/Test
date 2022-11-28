import "./header.css"
import { useEffect } from "react";
//import {Fragment} from 'react';
//import {Product} from "../product/product"
import { getProducts } from "../../service/fetcher";
import { Link } from 'react-router-dom';

const Header = ({products, setProducts}) => {
    var newProduct=[];
    getProducts().then((data) => {
        newProduct = (data.data.products);
    });
    // let newProduct = [...products];
    let result;
    console.log(newProduct);
    let sortProduct = (type) => {


        switch(type){
            case "All":
                setProducts(newProduct);
                break;
            case "Outer":
                result = newProduct.filter(product => product.category==="Outer")
                setProducts(result);
                break;
            case "Top":
                result = newProduct.filter(product => product.category==="Top")
                setProducts(result);
                break;
            case "Bottom":
                result = newProduct.filter(product => product.category==="Bottom")
                setProducts(result);
                break;
            case "Acc":
                result = newProduct.filter(product => product.category.includes("Acc"))
                setProducts(result);
                break;
        }

//
        // if (type === "All") {
        //     setProducts(newProduct);
        // } 
        // else if (type === "Outer") {
        //     setProducts(newProduct);
        //     result = newProduct.filter(product => product.category==="Outer")
        //     setProducts(result);
        //     console.log(result);
        //     console.log(newProduct);
        // } 
        // else if (type === "Top") {
        //     setProducts(newProduct);
        //     result = newProduct.filter(product => product.category==="Top")
        //     setProducts(result);
        //     console.log(result);
        //     console.log(newProduct);
        // } 
        // else if (type === "Bottom") {
        //     setProducts(newProduct);
        //     result = newProduct.filter(product => product.category==="Bottom")
        //     setProducts(result);
        //     console.log(result);
        //     console.log(newProduct);
        // } 
        // else if (type === "Acc") {
        //     setProducts(newProduct);
        //     result = newProduct.filter(product => product.category.includes("Acc"))
        //     setProducts(result);
        //     console.log(result);
        //     console.log(newProduct);
        //     console.log(...products);
        // } 
    };

    useEffect(() => {
        getProducts().then((data) => {
        setProducts(data.data.products);
        });
    }, [setProducts]);

    return ( 
        <div className="menu_header">
            <Link to={`/main`}>
            <div className="main_title" onClick={() => sortProduct("All")}>Exception;</div>
            </Link>
            <ul className="category">
                <Link to={`/main`}>
                <li><span onClick={() => sortProduct("All")}>All</span></li>
                </Link>
                <li><span onClick={() => sortProduct("Outer")}>Outer</span></li>
                <li><span onClick={() => sortProduct("Top")}>Top</span></li>
                <li><span onClick={() => sortProduct("Bottom")}>Bottom</span></li>
                <li><span onClick={() => sortProduct("Acc")}>Acc</span></li>
            </ul>

            <ul className="personal">
                <li>Cart</li>
                <li>Order</li>
                <li>Login</li>
            </ul>    
        </div>   
    );
};

export default Header;