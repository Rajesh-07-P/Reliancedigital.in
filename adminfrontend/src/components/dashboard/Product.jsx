import Navbarsection from './Navbar.section'
import Navbar2section from './Navbar2.section'
import ProductCard from './ProductCard';
import style from '../../styles/Products.module.css'


export default function Product() {
    return (
        <div className={style.main_div_prod}>
            <Navbarsection />
            <Navbar2section />
            <div className={style.product}>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            </div>
        </div>
    );
}