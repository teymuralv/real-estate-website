import "./Navbar.css"
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <div className="navbar">
            <p className="logo">Props</p>
            <div className="menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div>
                <ul id="pages">
                    <Link to="/home">
                        <li>Home</li>
                    </Link>

                    <Link to="/properties">
                        <li>Properties</li>
                    </Link>

                    <Link to="/services">
                        <li> Services</li>
                    </Link>

                    <Link to="/about">
                        <li>About</li>
                    </Link>

                    <Link to="/contact">
                        <li> Contact us</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}
export default Navbar;
