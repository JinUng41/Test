import { Detail } from "../components/detail/detail";

const Product = ({cart, setCart}) => {
    return (
    <Detail
        cart = {cart}
        setCart = {setCart}

    />);
};

export default Product;