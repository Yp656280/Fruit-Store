import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { addProduct } from "../store/productSlice";
import { useDispatch } from "react-redux";
function Card({ data, state = true }) {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  const addToCart = async (data) => {
    data = { ...data, quantity: 1 };
    const x = JSON.parse(localStorage.getItem("data"));
    if (x) {
      const f = x?.find((el) => el.name === data.name);
      if (x[1]) {
        if (!f) {
          localStorage.setItem("data", JSON.stringify([data, ...x]));
          dispatch(addProduct());
          setAdded(true);
        }
      } else {
        if (!f) {
          localStorage.setItem("data", JSON.stringify([data, x]));
          dispatch(addProduct());

          setAdded(true);
        }
      }
    } else {
      localStorage.setItem("data", JSON.stringify([data]));
      dispatch(addProduct());

      setAdded(true);
    }
  };
  useEffect(() => {
    const x = JSON.parse(localStorage.getItem("data"));
    const f = x?.find((el) => el.name === data.name);
    if (f) {
      setAdded(true);
    }
  }, []);
  return (
    <>
      <div className=" card9-main">
        {" "}
        <div className="card9-container">
          <div className="card9-image-container">
            <img className="card9-image  " src={data.path} alt="" />
            <div className="card9-type-label">
              {data.type[0].toUpperCase() + data.type.slice(1)}
            </div>
          </div>
          <div className={`${state ? "card9-content" : "card9-content-x"}`}>
            <h1 className="card9-title">{data.name}</h1>
            <span className="card9-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
              eiusmod te incididunt
            </span>
            <div className={`${state ? "card9-footer" : "card9-footer-x"}`}>
              <span className={`${state ? "card9-price" : "card9-price-x"}`}>
                $4.99 / kg
              </span>
              <button
                onClick={() => {
                  if (!added) {
                    addToCart(data);
                  }
                }}
                className={`${state ? "card9-button" : "card9-button-x"}`}
              >
                <i className="fa fa-shopping-bag me-2 card9-button-icon"></i>
                {added ? <Link to="/cart">Go to cart</Link> : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
