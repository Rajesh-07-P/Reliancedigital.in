import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Cart from "../components/Cart";
import Smartphones from "../components/Smartphones";
import AllProducts from "../components/AllProducts/AllProducts";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Payment from "../components/Payment";
import Login from "../components/Login/Login";
import AddressUser from "../components/Address";
import Register from "../components/Register/Register";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/smartphone" element={<Smartphones />} />
        <Route path="/AllProducts/:id" element={<AllProducts />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/address" element={<AddressUser />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
