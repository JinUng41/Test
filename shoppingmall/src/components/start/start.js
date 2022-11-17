import {Link} from "react-router-dom";
import "./start.css";

const Start = () => (
    <>
        <h1 className="title">Exception;</h1>
        <button className="shopNow"><Link to="main" style={{ textDecoration: 'none', color: 'white'}}><span className="button">Shop now</span></Link></button>
    </>
);

export default Start;
