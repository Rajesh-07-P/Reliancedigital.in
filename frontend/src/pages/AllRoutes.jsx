import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Cart from '../components/Cart'

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
    </>
  )
}

export default AllRoutes