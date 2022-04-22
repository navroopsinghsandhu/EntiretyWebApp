// import React from 'react';
import React, {useState} from 'react';
import './Form.css';

function Register() {
  return (

        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="firstName">First Name </label>
                    <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
                </div>
                <div className="lastname">
                    <label className="form__label" for="lastName">Last Name </label>
                    <input  type="text" name="" id="lastName"  className="form__input"placeholder="Last Name"/>
                </div>
                <div className="username">
                    <label className="form__label" for="userName">Userame </label>
                    <input className="form__input" type="text" id="userName" placeholder="Username"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" placeholder="Password"/>
                </div>
                {/* <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
                </div> */}
            </div>
            <div className="footer">
                <button type="submit" class="btn">Register</button>
            </div>
        </div>      


  );
}

export default Register;