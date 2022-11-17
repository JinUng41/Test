import "./main.css"
import {Fragment} from 'react';
import Header from "../header/header";
import {Product} from "../product/product";
import productList from "../../../public/products/products";

const Main = ({products, setProducts}) => {
    console.log(productList)
    return (
        <>
            <Header />
            {products.map((product) => {
                return (
                    <Product 
                        id={`id:${product.id}`}
                        product={product}
                    />
                );
            })}
        </>
    );
};

export default Main;