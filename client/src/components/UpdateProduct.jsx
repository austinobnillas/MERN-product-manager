import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateForm = (props) => {
    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [oneProduct, setOneProduct] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
                setOneProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const submitHandler = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/products/edit/${id}`, {title, price, description })
                .then((res) => {console.log(res.data);})
                .catch((err) => {console.log(err)})
                navigate('/products')
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <h1>Edit {oneProduct.title}</h1>
                </div>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" 
                    id="title" 
                    name="title" 
                    onChange={(e) => setTitle(e.target.value)} 
                    value={title}/>
                </div>
                <div>
                    <label htmlFor="price">Price: $</label>
                    <input value={price} 
                    type="number" 
                    id="price" 
                    name="price" 
                    onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="desc">Description:</label>
                    <input value={description} 
                    type="text" 
                    id="desc" 
                    name="desc" 
                    onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Update" />
                </div>
            </form>
        </div>
    )
}
export default UpdateForm;