import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addProduct } from "../store/productSlice";
import { useDispatch } from "react-redux";
function Card({ data, type = true }) {
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
      <div className="product-card">
        <div className="product-image-container">
          <div className="product-type-badge">
            {data.type[0].toUpperCase() + data.type.slice(1)}
          </div>
          <img className="product-image" src={data.path} alt="" />
        </div>
        <div className="product-details">
          <div className={type ? "product-name-container" : ""}>
            <h1 className="product-name">{data.name}</h1>
          </div>
          <div
            className={
              type
                ? "product-description-container"
                : "product-description-container-x"
            }
          >
            <span className="product-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
              eiusmod te incididunt
            </span>
          </div>
          <div className="product-action-container">
            <span className="product-price">$4.99 / kg</span>
            <button
              onClick={() => {
                if (!added) {
                  addToCart(data);
                }
              }}
              className="add-to-cart-button"
            >
              <i className="fa fa-shopping-bag cart-icon  "></i>
              {added ? <Link to="/cart">Go to cart</Link> : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
