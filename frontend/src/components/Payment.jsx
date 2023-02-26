import React, { useEffect, useState } from "react";
import { Button, Input, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import "./Payment.css";

const Payment = () => {
  const [value, setValue] = React.useState("1");
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [address, setAddress] = useState([]);

  const handleClick = () => {
    alert("your order has been placed");
  };
  const fetchcart = () => {
    fetch("http://localhost:4500/cart", {
      headers: { Authorization: localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setCart(res);

        const total = res.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );
        setTotalPrice(total);
      })
      .catch((err) => console.log(err));
  };

  const fetchAddress = () => {
    fetch("http://localhost:4500/address", {
      headers: { Authorization: localStorage.getItem("token") },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setAddress(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchcart();
    fetchAddress();
  }, []);

  return (
    <div className="main-div">
      <div className="payment-address">
        <div style={{ marginBottom: "20px" }}>
          <p className="heading">SHIPPING ADDRESS:</p>
          <div
            className="cartmap"
            style={{
              backgroundColor: "rgb(231, 233, 233)",
              padding: "0px 10px 0px 10px",
            }}
          >
            {address ? (
              address.map((el) => (
                <div>
                  <p className="map">{el.address}</p>{" "}
                  <p className="map">
                    {" "}
                    {el.city}-{el.pincode}, {el.state}{" "}
                  </p>
                  <p className="map">Mobile:+91 {el.mobile}</p>
                </div>
              ))
            ) : (
              <h1> No address mention</h1>
            )}
          </div>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <div className="heading">
            <p>ORDER DETAILS:</p>
          </div>
          <div
            className="cartmap"
            style={{
              backgroundColor: "rgb(231, 233, 233)",
              padding: "0px 30px 0px 10px",
            }}
          >
            {cart ? (
              cart.map((el, index) => (
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <p className="map">
                      {index + 1} - {el.title}
                    </p>
                  </div>
                  <div>
                    <p className="map">Rs. {el.price}</p>
                  </div>
                </div>
              ))
            ) : (
              <h1>No items available in cart</h1>
            )}
          </div>
        </div>
      </div>
      {/* -------------------------- */}
      <div className="payment">
        <div >
          <RadioGroup
            onChange={setValue}
            value={value}
            
          >
            <Stack direction="column" gap="20px">
              <Radio style={{ border: "1px solid black"}} value="1">
                Credit Card
              </Radio>
              <Radio style={{ border: "1px solid black"}} value="2">Debit Card</Radio>
              <Radio style={{ border: "1px solid black"}} value="3">Credit Card EMI</Radio>
              <Radio style={{ border: "1px solid black"}} value="4">Net Banking</Radio>
              <Radio style={{ border: "1px solid black"}} value="5">UPI</Radio>
              <Radio style={{ border: "1px solid black"}} value="6">Wallet</Radio>
            </Stack>
          </RadioGroup>
        </div>
        <div className="atm" style={{ backgroundColor: "rgb(231, 233, 233)" }}>
          <div>
            <p className="heading">Payment Option</p>
          </div>
          <div className="pin">
            <div>
              <Input
                type="text"
                placeholder="Enter Cart Number"
                style={{ border: "1px solid black" }}
              />
            </div>
            <div>
              <Input
                type="text"
                placeholder="Enter Name on Card"
                style={{ border: "1px solid black" }}
              />
            </div>

            <div className="date">
              <Input
                type="text"
                placeholder="MM"
                style={{ border: "1px solid black" }}
              />
              <Input
                type="text"
                placeholder="YYYY"
                style={{ border: "1px solid black", marginLeft: "20px" }}
              />
              <Input
                type="text"
                placeholder="CVV"
                style={{ border: "1px solid black", marginLeft: "20px" }}
              />
            </div>
            <div className="para">
              <p>
                *Clicking on “Pay” will take you to a secure payment gateway
                where you can make your payment. Your order will not be
                completed without this action
              </p>
            </div>
            <div>
              <button
                onClick={handleClick}
                style={{
                  marginTop: "20px",
                  backgroundColor: "red",
                  color: "white",
                  padding: "7px 0px 7px 0px",
                }}
              >
                PAY RS. {totalPrice}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
