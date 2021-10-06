import React from "react";
import logo from "../images/logo.png";

function Header() {
    return(
        <header className="header">
            <div className="container">
                <img src={logo} alt="" className="header-logo"/>
            </div>
        </header>
    )
}

export default Header;