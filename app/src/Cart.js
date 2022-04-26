import React from 'react';
import './Cart.css';
import {useState, useEffect} from 'react';

// Will take in Product name and price
function Cart(props) {

    function generateCartItem(product) {
        return (
            <div className="top-cart">

            {/****** THIS PART WILL REPEAT FOR EACH DIFFERENT PRODUCT **************/}
                <p className="p_name">{product.ProductName}</p>
                <button className='add_button'> - </button>
                <button className='remove_button'> + </button>
                <p className="p_price">${product.ProductPrice}</p>
            {/***********************************************************************/}
                
            </div>
        );
    }

    // const database = [
    //     {
    //         ProductId: 1,
    //         ProductName: "Highlighters",
    //         ProductPrice: 25,
    //         ProductPhotoFileName: "https://static-01.daraz.com.bd/p/bb5372d830a4647f86d9e332b32ec710.jpg"
    //     },
    //     {
    //         ProductId: 2,
    //         ProductName: "Notebooks",
    //         ProductPrice: 20,
    //         ProductPhotoFileName: "https://w7.pngwing.com/pngs/537/490/png-transparent-notebook-pen-%D0%91%D0%BB%D0%BE%D0%BA%D0%BD%D0%BE%D1%82-stationery-notebook-miscellaneous-pencil-file-folders-thumbnail.png"
    //     }
    // ];

    // Get the cart data from backend for each user...
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/productuser/" + localStorage.getItem('token'))
        .then((res) => res.json())
        .then((data) => {
            let cartProducts = []
            for (const [key, value] of Object.entries(data)) {
                console.log(value[0]);
                cartProducts.push(value[0])
              }
            setData(cartProducts);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    return (

    <div>
        <div className="cart">
            <h2 className="cart_header">Cart Items</h2>
            {data.map(generateCartItem)}
            {/* <div className="total_price_section"> */}
            <p className="total_price_section">Total Price = 50</p>
            {/* </div> */}
            <div className="bottom-cart">
                <button className='checkout_btn'>Checkout</button>
            </div>
        </div>
        {/* <Footer /> */}
    </div>

    );
}

export default Cart;