import { Cart } from "../components/cart/cart";

const CartAll = ({ cart, setCart, convertPrice }) => {
    return <Cart cart={cart} setCart={setCart} convertPrice={convertPrice} />;
};

export default CartAll;