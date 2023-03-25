import "./HeroStyles.css";
import React from 'react'
import { Link, useNavigate } from "react-router-dom";

function Hero(){
    return(<>
        <div className="hero">
            <div className="hero-text">
                <h1>Small steps for us, Big improvements for you!</h1>
                <p>Help is one click away</p>
                <Link to = "/login">
                    <button className="login-btn">LOGIN</button>
                </Link>

                <Link to = "/register">
                    <button className="register-btn">REGISTER</button>
                </Link>
            </div>
        </div>
    </>)
}

export default Hero;