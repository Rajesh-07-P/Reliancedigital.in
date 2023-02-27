import React, { useState } from "react";
import styles from "./Login.module.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [details, setDetails] = useState({});
  const navigate=useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleLogin = async () => {
    console.log(details);
    let res = await axios.post(
      "https://unusual-calf-threads.cyclic.app/users/login",
      details
    );
    if (!res.data.tokenID) {
      alert("User not found Please register");
    }
    console.log(res.data.tokenID);
    localStorage.setItem("token", res.data.tokenID);

    navigate("/products/63fa3107e531acf1f141f216");
  };
  return (
    <div style={{ marginBottom: "20px" }}>
      {/* <img
          src={process.env.PUBLIC_URL + "/assests/logo.png"}
          alt="Retail City Logo"
          className={styles.logo}
        /> */}
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
        <div className={styles.btncontainer}>
          <button onClick={handleLogin}>Login</button>
          <button >
            <Link to="/register">Register</Link>
          </button>
        </div>
        <div className={styles.alrdrgstr}>
          <a href="/forgotpassword" className={styles.alrdrgstr}>
            Forgot Password
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
