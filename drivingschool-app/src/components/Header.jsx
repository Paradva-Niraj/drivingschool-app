import { useState } from "react";

function Header() {

    const [menu, setMenu] = useState(false);

    return (
        <>
            <div className="header">
                <img src="Screenshot_2025-05-31_153318-removebg-preview.png" alt="" srcset="" />
                <div className="links">
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Pricing</a>
                    <a href="#">Inquery</a>
                    <a href="#">Log In</a>
                </div>
                <div className="hide-links" onClick={() => setMenu(!menu)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                {
                    menu ? <div className="hidden-menu">
                        <a href="#">Home</a>
                        <a href="#">About Us</a>
                        <a href="#">Pricing</a>
                        <a href="#">Inquery</a>
                        <a href="#">Log In</a>
                    </div> : <></>
                }
            </div>
        </>
    );
}

export default Header;