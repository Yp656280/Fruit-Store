import React from "react";

function Card6_2({ data }) {
  return (
    <>
      <div key={data.name} className="card6_2-container">
        <img className="card6_2-image" src={data.url} alt="" />
        <div className="card6_2-content">
          <h1 className="card6_2-title">Organic Tomato</h1>
          <div className="card6_2-rating">
            <i className="fas fa-star card6_2-star-filled"></i>
            <i className="fas fa-star card6_2-star-filled"></i>
            <i className="fas fa-star card6_2-star-filled"></i>
            <i className="fas fa-star card6_2-star-filled"></i>
            <i className="fas fa-star card6_2-star-empty"></i>
          </div>
          <div className="card6_2-price">3.12 $</div>
          <button className="card6_2-button">
            <i className="fa fa-shopping-bag card6_2-button-icon  mr-[8px]"></i>
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Card6_2;
