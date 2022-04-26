// import React from 'react';
// import React ,{useState, useEffect} from 'react';
import { useState } from 'React';



function Product(props) {

    // const [itemCount, setItemCount] = React.useState(1);
    const [buttonText, setButtonText] = useState(""); //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState

    const changeText = (text) => setButtonText(text);

    function addToCart(){

        
        console.log();
        fetch("http://127.0.0.1:8000/productuser/", {
              method: "POST",
              body: JSON.stringify({
                ProductId: props.ProductId,
                UserId: localStorage.getItem('token')  // Gets user id from local storage token
              }),
            });

            //Change Add to cart button to Product Added to Cart

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

                <button className="add_to_cart_btn" onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
        {/* If button is clicked, then render
        <Cart /> */}
        {/* <div>
        <Badge color="secondary" badgeContent={itemCount}>
          <ShoppingCartIcon />{" "}
        </Badge>
        <ButtonGroup>
          <Button
            onClick={() => {
              setItemCount(Math.max(itemCount - 1, 0));
            }}
          >
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            onClick={() => {
              setItemCount(itemCount + 1);
            }}
          >
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>*/}

    </div>
    );
}

export default Product;