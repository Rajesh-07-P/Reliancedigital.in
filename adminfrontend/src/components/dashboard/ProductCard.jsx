import React from 'react'
import style from '../../styles/ProductCard.module.css'
const ProductCard = () => {
    return (
        <div className={style.main1}>
            <div className={style.cmain1}>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjtPLAlnC8ziAEdTuLpTAlXPxExgV62ulhOw&usqp=CAU'} alt="" />
            </div>
            <div className={style.cmain2}>
                <p><b>Brand:</b> {`${'Samsung'}`}</p>
                <p><b>Title:</b> {`${'Samsung enna minna dikka it is respectful page'}`}</p>
                <p><b>Qty:</b> {`${'5'}`}</p>
                <p><b>Price:</b> {`${'200000'}`}</p>
                <p><b>Discount:</b> {`${'20'}%`}</p>
                 <button>Delete</button> 
            </div>
        </div>
    )
}

export default ProductCard