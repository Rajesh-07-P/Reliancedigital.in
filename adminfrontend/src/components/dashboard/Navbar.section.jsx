import React from 'react'
import styles from '../../styles/Navbar.module.css'
const Navbarsection = () => {
    return (
        <div className={styles.main}>
            <img src={process.env.PUBLIC_URL + '/assests/logo2.png'} alt="Retailcity.com logo" />
            <h1 className={styles.head}>Welcome To Dashboard</h1>
            <h1 className={styles.head1}>Dashboard</h1>
            <p className={styles.p}>Deepak Chaurasiya</p>
        </div>
    )
}

export default Navbarsection