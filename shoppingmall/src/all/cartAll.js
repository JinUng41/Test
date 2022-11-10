import { Cart } from "../components/cart/cart";

const Cart = ({cart, setCart}) => {
    return (
        <Cart
            cart = {cart}
            setCart = {setCart}
        />
    );
};

export default Cart;