// import "./cart_total.css";
import { useEffect } from "react";

export const CartTotal = ({ total, setTotal, cart, convertPrice, checked }) => {
  useEffect(() => {
    if (checked) {
      const temp = checked.filter((item) => item.length !== 0);
      const sum = temp.map((item) => item[0].price * item[0].quantity);
      const reducer = (acc, cur) => acc + cur;
      if (sum.length === 0) {
        setTotal(0);
        return;
      }
      const itemTotal = sum.reduce(reducer);
      setTotal(itemTotal);
    } else {
      setTotal(0);
    }
  }, [cart, total, checked, setTotal]);

  return (
    <div className="total">
      <div className="total_price">
        <p className="cart_product_total_price">총 상품금액</p>
        <p className="cart_product_price">{convertPrice(total)}원</p>
      </div>
      <div className="pay_minus">
        <img src="/images/iconImage/minus.png" alt="minus" />
      </div>
      <div className="sale">
        <p className="cart_product_sale">상품 할인</p>
        <p className="cart_product_sale_price">0원</p>
      </div>
      <div className="pay_plus">
        <img src="/images/iconImage/plus.png" alt="plus" />
      </div>
      <div className="delivery">
        <p className="cart_product_delivery">배송비</p>
        <p className="cart_product_delivery_price">0원</p>
      </div>

      <div className="payment">
        <p className="cart_prouct_payment">결제 예정 금액</p>
        <p className="cart_prouct_payment_price">
          {convertPrice(total)}원
        </p>
      </div>
    </div>
  );
};
