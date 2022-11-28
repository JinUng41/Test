import "./cart_header.css";

export const CartHeader = ({ isAllSelected, allSelected}) => {
    return (
        <>
            <div className="cart_title"><h1>Cart</h1></div>
            <div className="cart_tab">
                <input type="checkbox" checked={isAllSelected} onChange={(e) => allSelected(e.target.checked)} />
                <span>Product</span>
                <span>Quantity</span>
                <span>Price</span>
            </div>
        </>
    );
};