import { Main } from "../components/main/main";

const MainAll = ({products, setProducts}) => {
    return (
        <Main
            products = {products}
            setProducts = {setProducts}
        />
    );
};

export default MainAll;