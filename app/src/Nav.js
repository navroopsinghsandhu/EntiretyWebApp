import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav({token, setToken}) {
    const [ isLoggedIn, setIsLoggedIn] = useState(true)

    let logInFlag = false;
    if(typeof(token)  === "string" && token !== "false") {
        logInFlag = true
    }

    useEffect(() => {
        setIsLoggedIn(logInFlag)
    });
 
    const handleClick = () => {
        setIsLoggedIn(false)
        setToken(false)
    }

    return (

    <div>
        <nav className ="navbar background">
            <ul className="nav-list">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <li>Home</li>
                </Link>
                { !isLoggedIn ? <Link to="/login" style={{ textDecoration: 'none' }}>
                    <li>Login</li>
                </Link>: <li onClick={handleClick} >Logout</li> }
                { !isLoggedIn  ? <Link to="/register" style={{ textDecoration: 'none' }}>
                    <li>Register</li> </Link> : '' }
                
                <Link to="/products" style={{ textDecoration: 'none' }}>
                    <li>Products</li>
                </Link>
                { !isLoggedIn  ? <Link to="/register" style={{ textDecoration: 'none' }}>
                    <li>Register</li> </Link> : '' }
                <Link to="/addproducts" style={{ textDecoration: 'none' }}>
                    <li>Add Products</li>
                </Link>
                <Link to="/cart" style={{ textDecoration: 'none' }}>
                    <li>Cart</li>
                </Link>

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