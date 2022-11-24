import { Main } from "../components/main/main";

const MainAll = ({convertPrice, products, setProducts}) => {
    return (
        <Main
            convertPrice = {convertPrice}
            products = {products}
            setProducts = {setProducts}
        />
    );
};

export default MainAll;