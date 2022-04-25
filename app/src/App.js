// import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Home from './Home';
import Nav from './Nav';
import Register from './Register';
import UserPage from './UserPage';
import ProductsPage from './ProductsPage';
import AddProductsPage from './AddProductsPage';
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
            <Route path="/products" element={<ProductsPage/>} />
            <Route path="/addproducts" element={<AddProductsPage/>} />
            <Route path="/user" element={<UserPage/>} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
