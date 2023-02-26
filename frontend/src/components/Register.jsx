import React, { useState, useEffect } from "react";

import style from "../styles/Register.module.css";
import WlcmLodr from "./WlcmLodr";
const Register = () => {
  const [loading, setLoading] = useState(false);
  // const [fstName,setFstName]=useState('')
  // const [lstName,setLstName]=useState('')
  const [details, setDetails] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handleLogin = async () => {
    console.log(details);
    let res = await axios.post("http://localhost:4500/users/login", details);
    localStorage.setItem("token", res.data.tokenID);
  };
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return loading ? (
    <WlcmLodr />
  ) : (
    <div>
      <img
        src={process.env.PUBLIC_URL + "/assests/logo.png"}
        alt="Retail City Logo"
        className={style.logo}
      />
      <h1 className={style.head}>Admin Registration</h1>
      <div className={style.form}>
        <div>
          <label htmlFor="name">Name*</label>
          <br />
          <input type="text" placeholder="Enter Your Name" required />
        </div>
        <div>
          <label htmlFor="mobile">Mobile No.*</label>
          <br />
          <input type="number" maxLength={10} placeholder="Enter Your Number" />
        </div>
        <div>
          <label htmlFor="email">E-Mail*</label>
          <br />
          <input type="email" placeholder="Enter Your Email Address" required />
        </div>
        <div>
          <label htmlFor="password">Create Password*</label>
          <br />
          <input
            type="number"
            placeholder="Create Password"
            maxLength={10}
            required
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
          />
        </div>
        <button>Register</button>
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
