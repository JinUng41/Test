import { Link } from "react-router-dom";
import "./product.css"
export const Product = ({product}) => {
    const { id, name, price, image} = product;

    return ( product && (
        <div className="product">
            <Link to={`/product/${id}`}>
                <div className="productImg"><img src={image} /></div>
            </Link>
            <div className="productName">{name}</div>
            <div className="productPrice">{price}원</div>
        </div>
    ));
};