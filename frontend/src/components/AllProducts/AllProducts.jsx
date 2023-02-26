import React, { useState } from "react";
import {
  Box,
  Text,
  Flex,
  SimpleGrid,
  Image,
  Spinner,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Link,

} from "@chakra-ui/react";
import "./AllProducts.css";
import { Authcontext } from "../AllContexts/AuthContext";
import { useEffect,useContext } from "react";
import axios from 'axios'
import { useNavigate,useLocation } from "react-router-dom";
import MultiRangeSlider from '../multiRangeSlider/MultiRangeSlider'
const AllProducts = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const { productdata, setproductdata} = useContext(Authcontext)

  const [Realme,setRealme]=useState(false)
 const [Apple,setApple]=useState(false)
const [All,setAll]=useState(false)
 const[minprice,setminprice]=useState(0)
 const[maxprice,setmaxprice]=useState(10000)
 const [Alldata,setAlldata]=useState([])
const [Xiaomi,setXiaomi]=useState(false)
const [Samsung,setSamsung]=useState(false)
const [OnePlus,setOnePlus]=useState(false)
const [OPPO,setOPPO]=useState(false)
const [VIVO,setVIVO]=useState(false)
const [Tecno,setTecno]=useState(false)
const [precetag,setprecetag]=useState(false)
const [precetag30,setprecetag30]=useState(false)
const [precetag20,setprecetag20]=useState(false)
const [precetag10,setprecetag10]=useState(false)
const [precetagdata,setprecetagdata]=useState([])


 


 
  const [data,setData]=React.useState([])
  const lowhigh=()=>{
    const numDescending = [...data].sort((a, b) => a.price - b.price);
  console.log(numDescending)
  setData(numDescending)
  
  }

  const highlow=()=>{
    const numDescending = [...data].sort((a, b) => b.price - a.price);
    setData(numDescending)
   
  }

let names=location.pathname
const last = names.split("/")
let x=(last[last.length-1]);
  useEffect(()=>{
      axios.get(`http://localhost:4500/products?brand=${x}`)
      .then((res)=>setData(res.data))

      handleprecenta()
  },[])
 

  const handleAll = () => {
    setAll(!All);
    handleBrandAll()
  
  }

  
  const handleXiaomi = () => {
    setXiaomi(!Xiaomi);
    handleBrandXiaomi()
  
  }

  const handleSamsung = () => {
    setSamsung(!Samsung);
    handleBrandSamsung()
  
  }
  
const handleRealme = () => {
  setRealme(!Realme);
  handleBrandRealme()
}
const handleOPPO = () => {
  setOPPO(!OPPO);
  handleBrandOPPO()

}

const handleOnePlus = () => {
  setOnePlus(!OnePlus);
  handleBrandOnePlus()

}

const handleApple = () => {
  setApple(!Apple);
  handleBrandApple()

}


const handleVIVO = () => {
  setVIVO(!VIVO);
  handleBrandVIVO()

}

const handleTecno = () => {
  setTecno(!Tecno);
  handleBrandTecno()

}


const handleBrandAll=async()=>{

  if(All===false){
     const res = await axios.get(`http://localhost:4500/products?brand=Apple&brand=Realme&brand=One Plus&brand=OPPO&brand=Samsung&brand=Tecno&brand=VIVO&brand=Xiaomi`);
   setData(res.data)
  }
}


const handleBrandXiaomi=async()=>{

  if(Xiaomi===false){
     const res = await axios.get(`http://localhost:4500/products?brand=Xiaomi`);
   setData(res.data)
  }
}
const handleBrandSamsung=async()=>{

  if(Samsung===false){
     const res = await axios.get(`http://localhost:4500/products?brand=Samsung`);
   setData(res.data)
  }
}

const handleBrandRealme=async()=>{
 if(Realme===false){
     const res = await axios.get(`http://localhost:4500/products?brand=Realme`);
   setData(res.data)
  }
}

const handleBrandApple=async()=>{

  if(Realme===false){
     const res = await axios.get(`http://localhost:4500/products?brand=Apple`);
   setData(res.data)
  }
}

const handleBrandOnePlus=async()=>{

  if(Realme===false){
     const res = await axios.get(`http://localhost:4500/products?brand=One Plus`);
   setData(res.data)
  }
}

const handleBrandOPPO=async()=>{

  if(Realme===false){
     const res = await axios.get(`http://localhost:4500/products?brand=OPPO`);
   setData(res.data)
  }
}


const handleBrandVIVO=async()=>{

  if(Realme===false){
     const res = await axios.get(`http://localhost:4500/products?brand=VIVO`);
   setData(res.data)
  }
}


const handleBrandTecno=async()=>{

  if(Realme===false){
     const res = await axios.get(`http://localhost:4500/products?brand=Tecno`);
   setData(res.data)
  }
}




const handleBrandAlls=async()=>{
     const res = await axios.get(`http://localhost:4500/products?brand=Apple&brand=Realme&brand=One Plus&brand=OPPO&brand=Samsung&brand=Tecno&brand=VIVO&brand=Xiaomi`);
     setAlldata(res.data)

}


const handleprice=async()=>{
 
  handleBrandAlls()

    handlefiletr()
 
}
const handlefiletr=()=>{
  let prices=Alldata.filter((el)=>{
    if(el.price<=maxprice && el.price>=minprice){
      return(el)
    }
    
  })
  setData(prices)
 
}




const handleprecetag = () => {
  setprecetag(!precetag);
  handleBrandprecetag()

}
const handleprecenta=async()=>{
  const res = await axios.get(`http://localhost:4500/products?brand=Apple&brand=Realme&brand=One Plus&brand=OPPO&brand=Samsung&brand=Tecno&brand=VIVO&brand=Xiaomi`);
  setprecetagdata(res.data)

}
const handleBrandprecetag=()=>{
  if(precetag===false){
   
    handleprecenta()
    presentages()
    
}
}
const presentages=()=>{
  let prices=precetagdata.filter((el)=>{
    if(el.discount<=40 && el.discount>=30){
      return(el)
    }
    
  })
  setData(prices)
  console.log(prices)
}
//30%
const handleprecetag30 = () => {
  setprecetag30(!precetag30);
  handleBrandprecetag30()

}
const handleBrandprecetag30=()=>{
  if(precetag===false){
   
    handleprecenta()
    presentages30()
    
}
}
const presentages30=()=>{
  let prices=precetagdata.filter((el)=>{
    if(el.discount<=30 && el.discount>=20){
      return(el)
    }
    
  })
  setData(prices)
  console.log(prices)
}

//20%
const handleprecetag20 = () => {
  setprecetag20(!precetag20);
  handleBrandprecetag20()

}
const handleBrandprecetag20=()=>{
  if(precetag===false){
   
    handleprecenta()
    presentages20()
    
}
}
const presentages20=()=>{
  let prices=precetagdata.filter((el)=>{
    if(el.discount<=20 && el.discount>=10){
      return(el)
    }
    
  })
  setData(prices)
  console.log(prices)
}

//10%
const handleprecetag10 = () => {
  setprecetag10(!precetag10);
  handleBrandprecetag10()

}
const handleBrandprecetag10=()=>{
  if(precetag===false){
   
    handleprecenta()
    presentages10()
    
}
}
const presentages10=()=>{
  let prices=precetagdata.filter((el)=>{
    if(el.discount<=10 && el.discount>=0){
      return(el)
    }
    
  })
  setData(prices)
  console.log(prices)
}

  return (
    <Box className="wrapper">
      <>
       
        <Flex className="flex_filter-products">
          <Box className="category_wrapper">
            <Accordion defaultIndex={[0, 1, 2]} allowMultiple>
              
            <AccordionItem boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;" fontSize='18px' pt='10px' pb='10px' pl='10px' bg='white'>
                <h1 >
                FILTERS
                </h1>
               
              </AccordionItem>
              {/* filter by price */}
              <AccordionItem boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;" bg='white' mt='20px'>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className="filter-title"
                    >
                     Price
                    </Box>
                   
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>

                <MultiRangeSlider
      min={0}
      max={150000}
      onChange={({ min, max }) =>(`min = ${setminprice(min)}, max = ${setmaxprice(max)}`)}
    />
   <Button onClick={handleprice}>GO</Button>
                </AccordionPanel>
              </AccordionItem>
              
              <AccordionItem boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;" bg='white' mt='20px'>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className="filter-title"
                    >
                      Brand
                    </Box>
                   
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                <Box className="filter-checkbox">
                    <input
                      type="checkbox"
                      checked={All}
                      onChange={handleAll}
                    />
                    <label className="label">All  Brand</label>
                  </Box>
                  <Box className="filter-checkbox">
                    <input
                      type="checkbox"
                      checked={Xiaomi}
                      onChange={handleXiaomi}
                    />
                    <label className="label"> Xiaomi</label>
                  </Box>
                  <Box className="filter-checkbox">
                    <input
                      type="checkbox"
                      checked={Samsung}
                      onChange={handleSamsung}
            
                    />
                    <label className="label"> Samsung</label>
                  </Box>
                  <Box className="filter-checkbox">
                    <input
                      type="checkbox"
                      checked={Apple}
                      onChange={handleApple}
                    />
                    <label className="label">Apple</label>
                  </Box>
                  <Box className="filter-checkbox">
                    <input
                     type="checkbox"
                     checked={Realme}
                      onChange={handleRealme}

                    />
                    <label className="label">Realme</label>
                  </Box>
                  <Box className="filter-checkbox">
                    <input
                      type="checkbox"
                      
                      checked={OnePlus}
                      onChange={handleOnePlus}
                    />
                    <label className="label">One Plus</label>
                  </Box>
                  <Box className="filter-checkbox">
                    <input
                     type="checkbox"
                     checked={OPPO}
                     onChange={handleOPPO}
                    />
                    <label className="label">OPPO</label>
                  </Box>
                  <Box className="filter-checkbox">
                    <input
                      type="checkbox"
                      checked={VIVO}
                     onChange={handleVIVO}
                    />
                    <label className="label">VIVO</label>
                  </Box>
                  <Box className="filter-checkbox">
                    <input
                      type="checkbox"
                      checked={Tecno}
                     onChange={handleTecno}
                      
                    />
                    <label className="label">Tecno</label>
                  </Box>
                 
                  
                </AccordionPanel>
              </AccordionItem>
              {/* filter by discount */}
              <AccordionItem boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;" bg='white' mt='20px'>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className="filter-title"
                    >
                      Discount Percent
                    </Box>
                  
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box className="filter-checkbox">
                    <input
                      type="checkbox"
                      checked={precetag}
                     onChange={handleprecetag}
                    />
                    <label className="label">30% to 40%</label>
                  </Box>
                  
                  <Box className="filter-checkbox">
                    <input
                      type="checkbox"
                      checked={precetag30}
                     onChange={handleprecetag30}
                      
                    />
                    <label className="label">20% to 30%</label>
                  </Box>

                  <Box className="filter-checkbox">
                    <input
                      type="checkbox"
                      checked={precetag20}
                     onChange={handleprecetag20}
                      
                    />
                    <label className="label">10% to 20%</label>
                  </Box>
                  <Box className="filter-checkbox">
                    <input
                      type="checkbox"
                      checked={precetag10}
                     onChange={handleprecetag10}
                      
                    />
                    <label className="label">upto 10%</label>
                  </Box>
                 
                </AccordionPanel>
              </AccordionItem>
              
            </Accordion>
            
          </Box>
          <Box className="products_wrapper">
          <Box background={'#fff'} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;" display={'flex'} justifyContent="space-between">
      <div>
      <Text fontSize={'23px'} fontWeight="bold" pt='15px' pl='15px'>APPLE MOBILES</Text>
      <Text fontSize={'16px'}   pl='15px'>(Showing 1- {data.length} products of 80 products)</Text>
      </div>
      <div style={{display:"flex"}}>
            <div >
            <Text   fontSize={'15px'}  fontWeight="bold" mt='23px' pl='15px'>Sort By:</Text>
            </div>
            <div >
            <Button ml='20px'  mt='20px' h='20px' pt='15px' pb='15px' fontSize={'13px'} color={'rgb(51, 51, 51)'} bg='rgb(245, 247, 247)' variant='solid'>Relevance</Button>
            </div>
            <div >
            <Button ml='20px'  mt='20px' h='20px' pt='15px' pb='15px' fontSize={'13px'} color={'rgb(51, 51, 51)'} bg='rgb(245, 247, 247)' variant='solid' onClick={lowhigh}>Price(Low-High)</Button>
            </div>
            <div >
            <Button ml='20px' mr='50px'  mt='20px' h='20px' pt='15px' pb='14px' fontSize={'13px'} color={'rgb(51, 51, 51)'} bg='rgb(245, 247, 247)' variant='solid' onClick={highlow} >Price(High-Low)</Button>
            </div>
           
      </div>

   </Box>
      <Box>
      <div style={{display:"grid" ,width:'100%',marginTop:'20px', gridTemplateColumns:"repeat(4,1fr)",gap:'8px'}}>
            {
                 
                data.map((product)=>{
                    return(
                        <div key={product._id}  onClick={() => navigate(`/products/${product._id}`)} >
                        
                       
                           <div style={{ borderRadius:"5px",height:"auto",paddingTop:"20px",paddingBottom:'30px',boxShadow:" rgba(0, 0, 0, 0.35) 0px 5px 15px",textAlign:"center"}}>
                           
                          <img style={{width:"200px",height:"200px",display:'block',margin:'auto'}} src={product.images[0]} alt="product-image" />
                          <h5 style={{paddingTop:'3px'}}>{product.title}</h5>
                          <div style={{display:"flex",gap:"10px",justifyContent:"center",marginTop:'10px'}}>    
                          <h4 style={{color:"blue"}}>₹{product.price}</h4>
                        <h3 style={{fontWeight:"semibold", color:"gray"}} className="price"><s>Rs.{product.mrp}</s></h3>
                        <h3 style={{color:'rgb(67, 160, 71)'}} >{product.discount}%{" "}₹({product.mrp-product.price})</h3>
                         </div>
                     <div  style={{marginTop:"20px",display:"block",display:'flex'}}>
                     <div   style={{border:'0.5px solid #C4C4C4',width:'49%',marginLeft:'1px'}}>
                        <input style={{width:'25px',height:'15px',marginTop:'5px'}} type={"checkbox"}/>
                        Compare</div>
                    <div style={{border:'0.5px solid #C4C4C4',width:'49%'}}>
                        Wishlist</div>
                     </div>
                           </div>
                           
                           

                        </div>
                    )
                })
            }
        </div>

      </Box>
          </Box>
        </Flex>{" "}
      </>
    </Box>
  );
};

export default AllProducts;
