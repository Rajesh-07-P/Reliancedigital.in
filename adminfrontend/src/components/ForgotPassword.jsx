import React, { useState } from 'react'
import styles from '../styles/ForgotPassword.module.css'
const ForgotPassword = () => {
    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")

    const handleSubmit = () => {
        const payload = {
            email,
            password,
        }
        // console.log(payload)
        fetch("http://localhost:4500/admin/forgot-password",
            {
                method: "PATCH",
                body: JSON.stringify(payload),
                headers: { "Content-type": "application/json" }
            }).then(res => res.json())
            .then((res) => {
                console.log(res);
                // localStorage.setItem("token", res.token);
            })
            .catch(err => console.log(err))

    }
    return (
        <div>
            <img src={process.env.PUBLIC_URL + '/assests/logo.png'} alt="Retail City Logo" className={styles.logo} />
            <h1 className={styles.head}>Forgot Password</h1>
            <div className={styles.form}>
                <div>
                    <label htmlFor="email">E-Mail*</label><br />
                    <input type="email" placeholder='Enter Email Address' required value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="Email">Password*</label><br />
                    <input type="password" placeholder='Enter New Password' required value={password} onChange={(e) => setPass(e.target.value)} />
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default ForgotPassword