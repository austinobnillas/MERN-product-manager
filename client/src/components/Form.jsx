import React, {useState} from "react";
import axios from "axios";

const ProductForm = (props) => {
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products/add', 
            {title, price, description })
            .then((res) => {
                console.log(res.data);
                setTitle("");
                setPrice("");
                setDescription("");
            })
            .catch((err) => {console.log(err)})
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <h1>Product Manager</h1>
                </div>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input type="number" id="price" name="price" onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="desc">Description:</label>
                    <input type="text" id="desc" name="desc" onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Add" />
                </div>
            </form>
        </div>
    )
}
export default ProductForm;