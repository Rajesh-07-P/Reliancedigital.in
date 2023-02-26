import "./ProductDetails.css";
import React from "react";
import axios from "axios";
import Carousel from "better-react-carousel";
import {
  Grid,
  GridItem,
  Box,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
} from "@chakra-ui/react";
import { useEffect, useContext } from "react";
import { Authcontext } from "../AllContexts/AuthContext";

import { useHistory, useLocation, useNavigate } from "react-router-dom";
const ProductDetails = () => {
  const { items, setItems } = useContext(Authcontext);
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);
  const [images, setimages] = React.useState([]);
  const { productdata, setproductdata } = useContext(Authcontext);
  console.log(productdata);
  const location = useLocation();

 



  useEffect(() => {
    axios.get(`http://localhost:4500${location.pathname}`)
      .then((res) => setData(res.data));

      getItems();
      setItems(4)
  }, []);

  
  const getItems = async () => {
    let res = await axios({method:"get",url:"http://localhost:4500/cart",headers:{authorization:localStorage.getItem("token")}});
    console.log(res.data);
  };

 

  const handleclick = async () => {
    let names = await axios({
      method: "post",
      url: "http://localhost:4500/cart/add",
      data: data,
      headers: { Authorization: localStorage.getItem("token") },
    }).then((response) => {
      console.log(response);
    });
    console.log(names);
  };

  if (data.length !== 0) {
    return (
      <>
        <Grid
          h="auto"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(8, 1fr)"
          gap={1}
          borderBottom="3px solid #e9ebee"
          paddingBottom={"20px"}
        >
          <GridItem
            rowSpan={2}
            colSpan={3}
            style={{ borderRight: "2px solid #e9ebee" }}
          >
            <Box>
              {" "}
              <img
                style={{
                  width: "90%",
                  pl: "100px",
                  height: "480px",
                  display: "block",
                  display: "flex",
                }}
                src={data.images[0]}
                alt="majs"
              />
            </Box>
            <Box marginTop="50px">
              <Carousel
                cols={4}
                rows={1}
                style={{
                  border: "1px solid red",
                  height: "20px",
                  marginLeft: "100px",
                }}
                loop
              >
                {data.images.map((el) => (
                  <Carousel.Item key={el}>
                    <div
                      style={{ height: "auto", border: "1px solid #e5e5e5" }}
                    >
                      <img
                        width={"70%"}
                        style={{ display: "block", margin: "auto" }}
                        src={el}
                        alt="namua"
                      />
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Box>
          </GridItem>

          <GridItem rowSpan={2} colSpan={5}>
            <Box ml="20px" borderBottom={"1px solid #e5e5e5"}>
              <h1
                style={{
                  fontWeight: "bold",
                  fontSize: "23px",
                  paddingBottom: "20px",
                }}
              >
                {data.title}
              </h1>
            </Box>
            <Box display={"flex"}>
              <Box
                ml="20px"
                pr="2px"
                style={{ width: "50%", borderRight: "1px solid #e5e5e5" }}
              >
                <h1 style={{ fontSize: "16px", fontWeight: "bold" }}>
                  Gain more with offers (1)
                </h1>
                <li style={{ fontSize: "15px", marginTop: "5px" }}>
                  7.5% Instant Discount with Citibank Bank Credit/Debit Cards &
                  EMI transactions.Read-T&C
                </li>
                <h1
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    marginTop: "10px",
                  }}
                >
                  Save more with EMI/Cashback (1)
                </h1>
                <li style={{ fontSize: "15px", marginTop: "5px" }}>
                  EMIs (Credit Cards) from ₹5756.74/month | View all Standard
                  Credit Cards EMI options
                </li>
                <h1
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    marginTop: "10px",
                  }}
                >
                  Warranty
                </h1>
                <li style={{ fontSize: "15px", marginTop: "5px" }}>
                  Warranty: 1 Year manufacturer warranty
                </li>
                <h1
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    marginTop: "10px",
                  }}
                >
                  Additional Services & Warranties (2) View All
                </h1>
                <h1
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    marginTop: "10px",
                  }}
                >
                  Key Features
                </h1>
                <li style={{ fontSize: "15px", marginTop: "5px" }}>
                  6.1 inch (15.54 cm) Super Retina XDR 2556 x 1179 display
                </li>
                <li style={{ fontSize: "15px", marginTop: "5px" }}>
                  6.1 inch (15.54 cm) Super Retina XDR 2556 x 1179 display
                </li>
                <li style={{ fontSize: "15px", marginTop: "5px" }}>
                  48MP Main + 12MP Ultra Wide + 12MP 2x Telephoto Rear Camera
                </li>
                <li style={{ fontSize: "15px", marginTop: "5px" }}>
                  12MP camera Selfie Camera, iOS 16 Operating System
                </li>
                <li style={{ fontSize: "15px", marginTop: "5px" }}>
                  Rated IP68 Splash, Water and Dust Resistant
                </li>
                <h1
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    marginTop: "10px",
                  }}
                >
                  Return Policy
                </h1>
                <li style={{ fontSize: "15px", marginTop: "5px" }}>
                  Items are eligible for return within 7 Days of Delivery.
                  Read-T&C
                </li>
                <li style={{ fontSize: "15px", marginTop: "5px" }}>
                  All accessories, product & packaging need to be returned in
                  original condition.
                </li>
                <h1
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    marginTop: "10px",
                  }}
                >
                  Got Feedback to share on this page? report here.
                </h1>
              </Box>
              <Box ml="25px">
                <div style={{ display: "flex" }}>
                  <p style={{ marginTop: "8px" }}>Deal Price: </p>
                  <h1
                    style={{
                      color: "#003380",
                      fontWeight: "bold",
                      fontSize: "25px",
                    }}
                  >
                    {" "}
                    ₹{data.price}.00
                  </h1>
                </div>
                <div style={{ display: "flex", marginTop: "20px" }}>
                  <p>Offer Price: </p>
                  <h1 style={{ fontWeight: "bold" }}>
                    <s>₹{data.mrp}.00</s>
                  </h1>
                </div>
                <div style={{ display: "flex", marginTop: "20px" }}>
                  <p>MRP: </p>
                  <h1 style={{ fontWeight: "bold" }}>
                    <s>₹{data.mrp}.00</s>
                  </h1>
                  <h1>(Inclusive of all taxes)</h1>
                </div>
                <div style={{ marginTop: "20px" }}>
                  <p style={{ fontWeight: "bold", color: "#467348" }}>
                    You Save:{data.discount}%(₹{data.mrp - data.price})
                  </p>
                </div>
                <div style={{ display: "flex", marginTop: "20px" }}>
                  <p>EMIs (Credit Cards) from ₹5756.74/month | </p>
                  <p style={{ color: "blue" }}>View-Plans</p>
                </div>
                <h1
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginTop: "10px",
                  }}
                >
                  FREE Shipping!
                </h1>
                <div style={{ marginTop: "20px", fontSize: "30px" }}>
                  <Input placeholder="Enter / Detect PIN Code" size="sm" />
                </div>
                <Box style={{ marginTop: "30px" }} display={"flex"} gap="10px">
                  <Button
                    onClick={handleclick}
                    color={"white"}
                    bg={"#e42529"}
                    style={{ width: "50%" }}
                  >
                    ADD TO CART
                  </Button>
                  <Button
                    color={"white"}
                    bg={"#fc6027"}
                    style={{ width: "50%" }}
                  >
                    BUY NOW
                  </Button>
                </Box>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </>
    );
  }
};

export default ProductDetails;
