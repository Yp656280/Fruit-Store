import React, { useEffect, useState } from "react";

import DisplayPage from "../DisplayPage";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../store/productSlice";
import { useDispatch } from "react-redux";
function Cart() {
  const dispatch = useDispatch();
  const name = { title: "Cart" };
  const [data, setData] = useState([]);
  const [y, setY] = useState("");
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    setData(data?.flat());
    if (y) {
      // console.log("in4");
      localStorage.setItem("data", JSON.stringify(y));
      setY("");
      // console.log("in5");
    }
  }, [y]);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const deleteItem = (data) => {
    const x = JSON.parse(localStorage.getItem("data")).flat();
    if (x) {
      // console.log("in2");
      setY(x.filter((cur) => cur.path !== data.path));

      dispatch(deleteProduct());
      // console.log("in3");
    }
  };
  const addQuantity = (data) => {
    const x = JSON.parse(localStorage.getItem("data")).flat();
    if (x) {
      const s = x.map((cur) => {
        if (cur.path === data.path) {
          return { ...data, quantity: data.quantity + 1 };
        } else {
          return cur;
        }
      });
      setY(s);
    }
  };
  const removeQuantity = (data) => {
    const x = JSON.parse(localStorage.getItem("data")).flat();
    if (x) {
      const s = x.map((cur) => {
        if (cur.path === data.path) {
          if (data.quantity > 1) {
            return { ...data, quantity: data.quantity - 1 };
          } else {
            return cur;
          }
        } else {
          return cur;
        }
      });
      setY(s);
    }
  };
  const subtTotal = () => {
    const x = JSON.parse(localStorage.getItem("data"))?.flat();
    const price = x?.map((cur) => {
      return Number(
        (parseFloat(cur?.price) * Number(cur?.quantity))?.toFixed(2)
      );
    });
    // console.log(price);
    const subtotal = price?.reduce((acc, cur) => acc + cur, 0);
    // console.log(subtotal);
    return subtotal ? subtotal?.toFixed(2) : 0;
  };
  return (
    <div className="cart-wrapper">
      <DisplayPage data={name} />
      <div className=" cart-wrapper2">
        {" "}
        <div className="cart-container">
          <div className="cart-content">
            <div className=" cart-table">
              <table>
                <thead>
                  <tr className="table-headings">
                    <th className=" products">Products</th>
                    <th className=" name">Name</th>
                    <th className=" price">Price</th>
                    <th className=" quantity">Quantity</th>
                    <th className=" total">Total</th>
                    <th className=" handle">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((cur) => (
                    <tr>
                      <th scope="row">
                        <div className="">
                          <img src={cur?.path} className="cart-img" alt="" />
                        </div>
                      </th>
                      <td>
                        <p className="cart-item-name">{cur?.name}</p>
                      </td>
                      <td>
                        <p className="cart-item-price">{cur?.price}</p>
                      </td>
                      <td>
                        <div className="table-quantity">
                          <button
                            className="cart-quantity-btn"
                            onClick={() => removeQuantity(cur)}
                          >
                            <i className="fa fa-minus"></i>
                          </button>

                          <input
                            type="text"
                            maxLength={2}
                            className="cart-quantity-input"
                            value={cur.quantity}
                          />

                          <button
                            className="cart-quantity-btn"
                            onClick={() => addQuantity(cur)}
                          >
                            <i className="fa fa-plus"></i>
                          </button>
                        </div>
                      </td>
                      <td>
                        <p className="cart-item-total">
                          {" "}
                          {`${(
                            parseFloat(cur?.price) * Number(cur?.quantity)
                          ).toFixed(2)} $`}
                        </p>
                      </td>
                      <td>
                        <button
                          className="cart-delete-btn"
                          onClick={() => deleteItem(cur)}
                        >
                          <i className="fa fa-times text-danger"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* <div className="cart-input-container">
              <input type="text" />
            </div> */}
          </div>
          <div className="cart-coupon-container">
            <input
              type="text"
              className="cart-coupon-input"
              placeholder="Coupon Code"
            />
            <div className="cart-coupon-button">
              <button className="cart-apply-coupon">Apply Coupon</button>
            </div>
          </div>
          <div className="cart-summary-container">
            <div className="cart-summary">
              <div className=" cart-summary-main">
                <div className="cart-summary-title">
                  <div className="cart-summary-title-bold ">
                    Cart
                    <span className="cart-summary-subtitle">Total</span>
                  </div>
                  <div className="cart-summary-subtotal">
                    <p className="cart-summary-label">Subtotal:</p>
                    <p className="cart-summary-value">${Number(subtTotal())}</p>
                  </div>
                  <div className="cart-summary-shipping">
                    <div className="cart-summary-label">
                      Shipping{" "}
                      <p className="cart-summary-shipping-rate">
                        Flat rate: $3.00
                      </p>
                    </div>
                    <div className=" text-right">
                      <p className="cart-summary-shipping-location">
                        Shipping to Ukraine.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="cart-summary-total">
                  <p className="cart-summary-label">Total</p>
                  <p className="cart-summary-value">
                    ${Number(subtTotal()) ? Number(subtTotal()) + 3 : 0}
                  </p>
                </div>
                <button className="cart-proceed-checkout">
                  {Number(subtTotal()) ? (
                    <Link to="/checkout">PROCEED CHECKOUT</Link>
                  ) : (
                    <Link>PROCEED CHECKOUT</Link>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
