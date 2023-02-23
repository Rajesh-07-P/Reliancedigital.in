import React from 'react'
import RiseLoader from "react-spinners/RiseLoader";
import style  from "../styles/loader.module.css"
const WlcmLodr = () => {
    return (
        <div>
            <img src={process.env.PUBLIC_URL + '/assests/logo.png'} alt="Retail City Logo" className={style.logo} />
            <div className={style.loader}>
                <RiseLoader
                    color='#93CD59'
                    size={30}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
            <h1 className={style.head}>Welcome to RetailCity.com Admin Pannel</h1>

        </div>
    )
}

export default WlcmLodr