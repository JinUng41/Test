import styles from "./cart.css";
import { useState } from "react";
import { CartHeader } from "./cart_header/cart_header";
import { CartList } from "./cart_list/cart_list";
import { CartTotal } from "./cart_total/cart_total";

export const Cart = ({ cart, setCart, convertPrice }) => {
  const [total, setTotal] = useState(0);
  const [selectedList, setSelectedList] = useState([]);
  const isAllSelected =
    cart.length === selectedList.length && selectedList.length !== 0;

  const checked = selectedList.map((selectList) =>
    cart.filter((el) => el.id === parseInt(selectList))
  );

  const countQuantity = (type, id, quantity) => {
    const checked = cart.filter((el) => el.id === id)[0];
    const idx = cart.indexOf(checked);

    if (type === "plus") {
      const cartItem = {
        id: checked.id,
        image: checked.image,
        name: checked.name,
        quantity: quantity,
        price: checked.price,
        provider: checked.provider,
      };
      setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)]);
    } else {
      if (quantity === 0) return;
      const cartItem = {
        id: checked.id,
        image: checked.image,
        name: checked.name,
        quantity: quantity,
        price: checked.price,
        provider: checked.provider,
      };
      setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)]);
    }
  };

  const removeCart = (id) => {
    setCart(cart.filter((cart) => cart.id !== id));
    setSelectedList(selectedList.filter((check) => parseInt(check) !== id));
  };

  const setProductList = (selected, id) => {
    if (selected) {
        setSelectedList([...selectedList, id]);
    } else {
        setSelectedList(selectedList.filter((check) => check !== id));
    }
  };

  const allSelected = (selected) => {
    if (selected) {
      const selectedItems = [];
      cart.map((cart) => selectedItems.push(`${cart.id}`));
      setSelectedList(selectedItems);
    } else {
        setSelectedList([]);
    }
  };

  return (
    <>
      <CartHeader isAllSelected={isAllSelected} allSelected={allSelected} />
      {cart.length !== 0 ? (
        cart.map((cart) => {
          return (
            <CartList
              key={`key-${cart.id}`}
              cart={cart}
              setCart={setCart}
              convertPrice={convertPrice}
              countQuantity={countQuantity}
              removeCart={removeCart}
              setProductList={setProductList}
              selectedList={selectedList}
            />
          );
        })
      ) : (
        <div className={styles.not}>
          <h2>장바구니에 담긴 상품이 없습니다.</h2>
          <p>원하는 상품을 장바구니에 담아보세요!</p>
        </div>
      )}
      {cart.length !== 0 ? (
        <CartTotal
          cart={cart}
          total={total}
          setTotal={setTotal}
          convertPrice={convertPrice}
          checked={checked}
        />
      ) : (
        ""
      )}
    </>
  );
};
