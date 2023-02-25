import React from "react";
import BoatCarousel from "../components/carousels/boatproducts/BoatCarousel";
import Mid from "../components/carousels/midcarousel/Mid";
import Summersale from "../components/carousels/SummersaleCarousel/boatproducts/Summersale";
import SimpleSlider from "../components/carousels/topcarousel/SimpleSlider";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <SimpleSlider />
      <div className={styles.boatoffers}>
        <h2>Special Offers on Boat</h2>
        <div>View all</div>
      </div>
      <BoatCarousel />
      <div className={`${styles.boatoffers} ${styles.boatofferssmall}`}>
        <h2>Pre Summer Sale | Upto 60% Off</h2>
        <div>View all</div>
      </div>
      <Summersale />
      <div className={styles.deals}>
        <h2>Great Deals on Electronics</h2>
        <div>
          <div>
            <img
              src="https://www.reliancedigital.in/medias/Motorola-Moto-G42-Small-Banner-28-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wyOTkyNXxpbWFnZS9qcGVnfGltYWdlcy9oZWUvaGNmLzk5NTg4MjY2MzkzOTAuanBnfDU2YTBjMmZhZmYzODEzMjBhNGM0ZWFhODNjZjEyNzMyNDQyZTZiYTc2ZDZkNGMzNmY5MmNkN2Q4OTRjZDRmMjI"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://www.reliancedigital.in/medias/OnePlus-TVs-12999-Small-Banner-03-02-2023.jpg?context=bWFzdGVyfGltYWdlc3wzODc4N3xpbWFnZS9qcGVnfGltYWdlcy9oNGIvaDc1Lzk5NTc2NTM3NzQzNjYuanBnfDQ3ZmNhYWNjYjQ4ZjUxMjkzYjJmNzM2YjNhYjYxMWQxNjExNzMzMWI1ZjQ0ZTYzMGNmMDhiNDljMWIzNmFhZDg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://www.reliancedigital.in/medias/Smartwatches-Small-Banner-28-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wzMTY3M3xpbWFnZS9qcGVnfGltYWdlcy9oNTEvaGY3Lzk5Mzc4OTUyOTI5NTguanBnfDQ2NzM2YjAxZTkzYmJiMTNlMjk4ODkxNTNlMTczMDcxYzU4NjMzZDZmNWQ3N2I5MGViNmMzZDAwNjExMmUxNTE"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://www.reliancedigital.in/medias/Neckband-True-Wireless-Small-Banner-28-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wzMjg5OHxpbWFnZS9qcGVnfGltYWdlcy9oNzYvaDE2Lzk5Mzc4OTUwOTYzNTAuanBnfGE1OTcxMTM4NGUyMjU3MmM4NTc4YTI1NThkMmQwOTc1ZDU2N2YwNjRjMWNiZTU2YjZiMzcwOTVkYjc0MzQ4MDc"
              alt=""
            />
          </div>
        </div>
      </div>
      <Mid/>
      <div className={styles.brandpromise}>
        <h2>THE RELIANCE DIGITAL BRAND PROMISE</h2>
        <div>
          <div>
            <img
              src="https://www.reliancedigital.in/medias/Insta-Delivery-Brand-Promise-Icon.png?context=bWFzdGVyfGltYWdlc3wxNTM3fGltYWdlL3BuZ3xpbWFnZXMvaGI2L2gwNS85NDQ3MTcwMzQyOTQyLnBuZ3w2Yzc1ZmY1ZjYwOWIyNWU0ZTgwMjFlYmRkMTU5ZTgzMGI4ZDNmZTE2NjVjYmRlMmUwMmRiODI2OTExNWM5ZTdk"
              alt=""
            />
            <h3>INSTA DELIVERY</h3>
            <p>Less than 3 hrs.</p>
          </div>
          <div>
            <img
              src="https://www.reliancedigital.in/medias/Best-Finance-Options-2.png?context=bWFzdGVyfGltYWdlc3wxMjM4fGltYWdlL3BuZ3xpbWFnZXMvaDJmL2gxOS85NDQ3MTcwNDA4NDc4LnBuZ3xlMDBiNjY4YWI5YzMzYjZkZDhlZTMyMDhjYjE2YzI2OTY2NWJhYjk2M2VkNzdjZDg3NTNlMGEyMTA1ZjFlODZh"
              alt=""
            />
            <h3>BEST FINANCE OPTIONS</h3>
            <p>Wide range</p>
          </div>
          <div>
            <img
              src="https://www.reliancedigital.in/medias/service-img.png?context=bWFzdGVyfGltYWdlc3w5MTB8aW1hZ2UvcG5nfGltYWdlcy9oMDYvaGEzLzkwOTA3OTc5OTQwMTQucG5nfGJjZmJhNzM1ODdkYTQ5ODI3YzNiMzQ1ZTdlM2JjNjUwMTBjM2E3YWFjNmUxZjdmMmEyOGRjZDMxOGI4ZWE0MWY"
              alt=""
            />
            <h3>SERVICE GUARANTEE</h3>
            <p>Hassle free</p>
          </div>
          <div>
            <img
              src="https://www.reliancedigital.in/medias/unmatched-network-img.png?context=bWFzdGVyfGltYWdlc3w3NDV8aW1hZ2UvcG5nfGltYWdlcy9oODIvaDJhLzkwOTA3OTgwNTk1NTAucG5nfDFmMThjYzdiYTNiOTgxYjA5YzdlZTFiMmQyODI5MGY2NTM4ZTcxOWZkZTA1ZjAzY2Q1ZTk5YjQ1NTMxMWViYzU"
              alt=""
            />
            <h3>UNMATCHED NETWORK</h3>
            <p>700 cities,2000 stores</p>
          </div>
        </div>
      </div>
      <div className={styles.boatoffers}>
        <h2>Apple Watches at Best Prices</h2>
        <div>View all</div>
      </div>
    </div>
  );
};

export default Home;
