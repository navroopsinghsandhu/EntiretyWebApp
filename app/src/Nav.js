import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (

    <div>
        <nav className ="navbar background">
            <ul className="nav-list">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <Link to="/">
                    <li><a href="#home">Home</a></li>
                </Link>
                <Link to="/login">
                    <li><a href="#login">Login</a></li>
                </Link>
                <Link to="/register">
                    <li><a href="#register">Register</a></li>
                </Link>
                {/* <Link to="/cart">
                    <li><a href="#cart">Cart</a></li>
                </Link> */}
            </ul>
    
            <div className="rightNav">
                <input type="text" placeholder="Search for products..."name="search" id="search"/>
                <button className="btn btn-sm" type="submit"><i className="fa fa-search"></i></button>
                {/* <button className="btn btn-sm">Search</button> */}
            </div>
        </nav>
    </div>

  );
}

export default Nav;