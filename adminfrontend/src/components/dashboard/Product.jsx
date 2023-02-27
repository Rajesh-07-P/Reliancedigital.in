import Navbarsection from './Navbar.section'
import Navbar2section from './Navbar2.section'
import ProductCard from './ProductCard';
import style from '../../styles/Products.module.css'
import { useState,useEffect } from 'react';


export default function Product() {
    const [order, setOrder] = useState("")

    const getData = () => {
        fetch("https://unusual-calf-threads.cyclic.app/products/", {
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
        <div className={style.main_div_prod}>
            <Navbarsection />
            <Navbar2section />
            <div className={style.product}>
                {order ? (
                    order.map((el,i) => (
                       <ProductCard key={i} {...el}/> 
                    ))
                ) : (
                    <h1> No Products</h1>
                )}
            </div>
        </div>
    );
}