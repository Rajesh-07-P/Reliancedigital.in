import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Cart from '../components/Cart'
import AddressUser from '../components/Address'

const AllRoutes = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/address" element={<AddressUser/>}></Route>   
    </Routes>
    </>
  )
}

export default AllRoutes