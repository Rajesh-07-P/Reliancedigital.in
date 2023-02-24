import React from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import styles from "./products.module.css";
import products from "./data.js";

export default function BoatCarousel() {
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
          slidesToShow: 1,
          slidesToScroll: 1,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div style={{width:"1200px",margin:"auto"}}>
        <Slider {...settings}>
          {products.map((product, i) => {
            return (
              <div className={styles.container} key={i}>
                <div>
                  <img src={product.images[0]} />
                </div>
                <p>{product.title}</p>
                <p>Deal price: ₹{product.price}.00</p>
                <p>
                  M.R.P: <span>{product.mrp}</span>
                </p>
                <p>You Save: {product.discout}%</p>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
