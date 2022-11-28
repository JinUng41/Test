import "./cart_header.css";
import Header from '../../header/header';

export const CartHeader = ({ isAllSelected, allSelected}) => {
    return (
        <>
            <div className="cart_tab">
                <div className="checkbox_wrapper">
                    <input className="cart_checkbox" type="checkbox" checked={isAllSelected} onChange={(e) => allSelected(e.target.checked)} />
                </div>
                <h1 className="cart_title">My Cart</h1>
            </div>
        </>
    );
};