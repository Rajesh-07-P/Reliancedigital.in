import React, { useState } from 'react'
import styles from './Login.module.css';
import axios from "axios";
const Login = () => {
    const [details,setDetails]=useState({});


    const handleChange=(e)=>{
        const {name,value}=e.target;
        setDetails({...details,[name]:value});
    }
    
    const handleLogin=async()=>{
        console.log(details);
        let res=await axios.post("http://localhost:4500/users/login",details);
        localStorage.setItem("token",res.data.tokenID);
    }
    return (
      <div>
        <img
          src={process.env.PUBLIC_URL + "/assests/logo.png"}
          alt="Retail City Logo"
          className={styles.logo}
        />
        <h1 className={styles.head}>Login to Your Account</h1>
        <div className={styles.form}>
          <div>
            <label htmlFor="email">E-Mail*</label>
            <br />
            <input
              type="email"
              placeholder="Enter Email Address"
              name="email"
              required
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password*</label>
            <br />
            <input
              type="password"
              placeholder="Enter Password"
              maxLength={10}
              name="password"
              required
              onChange={handleChange}
            />
          </div>
          <button onClick={handleLogin}>Login</button>
          <div className={styles.alrdrgstr}>
            <a href="/forgotpassword" className={styles.alrdrgstr}>
              Forgot Password
            </a>
          </div>
        </div>
      </div>
    );
}

export default Login