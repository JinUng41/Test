import {Link} from "react-router-dom";
import "./start.css";

const Start = () => (
    <div className="container">
        <div className="h1_wrapper"><h1 className="title">Exception;</h1></div>
        <button className="shopNow"><Link to="main" style={{ textDecoration: 'none', color: 'white'}}><span className="button">Shop now</span></Link></button>
    </div>
);

export default Start;
