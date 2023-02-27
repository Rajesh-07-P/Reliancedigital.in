import React, { useEffect, useState } from 'react'
import styles from '../../styles/Orders.module.css'
import Navbarsection from './Navbar.section'
import Navbar2section from './Navbar2.section'
export const Order = () => {
    const [order, setOrder] = useState("")

    const getData = () => {
        fetch("https://unusual-calf-threads.cyclic.app/cart/", {
            headers: {
                Authorization: localStorage.getItem("token"),
            },
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setOrder(res);
            })
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <Navbarsection />
            <Navbar2section />
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Brand</th>
                        <th>Title</th>
                        <th>Qty</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {order ? (
                        order.map((el,i) => (
                            <tr key={i}>
                                <td data-label="Brand">{el.brand}</td>
                                <td data-label="Name">{el.title}</td>
                                <td data-label="Qty">{el.quantity}</td>
                                <td data-label="Price">{el.price}</td>
                            </tr>
                        ))
                    ) : (
                        <h1> No Orders</h1>
                    )}

                </tbody>
            </table>
        </div>
    )
}
