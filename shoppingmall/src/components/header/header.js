import "./header.css"
import {Fragment} from 'react';

const Header = () => (
    <Fragment className="header">
    
    <h1 id="main_title">Exception;</h1>
        <ul className="menu_header">
            <ul className="category">
                <li>All</li>
                <li>Outer</li>
                <li>Top</li>
                <li>Bottom</li>
                <li>Acc</li>
            </ul>

            <ul className="personal">
                <li>Order</li>
                <li>Login</li>
            </ul>
        </ul>
        

    
    </Fragment>
);

export default Header;