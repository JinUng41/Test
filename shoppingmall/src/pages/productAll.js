import { Detail } from "../components/detail/detail";

const ProductAll = ({convertPrice, cart, setCart}) => {
    return <Detail convertPrice={convertPrice} cart = {cart} setCart = {setCart} />
};

export default ProductAll;