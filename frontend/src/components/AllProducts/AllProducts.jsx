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
 const[minprice,setminprice]=useState(0)
 const[maxprice,setmaxprice]=useState(10000)
 console.log(minprice)
 console.log(maxprice)

  //Loading Status
  const [isLoading, setisLoading] = React.useState(false);

  //  Product data
  const [Append, setAppend] = React.useState([]);

  // Total Products
  const [total, setTotal] = React.useState(0);

  //Pagination Page Count
  const [page, setPage] = React.useState(1);

  //filters
  const [Price, setPrice] = React.useState([0, 100000]);
  const [Discount, setDiscount] = React.useState([0, 100]);

 
  const [data,setData]=React.useState([])
  const lowhigh=()=>{
    const numDescending = [...data].sort((a, b) => a.price - b.price);
  console.log(numDescending)
  setData(numDescending)
  console.log(data)
  console.log("yes data")
  }

  const highlow=()=>{
    const numDescending = [...data].sort((a, b) => b.price - a.price);
    setData(numDescending)
    console.log(data)
  }

let names=location.pathname
const last = names.split("/")
let x=(last[last.length-1]);
  useEffect(()=>{
      axios.get(`http://localhost:4500/products?brand=${x}`)
      .then((res)=>setData(res.data))
     
      
  },[])
 
const handleRealme = () => {
  setRealme(!Realme);
  handleBrandRealme()
}
const handleApple = () => {
  setApple(!Apple);
  handleBrandApple()

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



const handleprice=()=>{
 let prices=data.filter((el)=>{
  if(el.price<=10000 && el.price>=8000){
    return(el)
  }
  
})
setData(prices)
}
console.log(data)
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
      min={5000}
      max={10000}
      onChange={({ min, max }) =>(`min = ${setminprice(min)}, max = ${setmaxprice(max)}`)}
    />
    <Button>Go</Button>
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
                    />
                    <label className="label"> Xiaomi</label>
                  </Box>
                  <Box className="filter-checkbox">
                    <input
                      type="checkbox"
                     
            
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

                     
                    />
                    <label className="label">One Plus</label>
                  </Box>
                  <Box className="filter-checkbox">
                    <input
                     type="checkbox"
                    />
                    <label className="label">OPPO</label>
                  </Box>
                  <Box className="filter-checkbox">
                    <input
                      type="checkbox"
                    />
                    <label className="label">Motorola</label>
                  </Box>
                  <Box className="filter-checkbox">
                    <input
                      type="checkbox"
                     
                    />
                    <label className="label">Tecno</label>
                  </Box>
                  <Box className="filter-checkbox">
                    <input
                      type="checkbox"
                    />
                    <label className="label">Nokia</label>
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
                      onChange={() => {
                        if (Discount[1] !== 20) {
                          setDiscount([0, 20]);
                        } else {
                          setDiscount([0, 100]);
                        }
                      }}
                      checked={Discount[1] === 20}
                    />
                    <label className="label">30% to 40%</label>
                  </Box>
                  <Box className="filter-checkbox">
                    <input
                      type="checkbox"
                      onChange={() => {
                        if (Discount[0] !== 21) {
                          setDiscount([21, 40]);
                        } else {
                          setDiscount([0, 100]);
                        }
                      }}
                      checked={Discount[0] === 21}
                    />
                    <label className="label">20% to 30%</label>
                  </Box>
                  <Box className="filter-checkbox">
                    <input
                      type="checkbox"
                      onChange={() => {
                        if (Discount[0] !== 41) {
                          setDiscount([41, 50]);
                        } else {
                          setDiscount([0, 100]);
                        }
                      }}
                      checked={Discount[0] === 41}
                    />
                    <label className="label"> 41% - 50%</label>
                  </Box>
                  <Box className="filter-checkbox">
                    <input
                      type="checkbox"
                      onChange={() => {
                        if (Discount[0] !== 51) {
                          setDiscount([51, 100]);
                        } else {
                          setDiscount([0, 100]);
                        }
                      }}
                      checked={Discount[0] === 51}
                    />
                    <label className="label"> 10% to 20%</label>
                  </Box>
                  <Box className="filter-checkbox">
                    <input
                      type="checkbox"
                      onChange={() => {
                        if (Discount[0] !== 51) {
                          setDiscount([51, 100]);
                        } else {
                          setDiscount([0, 100]);
                        }
                      }}
                      checked={Discount[0] === 51}
                    />
                    <label className="label">upto 10%</label>
                  </Box>
                 
                </AccordionPanel>
              </AccordionItem>
              
            </Accordion>
            <Button onClick={handleprice}>ADD CLICK</Button>
          </Box>
          <Box className="products_wrapper">
          <Box background={'#fff'} boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;" display={'flex'} justifyContent="space-between">
      <div>
      <Text fontSize={'23px'} fontWeight="bold" pt='15px' pl='15px'>APPLE MOBILES</Text>
      <Text fontSize={'16px'}   pl='15px'>(Showing 1- {data.length} products of 175 products)</Text>
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
