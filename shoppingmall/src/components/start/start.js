import {Link} from "react-router-dom";
import {Fragment} from 'react';

import "./start.css";

const Start = () => (
    <Fragment className="start">
        <h1 className="title">Exception;</h1>
        <button className="shopNow"><Link to="main" style={{ textDecoration: 'none', color: 'white'}}><span className="button">Shop now</span></Link></button>
    </Fragment>
);

export default Start;
