import React from "react";

function Main2() {
  return (
    <div className="features-container">
      <div className="container">
        {" "}
        <div className="item-div">
          <div className="feature-card">
            <div className=" inner-card">
              {" "}
              <div className="feature-icon-container">
                <i className="fas fa-car-side feature-icon"></i>
              </div>
              <div className="feature-arrow"></div>
              <div className="feature-title">Free Shipping</div>
              <div className="feature-description">Free on order over $300</div>
            </div>
          </div>
          <div className="feature-card">
            <div className=" inner-card">
              {" "}
              <div className="feature-icon-container">
                <i className="fas fa-user-shield feature-icon"></i>
              </div>
              <div className="feature-arrow"></div>
              <div className="feature-title">Security Payment</div>
              <div className="feature-description max-xl:pl-2">
                100% security payment{" "}
              </div>
            </div>
          </div>
          <div className="feature-card">
            <div className=" inner-card">
              <div className="feature-icon-container">
                <i className="fas fa-exchange-alt feature-icon"></i>
              </div>
              <div className="feature-arrow"></div>
              <div className="feature-title">30 Day Return</div>
              <div className="feature-description">30 day money guarantee</div>
            </div>
          </div>
          <div className="feature-card">
            <div className=" inner-card">
              <div className="feature-icon-container">
                <i className="fa fa-phone-alt feature-icon"></i>
              </div>
              <div className="feature-arrow"></div>
              <div className="feature-title">24/7 Support</div>
              <div className="feature-description">Support every time fast</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main2;
