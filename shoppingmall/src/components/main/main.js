import "./main.css"
import {Fragment} from 'react';

const Main = () => (
    <Fragment className="main">
    <nav className="menubar">
        <ul className="menu_header">

            <ul className="category">
                <li>All</li>
                <li>Outer</li>
                <li>Top</li>
                <li>Bottom</li>
                <li>Acc</li>
            </ul>

            <ul className="main_title">
                <li>Exception;</li>
            </ul>

            <ul className="personal">
                <li>Order</li>
                <li>Login</li>
            </ul>
        </ul>
    </nav>
    </Fragment>
);

export default Main;