import React from "react";
import bannerimg from "../../assets/baner.png";

function Main3() {
  return (
    <div className="main3-container">
      <div className=" main3-inner-container">
        {" "}
        <div className=" main3-item-div">
          <div className="main3-content">
            <h1 className="main3-title">Fresh Exotic Fruits</h1>
            <h1 className="main3-subtitle">in Our Store</h1>
            <span className="main3-description">
              The generated Lorem Ipsum is therefore always free from repetition
              injected humour, or non-characteristic words etc.
            </span>
            <button className="main3-button">BUY</button>
          </div>
          <div className="main3-image-container">
            <div className="main3-image">
              <img src={bannerimg} alt="" />
              <div className="main3-price-circle">
                <div className="main3-price-number">1</div>
                <div className="main3-price-details">
                  <span className="main3-price-amount">50$</span>
                  <span className="main3-price-unit">kg</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main3;
