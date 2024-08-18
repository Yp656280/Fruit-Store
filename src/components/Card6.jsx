import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addProduct } from "../store/productSlice";
import { useDispatch } from "react-redux";

function Card6({ data }) {
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
    <div className="card6-container">
      <div className="card6-inner">
        <div className="card6-image-container">
          <img src={data.url} className=" rounded-full" alt="" />
        </div>
        <div className="card6-content">
          <div className="card6-title">Organic Tomato</div>
          <div className=" card6-star-container">
            <i className="fas fa-star card6-star"></i>
            <i className="fas fa-star card6-star"></i>
            <i className="fas fa-star card6-star"></i>
            <i className="fas fa-star card6-star"></i>
            <i className="fas fa-star card6-star-inactive"></i>
          </div>
          <div className="card6-price">3.12 $</div>
          <div>
            <button
              onClick={() => {
                if (!added) {
                  addToCart(data);
                }
              }}
              className="card6-button "
            >
              <i className="fa fa-shopping-bag me-2 mr-[12px] card6-button-icon"></i>
              Add to cart
              {/* {added ? <Link to="/cart">Go to cart</Link> : "Add to cart"} */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card6;
