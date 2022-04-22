// import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Home from './Home';
import Nav from './Nav';
import Register from './Register';
// import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <Router>
    <div className="App"> 
        <Nav />

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            {/* <Home />
            <Register />
            <Login /> */}
        </Routes>

         
    </div>
    </Router>
  );
}

export default App;
