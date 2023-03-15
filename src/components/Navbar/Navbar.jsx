import { Component } from "react";
import "./NavbarStyles.css";

class Navbar extends Component {
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Afterglow</h1>
                <ul className="nav-menu">
                        <li className="nav-links"><a href="/catalog">Catalog</a></li>
                        <li className="nav-links"><a href="/">About</a></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;