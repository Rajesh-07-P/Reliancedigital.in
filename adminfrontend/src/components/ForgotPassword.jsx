import React from 'react'
import styles from '../styles/ForgotPassword.module.css'
const ForgotPassword = () => {
    return (
        <div>
            <img src={process.env.PUBLIC_URL + '/assests/logo.png'} alt="Retail City Logo" className={styles.logo} />
            <h1 className={styles.head}>Forgot Password</h1>
            <div className={styles.form}>
                <div>
                    <label htmlFor="Email">Password*</label><br />
                    <input type="password" placeholder='Enter New Password' required />
                </div>
                <button>Submit</button>
            </div>
        </div>
    )
}

export default ForgotPassword