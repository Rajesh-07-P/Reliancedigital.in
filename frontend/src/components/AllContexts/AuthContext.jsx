import React, { createContext } from "react";
import { useState } from "react";

export const Authcontext = createContext();

function Authcontextprovider({ children }) {

  const [productdata, setproductdata] = useState();



  return (
    <Authcontext.Provider
      value={{
        productdata,
        setproductdata
      }}
    >
      {children}
    </Authcontext.Provider>
  );
}
export default Authcontextprovider;
