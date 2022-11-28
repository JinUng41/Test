import "./cart_total.css";
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
    <div className="totalANDamount">
      <div className="total_price">
        <p className="cart_product_total_price">All amounts</p>
        <p className="cart_product_price">{convertPrice(total)} won</p>
      </div>
    
    </div>
  );
};
