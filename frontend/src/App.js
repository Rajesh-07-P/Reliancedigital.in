import "./App.css";
import Navbar from "./components/Navbar";
import AllRoutes from "./pages/AllRoutes";
import MultiRangeSlider from './components/multiRangeSlider/MultiRangeSlider'
import { useState } from "react";

function App() {

  return (
    <div>
   
  
      <Navbar/>
      <AllRoutes />
    </div>
  );
}

export default App;
