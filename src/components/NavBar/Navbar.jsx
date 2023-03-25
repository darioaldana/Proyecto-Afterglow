import { Component } from "react";
import "./NavbarStyles.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    return(<>
        <nav className="NavbarItems">
            <h1 className="navbar-logo">Afterglow</h1>
            <ul className="nav-menu">
                    <li>
                    <Link to = "/catalog">
                        <button className="nav-links">Catalog</button>
                    </Link>
                    <Link to="/about">
                        <button  className="nav-links">
                            About
                        </button>
                    </Link>
                    </li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar;