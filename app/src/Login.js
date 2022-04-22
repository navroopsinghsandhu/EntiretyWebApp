import React from 'react';
import './App.css';

function Login() {
  return (

    <div className="form">
        <div className="form-body">
            <div className="username">
                <label className="form__label" for="firstName">Userame </label>
                <input className="form__input" type="text" id="firstName" placeholder="Enter Username"/>
            </div>
            <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" placeholder="Enter Password"/>
            </div>
        </div>
        <div className="footer">
            <button type="submit" class="btn">Login</button>
        </div>
    </div>

  );
}

export default Login;