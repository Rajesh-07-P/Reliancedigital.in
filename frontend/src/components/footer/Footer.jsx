import React from "react";
import styles from "./Footer.module.css";

import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { TfiYoutube } from "react-icons/tfi";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.flexcontainer}>
          <div>
            <h2>PRODUCT CATEGORIES</h2>
            <p>Smartphones</p>
            <p>Laptops</p>
            <p>DSLR Cameras</p>
            <p>Televisions</p>
            <p>Air Conditioners</p>
            <p>Refrigerators</p>
            <p>Kitchen Appliances</p>
            <p>Accessories</p>
            <p>Personal Care & Grooming</p>
          </div>
          <div>
            <h2>SITE INFO</h2>
            <p>About Reliance Digital</p>
            <p>resQ Services</p>
            <p>Site Map</p>
            <p>Gift Cards</p>
            <p>Corporate Enquires</p>
            <p>Contact Us</p>
          </div>
          <div>
            <h2>RESOURCE CENTRE</h2>
            <p>Product Reviews</p>
            <p>Buying Guides</p>
            <p>How Tos</p>
            <p>Featured Stories</p>
            <p>Events & Happenings</p>
            <p>Nearest Store</p>
          </div>
          <div>
            <h2>POLICIES</h2>
            <p>Terms of Use</p>
            <p>FAQs</p>
            <p>Cancellation and Return Policy</p>
            <p>Pricing and Payments Policy</p>
            <p>Shipping and Delivery Policy</p>
            <p>Privacy Policy</p>
            <p>E-waste Recycling Policy</p>
            <p>EMI and Additional Cashback T&C</p>
            <p>RelianceOne Loyalty Program T&C</p>
            <p>Caution Notice</p>
          </div>
        </div>
        <div className={styles.bottomcontainer}>
          <div>
            <h2>FOLLOW US</h2>
            <div className={styles.icons}>
              <AiFillFacebook />
              <AiOutlineTwitter />
              <TfiYoutube />
            </div>
          </div>
          <div>
            <h2>EXPERIENCE RELIANCE DIGITAL APP ON MOBILE</h2>
            <img
              src="https://www.reliancedigital.in/build/client/images/google_play_store.png"
              alt=""
            />
            <img
              src="https://www.reliancedigital.in/build/client/images/ios_app_store_icon.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={styles.discontainer}>
        <h3>Disclaimer</h3>
        <p>
          Product prices, offers and availability are subject to change from
          time to time. All prices are inclusive of taxes. Product colours &
          images are only for illustration and they may not exactly match with
          the actual product. Product specs are subject to change & may vary
          from actual product. While every care is taken to avoid inaccuracies
          in content, these are provided as is, without warranty of any kind.
        </p>
      </div>
    </>
  );
};

export default Footer;
