import React from "react";
import appleImg from "../../assets/apple.jpg";
import strawberryImg from "../../assets/strawberry.jpg";
import brocolliImg from "../../assets/brocolli.jpg";

function Main4() {
  return (
    <div className="main4-product-grid">
      <div className="main4-container">
        <div className=" main4-item-div">
          {" "}
          <div className="main4-product-item">
            <div className="main4-product-card main4-apple-card">
              <div className="main4-product-image-container">
                <img
                  src={appleImg}
                  className="main4-product-image"
                  alt="Apple"
                />
              </div>
              <div className="main4-card-footer main4-apple-footer">
                <div className="main4-product-badge main4-apple-badge">
                  <div className="main4-badge-title">Fresh Apples</div>
                  <div className="main4-badge-discount">20% OFF</div>
                </div>
              </div>
            </div>
          </div>
          <div className="main4-product-item">
            <div className="main4-product-card main4-strawberry-card">
              <div className="main4-product-image-container">
                <img
                  src={strawberryImg}
                  className="main4-product-image"
                  alt="Strawberry"
                />
              </div>
              <div className="main4-card-footer main4-strawberry-footer">
                <div className="main4-product-badge main4-strawberry-badge">
                  <div className="main4-badge-title">Tasty Fruits</div>
                  <div className="main4-badge-offer">Free delivery</div>
                </div>
              </div>
            </div>
          </div>
          <div className="main4-product-item">
            <div className="main4-product-card main4-broccoli-card">
              <div className="main4-product-image-container">
                <img
                  src={brocolliImg}
                  className="main4-product-image"
                  alt="Broccoli"
                />
              </div>
              <div className="main4-card-footer main4-broccoli-footer">
                {" "}
                <div className="main4-product-badge main4-broccoli-badge">
                  <div className="main4-badge-title">Exotic Vegetable</div>
                  <div className="main4-badge-discount">Discount 30$</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main4;
