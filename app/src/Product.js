import React from 'react';

function Product(props) {

    function addToCart(){
        fetch("http://127.0.0.1:8000/productuser", {
              method: "POST",
              body: JSON.stringify({
                ProductId: props.ProductId,
                UserId: localStorage.getItem('token')  // Gets user id from local storage token
              }),
            });
    }

    return (

    <div>
        <div className="product">
            <div className="top">
                <img className="circle-img" src={props.ProductPhotoFileName} alt="product_img" />
                <h2 className="name">{props.ProductName}</h2>
            </div>
            <div className="bottom">
                <p className="info">Product Price ${props.ProductPrice}</p>
                {/* <p className="info">{props.key}</p>; */}

                <button onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    </div>

    );
}

export default Product;