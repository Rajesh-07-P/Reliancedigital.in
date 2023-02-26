import React from "react";
import Slider from "react-slick";
// import "./slick.css";
// import "./slick-theme.css";
import styles from "./products.module.css";
import products from "./data.js";

export default function AppleCarousel() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      <div
        style={{ width: "1200px", margin: "auto" }}
        className="boatcontainer"
      >
        <Slider {...settings}>
          {products.map((product, i) => {
            return (
              <div className={styles.container} key={i}>
                <div>
                  <img src={product.images[0]} />
                </div>
                <p>{product.title}</p>
                <p>
                  Deal price: <span> ₹{product.price}.00 </span>
                </p>
                <p>
                  M.R.P: <span>₹{product.mrp}.00</span>
                </p>
                <p>
                  You Save: {product.discount}%(₹{product.mrp - product.price})
                </p>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
