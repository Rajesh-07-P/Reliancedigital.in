import React from 'react'
import style from '../../styles/ProductCard.module.css'
const ProductCard = ({brand,price,discount,images,title,qty}) => {
    return (
        <div className={style.main1}>
            <div className={style.cmain1}>
                <img src={images} alt="" />
            </div>
            <div className={style.cmain2}>
                <p><b>Brand:</b> {`${brand}`}</p>
                <p><b>Title:</b> {`${title}`}</p>
                <p><b>Qty:</b> {`${qty}`}</p>
                <p><b>Price:</b> {`${price}`}</p>
                <p><b>Discount:</b> {`${discount}%`}</p>
            </div>
        </div>
    )
}

export default ProductCard