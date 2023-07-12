import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DisplayAll = (props) => {
    const {allProducts, setAllProducts} = props;
    useEffect(()=> {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {setAllProducts(res.data);})
            .catch((err) => console.log(err));
        }, [])
    return (
        <div>
            <h1>All Products</h1>
            {allProducts.map((product, index) => (
                <div key={index}>
                    <Link to={`/products/${product._id}`}>
                        {product.title}
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default DisplayAll;
