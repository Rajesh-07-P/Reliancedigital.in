import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Cart from '../components/Cart'
import Smartphones from '../components/Smartphones'
import AllProducts from '../components/AllProducts/AllProducts'
import ProductDetails from '../components/ProductDetails/ProductDetails'
const AllRoutes = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
     <Route path='/smartphone' element={<Smartphones/>}/>
     <Route path='/AllProducts/:id' element={<AllProducts/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
   <Route path='/products/:id' element={<ProductDetails/>}/>
    </Routes>
    </>
  )
}

export default AllRoutes