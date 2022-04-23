import React, {useState} from 'react';
import './App.css';
// import { Link } from 'react-router-dom';
// import UserPage from './UserPage';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

  

function Login() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    // User Login info
    // const database = [
    //   {
    //     username: "user1",
    //     password: "pass1"
    //   },
    //   {
    //     username: "user2",
    //     password: "pass2"
    //   }
    // ];

    // const navigate = useNavigate();


    let database;
    let fetchRes = fetch("http://127.0.0.1:8000/user");
    fetchRes.then(res =>
        res.json()).then(users => {
            console.log(users)
            database = users;
        })
  
    const errors = {
      uname: "invalid username",
      pass: "invalid password"
    };
  
    const handleSubmit = (event) => {
      //Prevent page reload
      event.preventDefault();
  
      var { uname, pass } = document.forms[0];
  
      // Find user login info
      const userData = database.find((user) => user.UserName === uname.value);
  
      // Compare user info
      if (userData) {
        if (userData.Password !== pass.value) {
          // Invalid password
          setErrorMessages({ name: "pass", message: errors.pass });
        } else {
          setIsSubmitted(true);
          // Redirect to User's home page with products list
        //   navigate('/user');
        }
      } else {
        // Username not found
        setErrorMessages({ name: "uname", message: errors.uname });
      }
    };
  
    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );
  
    // JSX code for login form
    const renderForm = (
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="uname" required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
            {renderErrorMessage("pass")}
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  
    return (
      <div className="app">
        <div className="login-form">
          <div className="title">Sign In</div>
          {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
          {/* {isSubmitted ? history.push('/user') : renderForm} */}
          {/* Create a User component that will have a logout button */}
        </div>
      </div>
    );
}

export default Login;