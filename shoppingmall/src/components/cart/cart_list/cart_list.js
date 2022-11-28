import "./cart_list.css"

export const CartList = ({cart,convertPrice,selectedList,countQuantity,removeCart,setProductList,}) => {
    return (
      <section className="cart_product_list">
        <input
          type="checkbox"
          id={cart.id}
          onChange={(e) => {
            setProductList(e.currentTarget.checked, `${cart.id}`);
          }}
          checked={selectedList.includes(`${cart.id}`) ? true : false}
        />
        <div className="cart_product_wrap">
          <div className="cart_product_image">
            <img src={cart.image} alt="product-img" />
          </div>
  
          <div className="cart_product_info">
            <p className="seller_store">{cart.provider}</p>
            <p className="product_name">{cart.name}</p>
            <p className="price">{convertPrice(cart.price)}원</p>
            <p className="delivery">택배배송 / 무료배송</p>
          </div>
        </div>
  
        <div className="cart_product_count">
          <img
            className="minus"
            src="/images/iconImage/minus.png"
            alt="minus"
            onClick={() => {
              countQuantity("minus", cart.id, cart.quantity - 1);
            }}
          />
  
          <div className="count">
            <span>{cart.quantity}</span>
          </div>
          <img
            className="plus"
            src="/images/iconImage/plus.png"
            alt="plus"
            onClick={() => countQuantity("plus", cart.id, cart.quantity + 1)}
          />
        </div>
  
        <div className="cart_product_price">
        <p className="total_price"></p>
          <button className="btn_submit">주문하기</button>
        </div>
  
        <div
          className="product_remove"
          onClick={() => removeCart(cart.id)}
        >
          <img className="delete" src="/images/iconImage/x.png" alt="delete" />
        </div>
      </section>
    );
  };
  