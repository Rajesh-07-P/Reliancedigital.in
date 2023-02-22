import React from "react";
import i1 from "../assets/logo.jpeg";

import styles from "./Navbarstyles.module.css";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {



  return (
    <>
      <header className={styles.header}>
        <ul className={styles.headerlink}>
          <li className={styles.headerlinktext}>
            <a href="">Find a store</a>
          </li>
          <li className={styles.headerlinktext}>
            <a href="">Buying guides</a>
          </li>
          <li className={styles.headerlinktext}>
            <a href="">Contact us</a>
          </li>
        </ul>
        <div className={styles.headermain}>
          <img src={i1} className={styles.logo} />
          <div className={styles.searchinputdiv}>
            <input
              type="text"
              placeholder="Find your favourite products"
              className={styles.searchinput}
            />
            <BiSearch />
          </div>
          <ul className={styles.headermainlink}>
            <MdLocationOn />
            <li className={styles.headermainlinktext}>
              {" "}
              Deliver to Warangal 506370
            </li>
            <FaShoppingCart />
            <li className={styles.headermainlinktext}>Cart</li>
            <FaUser />
            <li className={styles.headermainlinktext}>Login</li>
          </ul>
        </div>
      </header>
      <nav className={styles.navcontainer}>
        <ul className={styles.navlist}>
          <li className={styles.navlistitem}>
            <div className={styles.icons}>
              <div>MOBILES & TABLETS</div>
              <FaAngleDown />
            </div>
            <div className={styles.dropdowncontainer1}>
              <div className={styles.dropdownlists}>
                <div>
                  <ul>
                    <li>
                      <a href="">Smartphones</a>
                    </li>
                  </ul>
                  <ul>
                    <li>Smartwatches</li>
                  </ul>
                  <ul>
                    <li>Accessories</li>
                    <li>Tablet accessories</li>
                    <li>Mobile accessories</li>
                    <li>Mobile grips & Stands</li>
                    <li>Car Mobile Holders</li>
                    <li>Memory Cards</li>
                    <li>Cables & Cords</li>
                    <li>Chargers & Adapters</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>Headphones & Headsets</li>
                  </ul>
                  <ul>
                    <li>Tablets & eReaders</li>
                    <li>Every Day use Tablets below 15000</li>
                    <li>Premium Tablets, Above 15001</li>
                  </ul>
                  <ul>
                    <li>Power Banks</li>
                  </ul>
                  <ul>
                    <li>eSlates</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>AI Learning Robots</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className={styles.navlistitem}>
            <div className={styles.icons}>
              <div>TELEVISIONS</div>
              <FaAngleDown />
            </div>
            <div className={styles.dropdowncontainer}>
              <div className={styles.dropdownlists}>
                <div>
                  <ul>
                    <li>
                      <a href="">Telivisions</a>
                    </li>
                    <li>
                      <a href="">Smart TVs</a>
                    </li>
                    <li>
                      <a href="">32 Inch TVs</a>
                    </li>
                    <li>
                      <a href="">43 Inch TVs</a>
                    </li>
                    <li>
                      <a href="">55 Inch Tvs</a>
                    </li>
                    <li>
                      <a href="">Android TVs</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <a href="">Gaming</a>
                    </li>
                    <li>
                      <a href="">Gaming Consoles</a>
                    </li>
                    <li>
                      <a href="">Gaming Accessories</a>
                    </li>
                    <li>
                      <a href="">Gaming Titles</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Projectors</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Streaming Devices</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <a href="">Reconnect Disney | Marvel Audio Collection</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">TV & Audio Accessories</a>
                    </li>
                    <li>
                      <a href="">Virtual Reality Headsets</a>
                    </li>
                    <li>
                      <a href="">Stabilizers & Surge Protectors</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className={styles.navlistitem}>
            {" "}
            <div className={styles.icons}>
              <div>AUDIO</div>
              <FaAngleDown />
            </div>
            <div className={styles.dropdowncontainer}>
              <div className={styles.dropdownlists}>
                <div>
                  <ul>
                    <li>
                      <a href="">Headphones & Headsets</a>
                    </li>
                    <li>
                      <a href="">True Wireless</a>
                    </li>
                    <li>
                      <a href="">Bluetooth Neckbands</a>
                    </li>
                    <li>
                      <a href="">Wired Earphones</a>
                    </li>
                    <li>
                      <a href="">On Ear Headphones</a>
                    </li>
                    <li>
                      <a href="">Noise Cancelling Headphones</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <a href="">Bluetooth & WiFi Speakers</a>
                    </li>
                    <li>
                      <a href="">Bluetooth Speakers </a>
                    </li>
                    <li>
                      <a href="">Smart Speakers</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <a href="">TV Speakers & Soundbars</a>
                    </li>
                    <li>
                      <a href="">Soundbars</a>
                    </li>
                    <li>
                      <a href="">Home Theatre Systems</a>
                    </li>
                    <li>
                      <a href="">Party speakers</a>
                    </li>
                    <li>
                      <a href="">Multimedia</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <a href="">Musical Instruments</a>
                    </li>
                    <li>
                      <a href="">Guitars and Ukuleles</a>
                    </li>
                    <li>
                      <a href="">Microphones</a>
                    </li>
                    <li>
                      <a href="">Musical Keyboards</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className={styles.navlistitem}>
            {" "}
            <div className={styles.icons}>
              <div>HOME APPLIANCES</div>
              <FaAngleDown />
            </div>
            <div className={styles.dropdowncontainer}>
              <div className={styles.dropdownlists}>
                <div>
                  <ul>
                    <li>
                      <a href=""></a>Air Conditioners
                    </li>
                    <li>
                      <a href="">Split Air Conditioners</a>
                    </li>
                    <li>
                      <a href="">Window Air Conditioners</a>
                    </li>
                    <li>
                      <a href="">Smart Air Conditioners</a>
                    </li>
                    <li>
                      <a href="">Energy Efficient Air Conditioners </a>
                    </li>
                    <li>
                      <a href="">1 ton Air Conditioners</a>
                    </li>
                    <li>
                      <a href="">1.5 ton Air Conditioners</a>
                    </li>
                    <li>
                      <a href="">5 star Air Conditioners</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Air Coolers</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Air Purifiers</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <a href="">Washing Machines</a>
                    </li>
                    <li>
                      <a href="">Fully Automatic Front Load</a>
                    </li>
                    <li>
                      <a href="">Fully Automatic Top Load</a>
                    </li>
                    <li>
                      <a href="">Semi-Automatic Top Load</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Refrigerators</a>
                    </li>
                    <li>
                      <a href="">Single Door</a>
                    </li>
                    <li>
                      <a href="">Double Door</a>
                    </li>
                    <li>
                      <a href="">Side by Side Refrigerators</a>
                    </li>
                    <li>
                      <a href="">Convertible</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <a href="">Vacuum Cleaners</a>
                    </li>
                    <li>
                      <a href="">Robotic Vacuum Cleaners</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Dishwashers</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Fans</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Cloth Dryers</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Geysers</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Room Heaters</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className={styles.navlistitem}>
            {" "}
            <div className={styles.icons}>
              <div>COMPUTERS</div>
              <FaAngleDown />
            </div>
            <div
              className={`${styles.dropdowncontainer1} ${styles.container2}`}
            >
              <div className={styles.dropdownlists}>
                <div>
                  <ul>
                    <li>
                      <a href="">Laptops</a>
                    </li>
                    <li>
                      <a href="">Basic use laptops</a>
                    </li>
                    <li>
                      <a href="">Student Laptops</a>
                    </li>
                    <li>
                      <a href="">Thin and light Laptops</a>
                    </li>
                    <li>
                      <a href="">Multi-Tasking Laptops</a>
                    </li>
                    <li>
                      <a href="">Gaming Laptops</a>
                    </li>
                    <li>
                      <a href="">Content creator Laptops</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Computer Monitors</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Desktops & All-In-Ones</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <a href="">Bluetooth & WiFi Speakers</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Internet Connectivity Devices</a>
                    </li>
                    <li>
                      <a href="">Routers</a>
                    </li>
                    <li>
                      <a href="">WiFi Range Extenders</a>
                    </li>
                    <li>
                      <a href="">Wireless USB Adapters</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Printers & Inks</a>
                    </li>
                    <li>
                      <a href="">Printers</a>
                    </li>
                    <li>
                      <a href="">Toners & Ink Cartridges</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Data Storage Devices</a>
                    </li>
                    <li>
                      <a href="">Memory Cards</a>
                    </li>
                    <li>
                      <a href="">Pen Drives & OTG Drives</a>
                    </li>
                    <li>
                      <a href="">Hard Disks & SSD</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <a href="">Computer Accessories</a>
                    </li>
                    <li>
                      <a href="">Upto 72% Off, Only on Reliancedigital.in</a>
                    </li>
                    <li>
                      <a href="">Computer Networking Cables</a>
                    </li>
                    <li>
                      <a href="">Laptop Chargers & Adaptor</a>
                    </li>
                    <li>
                      <a href="">Laptop Batteries</a>
                    </li>
                    <li>
                      <a href="">Hubs & Docks</a>
                    </li>
                    <li>
                      <a href="">Laptop Bags & Sleeves</a>
                    </li>
                    <li>
                      <a href="">Laptop Cooling Pad</a>
                    </li>
                    <li>
                      <a href="">Laptop Screen Protectors</a>
                    </li>
                    <li>
                      <a href="">Laptop Tables & Stands</a>
                    </li>
                    <li>
                      <a href="">Mouse Pads</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Input Devices</a>
                    </li>
                    <li>
                      <a href="">Keyboards</a>
                    </li>
                    <li>
                      <a href="">Computer Mouse</a>
                    </li>
                    <li>
                      <a href="">Stylus Pens</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className={styles.navlistitem}>
            {" "}
            <div className={styles.icons}>
              <div>CAMERAS</div>
              <FaAngleDown />
            </div>
            <div className={[styles.dropdowncontainer]}>
              <div className={styles.dropdownlists}>
                <div>
                  <ul>
                    <li>
                      <a href="">DSLR Cameras</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Mirrorless Cameras</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Point & Shoot Cameras</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">ProSumer Cameras</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Action Cameras</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Photo Storage Devices</a>
                    </li>
                    <li>
                      <a href="">Memory Cards</a>
                    </li>
                    <li>
                      <a href="">Pen Drives</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <a href="">Binoculars</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Camera Lens</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Digital Camera Accessories</a>
                    </li>
                    <li>
                      <a href="">Camera Batteries & Chargers</a>
                    </li>
                    <li>
                      <a href="">Camera bags & cases</a>
                    </li>
                    <li>
                      <a href="">Tripods & Monopods</a>
                    </li>
                    <li>
                      <a href="">Action Camera Accessories</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className={styles.navlistitem}>
            {" "}
            <div className={styles.icons}>
              <div>KITCHEN APPLIANCES</div>
              <FaAngleDown />
            </div>
            <div className={styles.dropdowncontainer}>
              <div className={styles.dropdownlists}>
                <div>
                  <ul>
                    <li>
                      <a href="">Microwave Ovens</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Water Purifiers</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Fruits and Vegetable Cleaner</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Oven Toaster Grillers (OTG)</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Cookwares</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Juicer Mixer Grinders</a>
                    </li>
                    <li>
                      <a href="">Juicers</a>
                    </li>
                    <li>
                      <a href="">Hand Mixers</a>
                    </li>
                    <li>
                      <a href="">Mixer Grinders</a>
                    </li>
                    <li>
                      <a href="">Choppers & Slicers</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <a href="">Induction Cookers</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Food Processors</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Blenders</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Kitchen Hobs & Gas Stoves</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Kitchen Chimneys</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Rice Cookers</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Sandwich Makers</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Popup Toasters</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Coffee Makers & Grinders</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <a href="">Reconnect Disney|Marvel Kitchen Collection</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Air Fryers</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Electric Kettles</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Water Dispensers</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Wet Grinders</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Flour Mills</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className={styles.navlistitem}>
            {" "}
            <div className={styles.icons}>
              <div>PERSONAL CARE</div>
              <FaAngleDown />
            </div>
            <div className={styles.dropdowncontainer}>
              <div className={styles.dropdownlists}>
                <div>
                  <ul>
                    <li>
                      <a href="">Shavers & Trimmers</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Epilators</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Hair Dryers & Stylers</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Weighing Scales</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Irons</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <a href="">Reconnect Disney|Marvel Grooming Collection</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Hygiene & Personal Care</a>
                    </li>
                    <li>
                      <a href="">Digital Thermometers</a>
                    </li>
                    <li>
                      <a href="">Massagers</a>
                    </li>
                    <li>
                      <a href="">Misc. Care Devices</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Garment Steamers</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className={styles.navlistitem}>
            {" "}
            <div className={styles.icons}>
              <div>ACCESSORIES</div>
              <FaAngleDown />
            </div>
            <div className={styles.dropdowncontainer}>
              <div className={styles.dropdownlists}>
                <div>
                  <ul>
                    <li>
                      <a href="">Bags, Cases & Sleeves</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Smart Devices</a>
                    </li>
                    <li>
                      <a href="">Smart Plugs</a>
                    </li>
                    <li>
                      <a href="">Smart Cameras</a>
                    </li>
                    <li>
                      <a href="">Smart Sensors</a>
                    </li>
                    <li>
                      <a href="">Smart Lights</a>
                    </li>
                    <li>
                      <a href="">Smart Speakers</a>
                    </li>
                    <li>
                      <a href="">Smart Tracking Devices</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Batteries</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Power Banks</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Cables & Cords</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Chargers & Adapters</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href=""> Bluetooth & WiFi Speakers</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <a href="">Reconnect Disney | Marvel Accessories</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Data Storage Devices</a>
                    </li>
                    <li>
                      <a href="">Memory Cards</a>
                    </li>
                    <li>
                      <a href="">Pen Drives & OTG Drives</a>
                    </li>
                    <li>
                      <a href="">Hard Disks & SSD</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Mounts & Stands</a>
                    </li>
                    <li>
                      <a href="">Air Conditioner Stands</a>
                    </li>
                    <li>
                      <a href="">Tripods & Monopods</a>
                    </li>
                    <li>
                      <a href="">Selfie Sticks</a>
                    </li>
                    <li>
                      <a href="">Car Mobile Holders</a>
                    </li>
                    <li>
                      <a href="">Laptop Stands</a>
                    </li>
                    <li>
                      <a href="">Mobile Grips & Stands</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Surge Protectors</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Webcams</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>
                      <a href="">Headphones & Headsets</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Cleaners & Protectors</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Computer Mouse</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Keyboards</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Indoor Lighting</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Office Electronics</a>
                    </li>
                    <li>
                      <a href="">Laminators</a>
                    </li>
                    <li>
                      <a href="">Paper Shredders</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Tyre Inflators</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Routers</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Screen Guards & Protectors</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Power Strips & Extension Cords</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="">Stabilizers</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
