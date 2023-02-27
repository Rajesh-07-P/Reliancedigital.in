import React, { useState, useEffect } from "react";
import axios from "axios";

import style from "./Register.module.css";
// import WlcmLodr from "./WlcmLodr";

const Register = () => {
  const [loading, setLoading] = useState(false);
  // const [fstName,setFstName]=useState('')
  // const [lstName,setLstName]=useState('')
  const [details, setDetails] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleRegister = async () => {
    console.log(details);
    let res = await axios.post(
      "https://unusual-calf-threads.cyclic.app/users/register",
      details
    );
    console.log(res);
    // localStorage.setItem("token", res.data.tokenID);
  };
  
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);
  // }, []);
  return (
    <div className={style.regcont}>
      <h1 className={style.head}>User Registration</h1>
      <div className={style.form}>
        <div>
          <label htmlFor="name">Name*</label>
          <br />
          <input
            type="text"
            placeholder="Enter Your Name"
            required
            name="name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="mobile">Mobile No.*</label>
          <br />
          <input
            type="number"
            maxLength={10}
            placeholder="Enter Your Number"
            name="mobile"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">E-Mail*</label>
          <br />
          <input
            type="email"
            placeholder="Enter Your Email Address"
            required
            name="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Create Password*</label>
          <br />
          <input
            type="password"
            placeholder="Create Password"
            maxLength={10}
            required
            name="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="gender">Gender*</label>
          <br />
          <input
            type="text"
            placeholder="Enter Your Gender"
            required
            maxLength={8}
            name="gender"
            onChange={handleChange}
          />
        </div>
        <button onClick={handleRegister}>Register</button>
        <br />
        <span>
          Already Registered,
          <a href="/login" className={style.alrdrgstr}>
            Login here
          </a>
        </span>
      </div>
    </div>
  );
};

export default Register;
