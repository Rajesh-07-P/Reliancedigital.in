import React, { createContext } from "react";
import { useState } from "react";

export const Authcontext = createContext();

function Authcontextprovider({ children }) {

  const [productdata, setproductdata] = useState();
  const [items,setItems]=useState();



  return (
    <Authcontext.Provider
      value={{
        productdata,
        setproductdata,
        items,setItems
      }}
    >
      {children}
    </Authcontext.Provider>
  );
}
export default Authcontextprovider;
