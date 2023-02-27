import React, { useState, useEffect } from 'react'

import style from '../styles/Register.module.css'
import WlcmLodr from './WlcmLodr'
const Register = () => {
    const [loading, setLoading] = useState(false)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [mobile, setMobile] = useState('')
    const [pass, setPass] = useState('')

    const handleSubmit = () => {
        const payload = {
            email,
            pass,
            name,
            gender,
            mobile
        }
        // console.log(payload)
        fetch("https://unusual-calf-threads.cyclic.app/admin/register",
            {
                method: "POST",
                body: JSON.stringify(payload),
                headers: { "Content-type": "application/json" }
            }).then(res => res.json())
            .then((res) => {
                console.log(res);
                // localStorage.setItem("token", res.token);
            })
            .catch(err => console.log(err))
    }


    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [])
    return (
        loading
            ?
            <WlcmLodr />
            :
            <div >
                <img src={process.env.PUBLIC_URL + '/assests/logo.png'} alt="Retail City Logo" className={style.logo} />
                <h1 className={style.head}>Admin Registration</h1>
                <div className={style.form}>
                    <div>
                        <label htmlFor="name">Name*</label><br />
                        <input type="text" placeholder='Enter Your Name' required onChange={(e) => setName([...e, e.target.value])} />
                    </div>
                    <div>
                        <label htmlFor="mobile">Mobile No.*</label><br />
                        <input type="number" maxLength={10} placeholder='Enter Your Number'  onChange={(e) => setMobile([...e, e.target.value])} />
                    </div>
                    <div>
                        <label htmlFor="email">E-Mail*</label><br />
                        <input type="email" placeholder='Enter Your Email Address' required  onChange={(e) => setEmail([...e, e.target.value])} />
                    </div>
                    <div>
                        <label htmlFor="password">Create Password*</label><br />
                        <input type="number" placeholder='Create Password' maxLength={10} required  onChange={(e) => setPass([...e, e.target.value])} />
                    </div>
                    <div>
                        <label htmlFor="gender">Gender*</label><br />
                        <input type="text" placeholder='Enter Your Gender' required maxLength={8} onChange={(e) => setGender([...e, e.target.value])} />
                    </div>
                    <button onClick={handleSubmit}>Register</button><br />
                    <span>Already Registered,<a href="/login" className={style.alrdrgstr}>Login here</a></span>
                </div>
            </div>
    )
}

export default Register