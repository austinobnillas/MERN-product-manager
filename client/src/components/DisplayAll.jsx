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

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
            .then((res) => {
                console.log(res.data);
                const newList = allProducts.filter((product, index) => product._id !== id)
                setAllProducts(newList);
            })
            .catch(err => {console.log(err)})
    }
    return (
        <div>
            <h1>All Products</h1>
            {allProducts.map((product, index) => (
                <div key={index} > 
                    <div style={{display: "inline-block", padding: "5px"}}>
                        <Link style={{padding: "5px"}} to={`/products/${product._id}`}>{product.title}</Link>
                        <Link style={{padding: "5px"}} to={`/products/edit/${product._id}`}>Edit</Link>
                        <button onClick={() => deleteHandler(product._id)}>Delete</button>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default DisplayAll;
