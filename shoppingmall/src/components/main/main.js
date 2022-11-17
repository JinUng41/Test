import "./main.css"
import Header from "../header/header";
import {Product} from "../product/product";
import {useEffect} from "react";
import productList from "../../products/products";

const Main = ({products, setProducts}) => {
    const productslist = productList
    
    
    return (
        <>
            <Header />
            {productslist.map((product) => {
                return (
                    <Product 
                        key={`id:${product.id}`}
                        product={product}
                    />
                );
            })}
        </>
    );
};

export default Main;