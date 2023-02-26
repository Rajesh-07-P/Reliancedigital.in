import React, { useState } from 'react'
import style from '../../styles/CreateProduct.module.css'
import Navbarsection from './Navbar.section'
import Navbar2section from './Navbar2.section'

const CreateProduct = () => {
    const [title, setTitle] = useState('')
    const [images, setImages] = useState([])
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [quanity, setQuantity] = useState(0)
    const [mrp, setMrp] = useState(0)
    const [price, setPrice] = useState(0)
    const [discount, setDiscount] = useState(0)

    const handleSubmit = () => {
        const payload = { title, category, images, brand, quanity, mrp, price, discount }
        // console.log(payload)
        fetch("http://localhost:4500/products/addproduct",
            {
                method: "POST",
                body: JSON.stringify(payload),
                headers: { 
                    "Content-type": "application/json",
                    Authorization: localStorage.getItem("token"),
             }
            }).then(res => res.json())
            .then((res) => {
                console.log(res);
                localStorage.getItem("token", res.token);
            })
            .catch(err => console.log(err))

    }

    return (
        <div>
            <Navbarsection />
            <Navbar2section />
            <div className={style.form}>
                <div>
                    <label htmlFor="title">Title</label><br />
                    <input type="text" placeholder='Product Title' required onChange={(e) => setTitle([...e, e.target.value])} />
                </div>
                <div>
                    <label htmlFor="images">Images</label><br />
                    <input type="text" multiple onChange={(e) => setImages([...e, e.target.value])} />
                </div>
                <div>
                    <label htmlFor="category">Category</label><br />
                    <input type="text" placeholder='Product Category' required onChange={(e) => setCategory([...e, e.target.value])} />
                </div>
                <div>
                    <label htmlFor="brand">Brand</label><br />
                    <input type="text" placeholder='Product Brand' required onChange={(e) => setBrand([...e, e.target.value])} />
                </div>
                <div>
                    <label htmlFor="quanity">Quantity</label><br />
                    <input type="number" placeholder='Product Quantity' required onChange={(e) => setQuantity([...e, e.target.value])} />
                </div>
                <div>
                    <label htmlFor="mrp">MRP</label><br />
                    <input type="number" placeholder='Product MRP' required onChange={(e) => setMrp([...e, e.target.value])} />
                </div>
                <div>
                    <label htmlFor="price">Price</label><br />
                    <input type="number" placeholder='Product Price' required onChange={(e) => setPrice([...e, e.target.value])} />
                </div>
                <div>
                    <label htmlFor="discount">Discount</label><br />
                    <input type="number" placeholder='Product Discount' required onChange={(e) => setDiscount([...e, e.target.value])} />
                </div>
                <button onClick={handleSubmit}>Add Products</button><br />
            </div>
        </div>
    )
}

export default CreateProduct