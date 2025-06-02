import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {

    const [menu, setMenu] = useState(false);

    return (
        <>
            <div className="header">
                <img src="car.png" alt="" srcSet="" />
                <div className="links">
                    <a href="#home">Home</a>
                    <a href="#aboutus">About Us</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#inquery">Inquery</a>
                    <Link to="/login">Log In</Link>
                </div>
                <div className="hide-links" onClick={() => setMenu(!menu)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                {
                    menu ? <div className="hidden-menu">
                        <a href="#home">Home</a>
                        <a href="#aboutus">About Us</a>
                        <a href="#pricing">Pricing</a>
                        <a href="#inquery">Inquery</a>
                        <Link to="/login">Log In</Link>
                    </div> : <></>
                }
            </div>
        </>
    );
}

export default Header;