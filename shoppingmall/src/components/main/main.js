import "./main.css"
import Header from "../header/header";
import {Product} from "../product/product";
import {useEffect} from "react";
import {getProducts} from "../../service/fetcher";
import axios from "axios";

export const Main = ({products, setProducts}) => {
    
    useEffect(() => {
        getProducts().then((data) => {
            setProducts(data.data.products)
        });
    }, []);

    return (
        <>
            <Header /> 
            <main>
             {products.map((product) => {
                return (
                    <Product 
                        key={`id:${product.id}`}
                        product={product}
                    />
                );
            })}
            </main>
        </>
    );
};

