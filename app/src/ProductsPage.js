import React ,{useState, useEffect} from 'react';
import './ProductsPage.css';
import Footer from './Footer';
import Product from './Product';

function ProductsPage() {

    function createProduct(product) {
        return (
          <Product
            key={product.ProductId}
            ProductId={product.ProductId}
            ProductName={product.ProductName}
            ProductPrice={product.ProductPrice}
            ProductPhotoFileName={product.ProductPhotoFileName}
          />
        );
    }

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/products")
        .then((res) => res.json())
        .then((data) => {
            setData(data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);


    return (

    <div>
        
        <h1 className="heading">All Products</h1>
        {data.map(createProduct)}
        <Footer /> 
        
    </div>

    );
}

export default ProductsPage;





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