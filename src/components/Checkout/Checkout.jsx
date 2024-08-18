import React, { useState, useEffect } from "react";
import DisplayPage from "../DisplayPage";
import { useNavigate } from "react-router-dom";
function Checkout() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [extra, setExtra] = useState(0);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    setData(data?.flat());
  }, []);
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
    return subtotal?.toFixed(2);
  };
  const [checked, setChecked] = useState(null);

  const handleChange = (event) => {
    setChecked(event.target.value);
  };
  const add = (x, y) => {
    return x + y;
  };
  const [checked1, setChecked1] = useState(null);

  const handleChange1 = (e) => {
    setChecked1(e.target.value);
  };
  useEffect(() => {
    if (
      localStorage.getItem("login") &&
      localStorage.getItem("login") == "true"
    ) {
    } else {
      navigate("/");
    }
  }, []);
  return (
    <>
      <DisplayPage data={{ title: "Checkout" }} />
      <div className="checkout-wrapper">
        <div className=" checkout-container">
          {" "}
          <div className="checkout-billing-title">Billing details</div>
          <div className="  checkout-item-div">
            <div className="checkout-billing-section">
              <div className="checkout-form-row">
                <label className="checkout-form-label-row">
                  <p>First Name*</p>
                  <input type="text" className="checkout-form-input" />
                </label>
                <label className="checkout-form-label-row">
                  <p>Last Name*</p>
                  <input type="text" className="checkout-form-input" />
                </label>
              </div>
              <label className="checkout-form-label">
                <p>Company Name*</p>
                <input type="text" className="checkout-form-input" />
              </label>
              <label className="checkout-form-label">
                <p>Address*</p>
                <input
                  type="text"
                  placeholder="House Number Street Name"
                  className="checkout-form-input"
                />
              </label>
              <label className="checkout-form-label">
                <p>Town/City*</p>
                <input type="text" className="checkout-form-input" />
              </label>
              <label className="checkout-form-label">
                <p>Country*</p>
                <input type="text" className="checkout-form-input" />
              </label>
              <label className="checkout-form-label">
                <p>PostCode/Zip*</p>
                <input type="text" className="checkout-form-input" />
              </label>
              <label className="checkout-form-label">
                <p>Mobile*</p>
                <input type="text" className="checkout-form-input" />
              </label>
              <label className="checkout-form-label">
                <p>Email Address*</p>
                <input type="text" className="checkout-form-input" />
              </label>
              <label className="checkout-form-label-checkbox">
                <input type="checkbox" className="checkout-form-checkbox" />
                Create an account?{" "}
              </label>
              <hr />
              <label className="checkout-form-label-checkbox">
                <input type="checkbox" className="checkout-form-checkbox" />
                Ship to a different address?{" "}
              </label>
              <div className="checkout-form-textarea">
                <textarea
                  className="checkout-textarea"
                  placeholder="Order Notes (Optional)"
                ></textarea>
              </div>
            </div>
            <div className="checkout-order-section">
              <div className=" checkout-table">
                <table className=" ">
                  <thead>
                    <tr className="table-headings">
                      <th>Products</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.map((cur) => (
                      <tr>
                        <th scope="row">
                          <div className="  mt-[8px]  flex  items-center">
                            <img
                              src={cur?.path}
                              className=" min-h-[90px] min-w-[90px] max-w-[90px] rounded-full  "
                              alt=""
                            />
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
                            <input
                              type="text"
                              maxLength={2}
                              className="checkout-quantity-input"
                              value={cur.quantity}
                            />
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
                      </tr>
                    ))}
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className=" pt-[48px] pb-[48px]">
                        {" "}
                        <div className=" checkout-subtotal-text">Subtotal</div>
                      </td>
                      <td className=" pt-[48px] pb-[48px]">
                        {" "}
                        <div className="checkout-subtotal-amount">
                          ${Number(subtTotal()) ? Number(subtTotal()) : " 0"}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        {" "}
                        <div className="  checkout-shipping-text">Shipping</div>
                      </td>
                      <td colSpan={3}>
                        <div className="checkout-shipping">
                          <div className="checkout-shipping-options">
                            <label>
                              <input
                                type="checkbox"
                                className="checkout-form-checkbox-shipping"
                                checked={checked === "checkbox1"}
                                onChange={(e) => {
                                  handleChange(e);
                                  if (e.target.checked) {
                                    setExtra(0.0);
                                  }
                                }}
                                value="checkbox1"
                              />
                              Free Shipping
                            </label>
                            <label>
                              <input
                                type="checkbox"
                                className="checkout-form-checkbox-shipping"
                                checked={checked === "checkbox2"}
                                value="checkbox2"
                                onChange={(e) => {
                                  handleChange(e);
                                  if (e.target.checked) {
                                    setExtra(15.0);
                                  }
                                }}
                              />
                              Flat rate: $15.00
                            </label>
                            <label>
                              <input
                                type="checkbox"
                                className="checkout-form-checkbox-shipping"
                                onChange={(e) => {
                                  handleChange(e);
                                  if (e.target.checked) {
                                    setExtra(8.0);
                                  }
                                }}
                                checked={checked === "checkbox3"}
                                value="checkbox3"
                              />
                              Local Pickup: $8.00
                            </label>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td className=" checkout-total">
                        <div className=" checkout-total-text">TOTAL</div>
                      </td>
                      <td></td>
                      <td></td>
                      <td className=" checkout-total">
                        {" "}
                        <div className=" checkout-total-number">
                          {`$ ${(
                            parseFloat(subtTotal()) + parseFloat(extra)
                          ).toFixed(2)}`}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="checkout-payment-option">
                <div className="checkout-payment-option-container-label">
                  <input
                    type="checkbox"
                    className="checkout-form-checkbox-shipping"
                    value="checkbox1"
                    checked={checked1 === "checkbox1"}
                    onChange={handleChange1}
                  />
                  Direct Bank Transfer
                </div>
                <div className="checkout-payment-description">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </div>
              </div>
              <div className=" checkout-payment-option">
                <div className="checkout-payment-option-container-label">
                  <input
                    type="checkbox"
                    className="checkout-form-checkbox-shipping"
                    value="checkbox2"
                    checked={checked1 === "checkbox2"}
                    onChange={handleChange1}
                  />
                  Check Payments
                </div>
              </div>
              <div className="checkout-payment-option">
                <div className="checkout-payment-option-container-label">
                  <input
                    type="checkbox"
                    className="checkout-form-checkbox-shipping"
                    value="checkbox3"
                    checked={checked1 === "checkbox3"}
                    onChange={handleChange1}
                  />
                  Cash On Delivery
                </div>
              </div>
              <div className="checkout-payment-option">
                <div className="checkout-payment-option-container-label">
                  <input
                    type="checkbox"
                    className="checkout-form-checkbox-shipping"
                    value="checkbox4"
                    checked={checked1 === "checkbox4"}
                    onChange={handleChange1}
                  />
                  Paypal
                </div>
              </div>
              <div className="checkout-place-order">
                <button className="checkout-place-order-button">
                  PLACE ORDER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
