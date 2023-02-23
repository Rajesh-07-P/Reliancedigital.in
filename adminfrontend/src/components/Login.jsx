import React from 'react'
import styles from '../styles/Login.module.css'
const Login = () => {
    return (
        <div>
            <img src={process.env.PUBLIC_URL + '/assests/logo.png'} alt="Retail City Logo" className={styles.logo} />
            <h1 className={styles.head}>Login to Your Account</h1>
            <div className={styles.form}>
                <div>
                    <label htmlFor="email">E-Mail*</label><br />
                    <input type="email" placeholder='Enter Email Address' required />
                </div>
                <div>
                    <label htmlFor="password">Password*</label><br />
                    <input type="number" placeholder='Enter Password' maxLength={10} required />
                </div>
                <button>Login</button>
                <div className={styles.alrdrgstr}>
                    <a href="/forgotpassword" className={styles.alrdrgstr}>Forgot Password</a>
                    <a href="/verify" className={styles.alrdrgstr}>Verify Email</a>
                </div>
            </div>
        </div>
    )
}

export default Login