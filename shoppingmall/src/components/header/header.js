import "./header.css"
import {Fragment} from 'react';
import {Product} from "../product/product"

<<<<<<< Updated upstream
const Header = ({convertMenu, products, setProducts}) => {
    const sortProduct = (type) => {
        if (type === "All") {
        const newProduct = [...products];
        newProduct.sort((a, b) => a.id - b.id);
        setProducts(newProduct);
        } else if (type === "Outer") {
        const newProduct = [...products];
        newProduct.sort((a, b) => a.price - b.price);
        setProducts(newProduct);
        } else if (type === "Top") {
        const newProduct = [...products];
        newProduct.sort((a, b) => b.price - a.price);
        setProducts(newProduct);
        } else if (type === "Bottom") {
        const newProduct = [...products];
        newProduct.sort((a, b) => b.price - a.price);
        setProducts(newProduct);
        } else if (type === "Acc") {
        const newProduct = [...products];
        newProduct.sort((a, b) => b.price - a.price);
        setProducts(newProduct);
        } 
    };

    return (
    <>
    <div className="header">
=======
const Header = () => (
    <>
>>>>>>> Stashed changes
    
    <h1 id="main_title">Exception;</h1>
        <ul className="menu_header">
            <ul className="category">
                <li onClick={() => sortProduct("All")}>All</li>
                <li onClick={() => sortProduct("Outer")}>Outer</li>
                <li onClick={() => sortProduct("Top")}>Top</li>
                <li onClick={() => sortProduct("Bottom")}>Bottom</li>
                <li onClick={() => sortProduct("Acc")}>Acc</li>
            </ul>

            <ul className="personal">
                <li>Order</li>
                <li>Login</li>
            </ul>
        </ul>
        

    
<<<<<<< Updated upstream
    </div>
    </>
    );
};
=======
    </>
);
>>>>>>> Stashed changes

export default Header;