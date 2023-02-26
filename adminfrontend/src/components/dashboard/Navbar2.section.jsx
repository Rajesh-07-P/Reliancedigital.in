import React from 'react'
import styles from '../../styles/Navbar.module.css'
const Navbar2section = () => {
  return (
    <div className={styles.main2}>
        <a className={styles.p2}>Orders</a>
        <a className={styles.p2} href='/products'>Products</a>
        <a className={styles.p2} href='/create-product'>Create Products</a>
        <a className={styles.p2}>User's Data</a>
    </div>
  )
}

export default Navbar2section