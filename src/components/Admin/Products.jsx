import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import EditComponent from "./EditComponent";

function Products() {
  const [temp, setTemp] = useState(true);
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(false);
  const [category, setCategory] = useState([]);
  const [sort, setSort] = useState(true);
  const [inputActive, setInputActive] = useState(false);
  const handleFilter = (name) => {
    const data1 = JSON.parse(localStorage.getItem("Items"));

    if (name === "All") {
      setData(data1);
    } else {
      setData(data1.filter((cur) => cur.category === name));
    }
  };
  const handleSort = () => {
    const data1 = data;
    if (sort) {
      setData(data1.sort((a, b) => a.name.localeCompare(b.name)));
      setSort(!sort);
    } else {
      setData(data1.sort((a, b) => b.name.localeCompare(a.name)));
      setSort(!sort);
    }
  };
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("Items")));
    setCategory(JSON.parse(localStorage.getItem("categoryList")));
  }, []);
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("Items")));
  }, [temp]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const data1 = JSON.parse(localStorage.getItem("Items"));

    setData(data1.filter((cur) => cur.name.includes(search)));
  }, [search]);
  return (
    <>
      {" "}
      <div className=" search-bar">
        <fieldset
          className={`${
            inputActive
              ? "top-bar-control-fieldset-active"
              : "top-bar-control-fieldset"
          }`}
          onFocusCapture={() => {
            setInputActive(true);
          }}
          onBlur={() => {
            setInputActive(false);
          }}
        >
          <legend
            className={`${
              inputActive
                ? "top-bar-control-legend-active"
                : "top-bar-control-legend"
            }`}
          >
            search here
          </legend>
          <input
            type="text"
            className=" top-bar-control-input"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </fieldset>
        <button className=" add-delete-buttons-1">
          <Link to="/admin/additem">Add a Product</Link>
        </button>
      </div>
      <div className=" admin-fresh-fruits">
        <div className=" admin-fresh-fruits-container">
          <div className=" product-table-heading">
            {" "}
            Products
            <button onClick={() => setVisible(!visible)}>
              <span className=" material-icons">filter_alt</span>
            </button>
            <div
              className={`${
                visible
                  ? " absolute flex flex-col"
                  : " flex-col absolute invisible"
              }  filter-div`}
            >
              <div
                onClick={(e) => {
                  handleFilter("All");
                  setVisible(false);
                }}
              >
                All
              </div>
              {category.map((cur) => (
                <div
                  onClick={(e) => {
                    handleFilter(cur.name);
                    setVisible(false);
                  }}
                >
                  {cur.name}
                </div>
              ))}
            </div>
          </div>
          <div className=" admin-fruits-table">
            <table>
              <thead>
                <th
                  className=" w-[45%] cursor-pointer   "
                  onClick={() => handleSort()}
                >
                  <div className=" flex  items-center">
                    {" "}
                    Category Name
                    <div className=" flex flex-col">
                      <span
                        className={` material-icons  ${
                          !sort ? "absolute invisible" : ""
                        } `}
                      >
                        {" "}
                        arrow_drop_up
                      </span>
                      <span
                        className={` material-icons  ${
                          sort ? "absolute invisible" : ""
                        } `}
                      >
                        {" "}
                        arrow_drop_down
                      </span>
                    </div>
                  </div>
                </th>{" "}
                <th className=" w-[150px]">Category</th>
                <th className=" w-[150px] text-center"> Quantity</th>
                <th className=" w-[200px] text-center">Organic</th>
                <th className=" w-[150px]"> Edit</th>
              </thead>
              <tbody>
                {data?.map((cur) => (
                  <tr>
                    <td>
                      <div className=" fresh-fruits-table-row">
                        <img
                          src="https://themewagon.github.io/fruitables/img/fruite-item-2.jpg"
                          alt=""
                        />
                        {cur.name}
                      </div>
                    </td>
                    <td>
                      <div className=" fresh-fruits-table-row-status">
                        {" "}
                        {cur.category}
                      </div>
                    </td>
                    <td>
                      {" "}
                      <div className=" fresh-fruits-table-quantity">
                        {cur.quantity}
                      </div>
                    </td>
                    <td>
                      {" "}
                      <div className="fresh-fruits-table-organic ">
                        {cur.organic ? "yes" : "no"}
                      </div>
                    </td>
                    <td>
                      <EditComponent data={cur} temp={temp} setTemp={setTemp} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
