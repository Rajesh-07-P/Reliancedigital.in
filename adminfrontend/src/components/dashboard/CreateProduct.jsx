import React from 'react'
import style from '../../styles/CreateProduct.module.css'
import Navbarsection from './Navbar.section'
import Navbar2section from './Navbar2.section'

const CreateProduct = () => {
    return (
        <div>
            <Navbarsection />
            <Navbar2section />
            <div className={style.form}>
                <div>
                    <label htmlFor="title">Title</label><br />
                    <input type="text" placeholder='Product Title' required />
                </div>
                <div>
                    <label htmlFor="images">Images</label><br />
                    <input type="file" multiple />
                </div>
                <div>
                    <label htmlFor="brand">Brand</label><br />
                    <input type="text" placeholder='Product Brand' required />
                </div>
                <div>
                    <label htmlFor="quanity">Quantity</label><br />
                    <input type="number" placeholder='Product Quantity' required />
                </div>
                <div>
                    <label htmlFor="mrp">MRP</label><br />
                    <input type="number" placeholder='Product MRP' required />
                </div>
                <div>
                    <label htmlFor="discount">Discount</label><br />
                    <input type="number" placeholder='Product Discount' required />
                </div>
                <button>Add Products</button><br />
            </div>
        </div>
    )
}

export default CreateProduct