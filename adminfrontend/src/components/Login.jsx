import React, { useState } from 'react'
import styles from '../styles/Login.module.css'
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")
    const navigate = useNavigate();
    const handleSubmit = () => {
        const payload = {
            email,
            password,
        }
        // console.log(payload)
        fetch("https://unusual-calf-threads.cyclic.app/admin/login",
            {
                method: "POST",
                body: JSON.stringify(payload),
                headers: { "Content-type": "application/json" }
            }).then(res => res.json())
            .then((res) => {
                console.log(res);
                localStorage.setItem("token", res.token);
            })
            .catch(err => console.log(err))
       navigate('/orders')
    }
    return (
        <div>
            <img src={process.env.PUBLIC_URL + '/assests/logo.png'} alt="Retail City Logo" className={styles.logo} />
            <h1 className={styles.head}>Login to Your Account</h1>
            <div className={styles.form}>
                <div>
                    <label htmlFor="email">E-Mail*</label><br />
                    <input type="email" placeholder='Enter Email Address' required onChange={(e) => setEmail([...e, e.target.value])} />
                </div>
                <div>
                    <label htmlFor="password">Password*</label><br />
                    <input type="number" placeholder='Enter Password' maxLength={10} required  onChange={(e) => setPass([...e, e.target.value])} />
                </div>
                <button onClick={handleSubmit}>Login</button>
                <div className={styles.alrdrgstr}>
                    <a href="/forgotpassword" className={styles.alrdrgstr}>Forgot Password</a>
                </div>
            </div>
        </div>
    )
}

export default Login