import logo from './product_images/startup_logo.jpeg';
import React, {useState, useEffect} from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Nav({token, setToken}) {
    const [ isLoggedIn, setIsLoggedIn] = useState(true)
    const [ role, setRole] = useState("customer")
    let logInFlag = false;
    if(typeof(token)  == "string" && token != "false") {
        logInFlag = true
    }

    useEffect(() => {
        setIsLoggedIn(logInFlag)
        setRole(localStorage.getItem("role"))
    });
 
    const handleClick = () => {
        setIsLoggedIn(false)
        setToken(false)
        localStorage.clear();
        navigate(`/`);
    }
    const navigate = useNavigate();

    return (

    <div>
        <nav className ="navbar background">
            <ul className="nav-list">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                { !isLoggedIn ? <Link to="/login" style={{ textDecoration: 'none' }}>
                    <li>Login</li>
                </Link> : <li><img className="circle-img" src={require('./product_images/human.png')} /><h1 style={{color: "black"}}>{ localStorage.getItem('name')}</h1></li>}
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <li>Home</li>
                </Link>
                { !isLoggedIn  ? <Link to="/register" style={{ textDecoration: 'none' }}>
                    <li>Register</li> </Link>: '' }
                <Link to="/products" style={{ textDecoration: 'none' }}>
                    <li>Products</li>
                </Link>

                 {isLoggedIn && role == 'manager' ? <Link to="/addproducts" style={{ textDecoration: 'none' }}>
                    <li>Add Products</li>  </Link>: ''}
                
                {role == 'customer' ? <Link to="/cart" style={{ textDecoration: 'none' }}>
                    <li>Cart</li></Link> : ''}
                { !isLoggedIn ? "": <li onClick={handleClick} >Logout</li> }
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