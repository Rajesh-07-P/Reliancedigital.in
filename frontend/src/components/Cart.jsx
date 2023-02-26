import React, { useEffect, useState } from "react";
import "./Cart.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
const Cart = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const handleAdd = (el) => {
    const updatedEl = {
      ...el,
      quantity: el.quantity + 1, // increment quantity by 1
    };
    fetch(`http://localhost:7700/cart/update/${el._id}`, {
      method: "PATCH",
      body: JSON.stringify(updatedEl),
      headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        fetchcart();

        // localStorage.setItem("token", res.tokenID);
      })
      .catch((err) => console.log(err));
  };
  const handleSub = (el) => {
    const updatedEl = {
      ...el,
      quantity: el.quantity - 1, // increment quantity by 1
    };
    fetch(`http://localhost:7700/cart/update/${el._id}`, {
      method: "PATCH",
      body: JSON.stringify(updatedEl),
      headers: {
        "Content-type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        fetchcart();

        // localStorage.setItem("token", res.tokenID);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (el) => {
    fetch(`http://localhost:7700/cart/delete/${el._id}`, {
      method: "DELETE",
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json", // add this header if needed
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetchcart(); // assuming this function fetches the updated cart
        // localStorage.setItem("token", data.tokenID);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchcart();
  }, []);

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

  console.log(totalPrice);
  return (
    <div className="containe">
      <div className="cart">
        <div className="cart-item-left">
          <div style={{ border: "1px solid grey" }}>
            <p style={{ fontWeight: "bold" }}>
              My Cart:{" "}
              <span style={{ fontSize: "15px" }}> ({cart.length} items)</span>
            </p>
          </div>
          <div className="map-item">
            {cart ? (
              cart.map((el) => (
                <div
                  style={{
                    marginTop: "10px",
                    boxShadow: "3px 3px 3px grey",
                    border: "1px solid grey",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div style={{ width: "60%" }}>
                      <div className="imag" style={{ width: "100%" }}>
                        {" "}
                        <img
                          style={{ width: "100%" }}
                          src={el.images[0]}
                          alt="images"
                        />
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          gap: "10px",
                        }}
                      >
                        <button
                          disabled={el.quantity === 0}
                          className="btn-add"
                          onClick={() => handleSub(el)}
                        >
                          -
                        </button>
                        <span style={{ fontWeight: "bold" }}>
                          {el.quantity}
                        </span>
                        <button
                          className="btn-add"
                          onClick={() => handleAdd(el)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="product-details">
                      <div
                        className="product-details1"
                        style={{ width: "100%" }}
                      >
                        <div>
                          <p style={{ fontWeight: "bold", color: "#003380" }}>
                            {el.title}
                          </p>
                        </div>
                        <div className="notimportant">
                          <p
                            style={{
                              color: "green",
                              textAlign: "center",
                              fontSize: "20px",
                              marginTop: "10px",
                            }}
                          >
                            <AiOutlinePlusCircle />{" "}
                          </p>
                          <p
                            style={{
                              fontSize: "12px",
                              paddingBottom: "50px",
                              color: "#E42529",
                              fontWeight: "bold",
                            }}
                          >
                            {" "}
                            RECOMMENDED WARRANTY
                          </p>
                        </div>
                      </div>
                      <div className="product-details2">
                        <p
                          style={{ margin: 0, padding: 0, fontWeight: "bold" }}
                        >
                          Rs. {el.price}
                        </p>
                        <p style={{ color: "#666666" }}>
                          M.R.P:{" "}
                          <span style={{ textDecoration: "line-through" }}>
                            {el.mrp}
                          </span>{" "}
                          Inclusive of all taxes
                        </p>
                        <p style={{ color: "#666666" }}>
                          You Save: {el.discount}% on M.R.P
                        </p>
                        <p style={{ color: "#15967C", fontWeight: "bold" }}>
                          Free Shipping
                        </p>
                        <p
                          style={{
                            textAlign: "end",
                            fontWeight: "bold",
                            color: "#003380",
                          }}
                        >
                          Standard delivery: 28feb - 03march
                        </p>
                        <p style={{ textAlign: "end", color: "#666666" }}>
                          *Delivery assurance is subject to our delivery
                          locations staying open as per govt. regulations
                        </p>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: "100%", marginTop: "10px" }}>
                    <button
                      className="btn-remove"
                      onClick={() => {
                        handleDelete(el);
                      }}
                    >
                      {" "}
                      Remove
                    </button>
                    <button className="btn-remove">Move to wishlist</button>
                  </div>
                </div>
              ))
            ) : (
              <h1>Cart is Empty</h1>
            )}
          </div>
        </div>

        <div className="cart-item-right">
          <div>
            <Link to="/address">
              <button className="btn-checkout">CHECKOUT</button>
            </Link>
          </div>
          <div
            style={{ display: "flex", margin: "5px", border: "1px solid grey" }}
          >
            <input type="text" />
            <button style={{ borderLeft: "1px solid blue" }}>APPLY</button>
          </div>
          <div
            className="bottom"
            style={{
              marginTop: "10px",
              paddingLeft: "10px",
              paddingRight: "5px",
            }}
          >
            {/* {
                totalPrice
            } */}

            <div>
              <p style={{ fontWeight: "bold" }}>PRICE DETAILS</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderTop: "1px solid black",
              }}
            >
              <p>Price ({cart.length} Items)</p>
              <p style={{ fontWeight: "bold" }}> Rs. {totalPrice}</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid black",
              }}
            >
              <p>Delivery Charges</p>

              <p style={{ color: "#15967C", fontWeight: "bold" }}>FREE</p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ fontWeight: "bold" }}>AMOUNT PAYABLE</p>
              <p style={{ fontWeight: "bold" }}>Rs. {totalPrice}</p>
            </div>
            <p style={{ color: "#666666", borderTop: "1px solid black" }}>
              Safe and Secure Payments. Easy returns. 100% Authentic products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
