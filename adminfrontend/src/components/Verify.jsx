import React, { useState } from 'react'
import styles from '../styles/Verify.module.css'

const Verify = () => {
    const [verify, setVerify] = useState(false)
    return (
        <div>
            <img src={process.env.PUBLIC_URL + '/assests/logo.png'} alt="Retail City Logo" className={styles.logo} />
            <h1 className={styles.head}>Email Verification</h1>
            <div className={styles.form}>
                <div>
                    <label htmlFor="Email">Email*</label><br />
                    <input type="email" placeholder='Enter Your Registerd Email' required/>
                </div>
                <button>Verify</button>
                {verify ? <p>Email Address is Verified</p> : null}
            </div>
        </div>
    )
}

export default Verify

