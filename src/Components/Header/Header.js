import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/Logo.svg"
import "./Header.css"
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/Shop">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/review">Review</Link>
                <Link to="/inventory">Inventory</Link>
            </div>
        </nav>
    );
};

export default Header;