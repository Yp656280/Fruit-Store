import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
function AddItem() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [organic, setOrganic] = useState(false);
  const location = useLocation();
  const { state } = location;
  const [inputActive2, setInputActive2] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const [category, setCategory] = useState("Select Category");
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const handleAddProduct = (e) => {
    e.preventDefault();

    if (!name) {
      setNameError("Enter a name");
      return;
    }
    if (category === "Select Category") {
      return;
    }
    const data = JSON.parse(localStorage.getItem("Items"));
    if (data) {
      if (state) {
        const data2 = data.filter((cur) => cur.name !== state.data.name);
        data2.push({ name, quantity, organic, category });
        localStorage.setItem("Items", JSON.stringify(data2));
      } else {
        data.push({ name, quantity, organic, category });
        localStorage.setItem("Items", JSON.stringify(data));
      }
      setImage("");
      setQuantity(1);
      setName("");
      setOrganic(false);
      setCategory("Select Category");
      navigate("/admin/products");
    } else {
      localStorage.setItem(
        "Items",
        JSON.stringify([{ name, quantity, organic, category }])
      );
      localStorage.setItem("currentdata", "");
      setImage("");
      setQuantity(1);
      setName("");
      setOrganic(false);
      setCategory("Select Category");
      navigate("/admin/products");
    }
  };
  useEffect(() => {
    if (state) {
      setName(state?.data.name);
      setCategory(state?.data.category);
      setQuantity(state?.data.quantity);
      setOrganic(state?.data.organic);
    }
    const data = JSON.parse(localStorage.getItem("categoryList"));
    setData(data);
  }, []);
  return (
    <div className=" add-category-wrapper">
      <div className=" category-wrapper">
        <div className="category-main">
          <div className=" category-header">
            <h4>Add a Product</h4>
            <span>Enter your product details </span>
          </div>
          <div className="admin-add-item-form">
            <form onSubmit={handleAddProduct}>
              {" "}
              <div className="image-div">
                {" "}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    setImage(URL.createObjectURL(e.target.files[0]));
                  }}
                />
                <img src={image} alt=" " className=" preview-image" />
              </div>
              <fieldset
                className={`${
                  inputActive2 || name
                    ? "top-bar-control-fieldset-active-category"
                    : "top-bar-control-fieldset-category"
                }`}
                onFocusCapture={() => {
                  setInputActive2(true);
                }}
                onBlur={() => {
                  setInputActive2(false);
                }}
              >
                <legend
                  className={`${
                    inputActive2 || name
                      ? "top-bar-control-legend-active-category"
                      : "top-bar-control-legend-category"
                  }`}
                >
                  Enter Product Name
                </legend>
                <input
                  type="text"
                  onChange={(e) => {
                    setNameError("");
                    setName(e.target.value);
                  }}
                  value={name}
                  className=" text-[20px]"
                  //   placeholder="Username"
                />
              </fieldset>{" "}
              <span className=" absolute text-[14px] font-[500] font-[Roboto] text-red-600 -mt-[40px] ml-2">
                {nameError}
              </span>
              <div className=" flex w-full justify-between mb-[1.5rem] mt-[1.5rem] ">
                {" "}
                <div className=" choose-category">
                  <button
                    type="button"
                    className=" choose-category-select "
                    onClick={() => setVisible(!visible)}
                  >
                    {category || "Select Category"}
                    <span className="material-icons"> arrow_drop_down</span>
                  </button>
                  <div
                    className={`${
                      visible ? "visible" : "hidden"
                    }  choose-category-options`}
                  >
                    {data?.map((cur) => (
                      <div
                        onClick={(e) => {
                          setVisible(false);
                          setCategory(cur.name);
                        }}
                      >
                        {cur.name}
                      </div>
                    ))}
                  </div>
                </div>
                <div className=" choose-quantity-organic">
                  <div className="add-quantity">
                    <h1> {quantity}</h1>
                    <div className=" add-quantity-btn">
                      <button
                        className=" add-quantity-btns-1"
                        type="button"
                        onClick={() => {
                          setQuantity(quantity + 1);
                        }}
                      >
                        <span class="material-icons">arrow_drop_up</span>
                      </button>
                      <button
                        className="add-quantity-btns-2"
                        type="button"
                        onClick={() => {
                          quantity > 1 ? setQuantity(quantity - 1) : "";
                        }}
                      >
                        <span class="material-icons">arrow_drop_down</span>
                      </button>
                    </div>
                  </div>
                  <div className=" check-organic">
                    <input
                      type="checkbox"
                      checked={organic}
                      onChange={(e) => {
                        setOrganic(!organic);
                      }}
                      className=" checkout-form-checkbox-green"
                    />
                    <h1> Organic Product</h1>
                  </div>
                </div>
              </div>
              <div></div>
              <button type="submit" className=" admin-category-button">
                {" "}
                ADD
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
