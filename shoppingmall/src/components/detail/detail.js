import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../service/fetcher";
import "./detail.css"
import Header from '../header/header';

export const Detail = ({ convertPrice, cart, setCart }) => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [count, setCount] = useState(1);

  // 상세페이지에서 물건 수량 조절
const handleQuantity = (type) => {
    if (type === "plus") {
        setCount(count + 1);
    } else {
        if (count === 1) return;
        setCount(count - 1);
    }
};

  // 장바구니에 중복된 물건을 담을 때 사용
const setQuantity = (id, quantity) => {
    const found = cart.filter((el) => el.id === id)[0];
    const idx = cart.indexOf(found);
    const cartItem = {
    id: product.id,
    image: product.image,
    name: product.name,
    quantity: quantity,
    price: product.price,
    provider: product.provider,
    detail: product.detail
    };
    setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)]);
};

const handleCart = () => {
    const cartItem = {
    id: product.id,
    image: product.image,
    name: product.name,
    quantity: count,
    price: product.price,
    detail: product.detail
    };
    const found = cart.find((el) => el.id === cartItem.id);
    if (found) setQuantity(cartItem.id, found.quantity + count);
    else setCart([...cart, cartItem]);
};

useEffect(() => {
    getProducts().then((data) => {
    setProduct(
        data.data.products.find((product) => product.id === parseInt(id))
    );
    });
}, [id, product.price]);

return (
    product && (
    <>
        <Header/>
        <div className="detail_div">
        <section className="detail_section">
            <div className="productImg">
            <img src={product.image} alt="product" />
            </div>
        </section>
        <section className="detail_section">
            <div className="productInfo">
            <p className="productName">{product.name}</p>
            <span className="price">
                {convertPrice(product.price + "")}
                KRW <span className="unit"></span>
                <br></br>
                <br></br>
                <div className="detail">
                {product.detail}
                </div>
            </span>
            </div>

            <div className="delivery">
            <p>택배배송 / 무료배송</p>
            </div>
            <div className="line"></div>
            <div className="amount">
                <img
                    className="minus"
                    src="/images/iconImage/minus.png"
                    alt="minus"
                    onClick={() => handleQuantity("minus")}
                />

                <div className="count">
                    <span>{count}</span>
                </div>

                <img
                    className="plus"
                    src="/images/iconImage/plus.png"
                    alt="plus"
                    onClick={() => handleQuantity("plus")}
                />
            </div>

            <div className="line"></div>

            <div className="sum">
            <div>
                <span className="sumPrice">총 상품 금액</span>
            </div>

            <div className="totalInfo">
                <span className="totalCount1">
                총 수량 <span className="totalCount2">{count}개</span>
                </span>
                <span className="totalPrice">
                  {convertPrice(product.price * count)}
                KRW<span className="totalUnit"></span>
                </span>
            </div>
            </div>

            <div className="btn">
            <button className="btnBuy">Buy Now!</button>
            <button
                className="btnCart"
                onClick={() => {
                handleCart();
                }}
            >
                Add To Cart
            </button>
            </div>
        </section>
        </div>
    </>
    )
    );
};
