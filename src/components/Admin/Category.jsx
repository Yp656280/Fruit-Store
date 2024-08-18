import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import UpdateCategory from "./UpdateCategory";
function Category() {
  const [name, setName] = useState("");
  const [name2, setName2] = useState("");
  const [temp, setTemp] = useState(false);
  const [updatedName, setUpdatedName] = useState({});
  const [visible, setVisible] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [data, setData] = useState([]);
  const [inputActive2, setInputActive2] = useState(false);
  const [nameError, setNameError] = useState("");
  const [nameError2, setNameError2] = useState("");
  const [selectedItem, setSelectedItem] = useState([]);
  const inputRef = useRef(null);
  const inputRef1 = useRef(null);
  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!name || !name.trimStart()) {
      setNameError("please enter category name");
      return;
    }
    const category = JSON.parse(localStorage.getItem("categoryList"));
    if (category) {
      category.push({ name, id: Math.random().toString().substr(5, 5) });
      localStorage.setItem("categoryList", JSON.stringify(category));
      setVisible(false);
      setTemp(!temp);
      setName("");
    } else {
      localStorage.setItem(
        "categoryList",
        JSON.stringify([{ name, id: Math.random().toString().substr(5, 5) }])
      );
      setVisible(false);
      setTemp(!temp);
      setName("");
    }
  };
  const handleUpdateCategory = (e) => {
    e.preventDefault();
    if (!name2 || !name2.trimStart()) {
      setNameError2("please enter category name");
      return;
    }
    let category = JSON.parse(localStorage.getItem("categoryList"));
    category = category.filter((cur) => cur.id !== updatedName.id);
    category.push({ name: name2, id: updatedName.id });
    localStorage.setItem("categoryList", JSON.stringify(category));
    setVisible3(false);
    setTemp(!temp);
    setName("");
    setUpdatedName({});
  };
  const addItem = (e, id, category) => {
    console.log(category);
    if (e.target.checked) {
      const data = [...selectedItem, { id, category }];
      setSelectedItem(data);
    } else if (!e.target.checked) {
      setSelectedItem(selectedItem.filter((cur) => cur.id !== id));
    }
  };
  const handleSelectAll = (e) => {
    const data = JSON.parse(localStorage.getItem("categoryList"));
    if (e.target.checked) {
      setSelectedItem(data.map((cur) => ({ id: cur.id, category: cur.name })));
    } else if (!e.target.checked) {
      setSelectedItem([]);
    }
  };
  const handleDelete = () => {
    let data = JSON.parse(localStorage.getItem("categoryList"));
    let items = JSON.parse(localStorage.getItem("Items"));
    let present;
    items.forEach((cur) => {
      selectedItem.forEach((el) => {
        if (cur.category === el.category) {
          present = true;
        }
      });
    });
    console.log(present);
    if (present) {
      setVisible4(true);
    } else {
      selectedItem.map((cur) => {
        data = data.filter((el) => el.id !== cur.id);
      });
      localStorage.setItem("categoryList", JSON.stringify(data));
      setSelectedItem([]);
      setTemp(!temp);
    }
  };
  const handleEdit = (data) => {
    setVisible3(true);
    setName2(data.name);
    setUpdatedName({ name: data.name, id: data.id });
  };
  useEffect(() => {
    inputRef.current.focus();
    inputRef1.current.focus();
  }, [visible, visible3]);
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("categoryList")));
  }, []);
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("categoryList")));
  }, [temp]);
  const [search, setSearch] = useState("");
  const [inputActive, setInputActive] = useState("");
  useEffect(() => {
    const data1 = JSON.parse(localStorage.getItem("categoryList"));

    setData(data1.filter((cur) => cur.name.includes(search)));
  }, [search]);
  const [sort, setSort] = useState(true);
  const handleSort = () => {
    const data1 = JSON.parse(localStorage.getItem("categoryList"));
    if (sort) {
      setData(data1.sort((a, b) => a.name.localeCompare(b.name)));
      setSort(!sort);
    } else {
      setData(data1.sort((a, b) => b.name.localeCompare(a.name)));
      setSort(!sort);
    }
  };
  return (
    <>
      <div
        className={`add-category-overlay ${visible ? `felx ` : " hidden"}`}
        onClick={() => setVisible(false)}
      >
        <div className=" add-category-wrapper">
          <div className=" category-wrapper">
            <div className="category-main-x">
              <div
                className=" category-header"
                onClick={(e) => e.stopPropagation()}
              >
                <h4>Add a Category</h4>
                <span>Enter your Category name </span>
              </div>
              <div
                className="admin-add-item-form-x"
                onClick={(e) => e.stopPropagation()}
              >
                <form onSubmit={handleAddCategory}>
                  {" "}
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
                      Enter Category Name
                    </legend>
                    <input
                      type="text"
                      onChange={(e) => {
                        setNameError("");
                        setName(e.target.value);
                      }}
                      ref={inputRef}
                      value={name}
                      className=" text-[20px]"

                      //   placeholder="Username"
                    />
                  </fieldset>{" "}
                  <span className=" absolute text-[14px] font-[500] font-[Roboto] text-red-600 -mt-[40px] ml-2">
                    {nameError}
                  </span>
                  <button type="submit" className=" admin-category-button">
                    {" "}
                    ADD
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`add-category-overlay ${visible3 ? "felx" : " hidden"}`}
        onClick={() => setVisible3(false)}
      >
        <div className=" add-category-wrapper">
          <div className=" category-wrapper">
            <div className="category-main-x">
              <div
                className=" category-header"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <h4>Update Category</h4>
                <span>Enter your Category name </span>
              </div>
              <div
                className="admin-add-item-form-x"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <form onSubmit={handleUpdateCategory}>
                  {" "}
                  <fieldset
                    className={`${
                      inputActive2 || name2
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
                        inputActive2 || name2
                          ? "top-bar-control-legend-active-category"
                          : "top-bar-control-legend-category"
                      }`}
                    >
                      Enter Category Name
                    </legend>
                    <input
                      type="text"
                      onChange={(e) => {
                        setNameError2("");
                        setName2(e.target.value);
                      }}
                      ref={inputRef1}
                      value={name2}
                      className=" text-[20px]"
                      //   placeholder="Username"
                    />
                  </fieldset>{" "}
                  <span className=" absolute text-[14px] font-[500] font-[Roboto] text-red-600 -mt-[40px] ml-2">
                    {nameError2}
                  </span>
                  <button type="submit" className=" admin-category-button">
                    {" "}
                    ADD
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div
        className={`add-category-overlay  ${visible4 ? "felx" : " hidden"}`}
        onClick={(e) => {
          setVisible4(false);
        }}
      >
        <div className=" add-category-wrapper">
          <div className=" category-wrapper ">
            <div className="category-main-x ">
              <div
                className=" category-delete-header "
                onClick={(e) => e.stopPropagation()}
              >
                <h4>Delete</h4>
              </div>
              <div
                className="admin-add-item-form-x "
                onClick={(e) => e.stopPropagation()}
              >
                <div className=" delete-warning">
                  {" "}
                  Please first delete all products in this category.
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="search-bar">
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
        <button
          className=" add-delete-buttons-1"
          onClick={() => setVisible(true)}
        >
          <Link>Add a Category</Link>
        </button>{" "}
      </div>
      <div className=" admin-fresh-fruits">
        <div className=" admin-fresh-fruits-container">
          {" "}
          <div className=" category-table-heading">Categories</div>
          <div className=" category-fruits-table">
            <table>
              <thead>
                <th className=" w-[50px]">
                  {" "}
                  <input
                    type="checkbox"
                    className="checkout-form-checkbox"
                    onClick={(e) => handleSelectAll(e)}
                    checked={
                      (selectedItem.length === data.length &&
                        selectedItem.length !== 0) ||
                      false
                    }
                  />
                </th>
                <th
                  className=" w-[45%] cursor-pointer flex text-nowrap"
                  onClick={() => handleSort()}
                >
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
                </th>
                <th className=" ">Category Id</th>
                <th className=" w-[150px]"> Edit</th>
              </thead>
              <tbody>
                {data?.map((cur) => (
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        className="checkout-form-checkbox"
                        onClick={(e) => addItem(e, cur.id, cur.name)}
                        checked={
                          selectedItem.find((ele) => ele.id === cur.id) || false
                        }
                      />
                    </td>
                    <td>
                      <div className=" fresh-fruits-table-row">
                        <img
                          src="https://themewagon.github.io/fruitables/img/fruite-item-2.jpg"
                          alt=""
                        />
                        {cur.name}
                      </div>
                    </td>
                    <td>{cur.id}</td>
                    <td>
                      <UpdateCategory
                        handleEdit={handleEdit}
                        cur={cur}
                        temp={temp}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="delete-button-container">
        <button
          className={` ${
            selectedItem.length > 0 ? "flex" : "hidden"
          } delete-buttons`}
          onClick={() => handleDelete()}
        >
          Delete
        </button>{" "}
      </div>
    </>
  );
}

export default Category;
