import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"


import Arrow from "../assets/arrow_left.png";
import Merch1 from "../assets/merch1.png";
import Merch2 from "../assets/merch2.png";
import Merch3 from "../assets/merch3.png";

import Shirt1_front from "../assets/shirtOne_front.png";
import Shirt1_back from "../assets/shirtOne_back.png";
import Shirt2_front from "../assets/shirtTwo_front.png";
import Shirt2_back from "../assets/shirtTwo_back.png";
import Shirt3_front from "../assets/shirtThree_front.png";
import Shirt3_back from "../assets/shirtThree_back.png";
import Shirt4_front from "../assets/shirtFour_front.png";
import Shirt4_back from "../assets/shirtFour_back.png";

import shirt5 from "../assets/shirt5.png"
import shirt6 from "../assets/shirt6.png"
import shirt7 from "../assets/shirt7.png"
import shirt8 from "../assets/shirt8.png"
import shirt9 from "../assets/shirt9.png"
import shirt10 from "../assets/shirt10.png"

import shirt5_back from "../assets/shirt5_back.png"
import shirt6_back from "../assets/shirt6_back.png"
import shirt7_back from "../assets/shirt7_back.png"
import shirt8_back from "../assets/shirt8_back.png"
import shirt9_back from "../assets/shirt9_back.png"
import shirt10_back from "../assets/shirt10_back.png"

import "./New_Shop_Bar.css";

export default function MenuBar() {
    const [isHovered, setIsHovered] = useState(false);

    const scrollHandler = (direction) => {
        console.log("Arrow clicked", direction);
        const menu = document.getElementById("menu_sec");
        const scrollAmount = 320;
        if (menu) {
            menu.scrollBy({ left: direction === "right" ? scrollAmount : -scrollAmount, behavior: "smooth" });
        }
    };
    const navigate = useNavigate();
    

    const handleImageClick = (id) => {
      localStorage.setItem("clickedItem", JSON.stringify(id));
      console.log("Item added to local storage:", id);
      navigate("/shopdetails")
    };

    return (
        <div className="shopBar">
          
            <img
                src={Arrow}
                alt="left arrow"
                className="left_arroww"
                id="left_arrow"
                onClick={() => scrollHandler("left")}
            ></img>
            
            <div className="menu_secc" id="menu_sec">

              <div className="item_con_one">
                <div className="image-wrapperr" onClick={() => handleImageClick("shirt6")}>
                  <img src={shirt6} className="image-front" loading="lazy"/>
                  <img src={shirt6_back} className="image-back" loading="lazy" />
                </div>
                <p className="shop_label">Band Member Photo Tee</p>

              </div>
              <div className="item_con_one">
                <div className="image-wrapperr" onClick={() => handleImageClick("shirt8")}>
                  <img src={shirt8} className="image-front" loading="lazy"/>
                  <img src={shirt8_back} className="image-back" loading="lazy" />
                </div>
                <p className="shop_label">On Tour White Tee</p>

              </div>
              <div className="item_con_one">
                <div className="image-wrapperr" onClick={() => handleImageClick("shirt4")}>
                  <img src={Shirt4_front} className="image-front" loading="lazy"/>
                  <img src={Shirt4_back} className="image-back" loading="lazy" />
                </div>
                <p className="shop_label">Stage Fright Classic Black Tee</p>

              </div>




              <div className="item_con_one">
                <div className="image-wrapperr" onClick={() => handleImageClick("shirt9")}>
                  <img src={shirt9} className="image-front" loading="lazy"/>
                  <img src={shirt9_back} className="image-back" loading="lazy" />
                </div>
                <p className="shop_label">Stage Fright Rocker Tee</p>

              </div>
              <div className="item_con_one">
                <div className="image-wrapperr" onClick={() => handleImageClick("shirt10")}>
                  <img src={shirt10} className="image-front" loading="lazy"/>
                  <img src={shirt10_back} className="image-back" loading="lazy" />
                </div>
                <p className="shop_label">Stage Photo Tee</p>

              </div>
              <div className="item_con_one">
                <div className="image-wrapperr" onClick={() => handleImageClick("shirt3")}>
                  <img src={Shirt3_front} className="image-front" loading="lazy"/>
                  <img src={Shirt3_back} className="image-back" loading="lazy" />
                </div>
                <p className="shop_label">Stage Fright Classic Graphic Tee</p>
              </div>
              

                
            </div>
            
            <img
                src={Arrow}
                alt="right arrow"
                className="right_arroww"
                id="right_arrow"
                onClick={() => scrollHandler("right")}
            ></img>
            
        </div>
    );
}
