import React, { useState } from "react";
import Card from "../Card";
import { useId } from "react";

function Main5() {
  const id = useId();
  const [data, setData] = useState([
    {
      name: "Grapes",
      path: "https://themewagon.github.io/fruitables/img/fruite-item-5.jpg",
      type: "fruit",
      price: "4.99$",
    },
    {
      name: "Raspberries",
      path: "https://themewagon.github.io/fruitables/img/fruite-item-2.jpg",
      type: "bread",
      price: "4.99$",
    },
    {
      name: "Banana",
      path: "https://themewagon.github.io/fruitables/img/fruite-item-3.jpg",
      type: "vegetable",
      price: "4.99$",
    },
    {
      name: "Oranges",
      path: "https://themewagon.github.io/fruitables/img/fruite-item-1.jpg",
      type: "meat",
      price: "4.99$",
    },
    {
      name: "Apricots",
      path: "https://themewagon.github.io/fruitables/img/fruite-item-4.jpg",
      type: "fruit",
      price: "4.99$",
    },
  ]);
  let Maindata = [
    {
      name: "Grapes",
      path: "https://themewagon.github.io/fruitables/img/fruite-item-5.jpg",
      type: "fruit",
      price: "4.99$",
    },
    {
      name: "Raspberries",
      path: "https://themewagon.github.io/fruitables/img/fruite-item-2.jpg",
      type: "bread",
      price: "4.99$",
    },
    {
      name: "Banana",
      path: "https://themewagon.github.io/fruitables/img/fruite-item-3.jpg",
      type: "vegetable",
      price: "4.99$",
    },
    {
      name: "Oranges",
      path: "https://themewagon.github.io/fruitables/img/fruite-item-1.jpg",
      type: "meat",
      price: "4.99$",
    },
    {
      name: "Apricots",
      path: "https://themewagon.github.io/fruitables/img/fruite-item-4.jpg",
      type: "fruit",
      price: "4.99$",
    },
  ];
  const filterData = (type) => {
    if (type === "all") {
      setData(Maindata);
    } else {
      setData(Maindata.filter((cur) => cur.type === type));
      console.log(data);
    }
  };
  const [active, setActive] = useState("allproducts");

  const handleChange = (e) => {
    setActive(e.target.value);
  };

  return (
    <div className="product-section ">
      <div className=" product-container">
        <div className="product-header">
          <h1 className="product-title">Our Organic Products</h1>
          <div className="filter-buttons">
            <div className="filter-div">
              <button
                onClick={(e) => {
                  filterData("all");
                  handleChange(e);
                }}
                value="allproducts"
                className={`filter-button ${
                  active === "allproducts"
                    ? "text-white bg-custom-orange-500"
                    : "text-[#45595b] bg-[#f3f3f3]"
                }`}
              >
                All Products
              </button>
            </div>
            <div className="filter-div">
              <button
                onClick={(e) => {
                  handleChange(e);
                  filterData("vegetable");
                }}
                value="vegetable"
                className={`filter-button ${
                  active === "vegetable"
                    ? "text-white bg-custom-orange-500"
                    : "text-[#45595b] bg-[#f3f3f3]"
                }`}
              >
                Vegetables
              </button>
            </div>

            <div className="filter-div">
              {" "}
              <button
                onClick={(e) => {
                  filterData("fruit");
                  handleChange(e);
                }}
                value="fruits"
                className={`filter-button ${
                  active === "fruits"
                    ? "text-white bg-custom-orange-500"
                    : "text-[#45595b] bg-[#f3f3f3]"
                }`}
              >
                Fruits
              </button>
            </div>

            <div className="filter-div">
              {" "}
              <button
                onClick={(e) => {
                  filterData("bread");
                  handleChange(e);
                }}
                value="bread"
                className={`filter-button ${
                  active === "bread"
                    ? "text-white bg-custom-orange-500"
                    : "text-[#45595b] bg-[#f3f3f3]"
                }`}
              >
                Bread
              </button>
            </div>
            <div className="filter-div">
              <button
                onClick={(e) => {
                  filterData("meat");
                  handleChange(e);
                }}
                value="meat"
                className={`filter-button ${
                  active === "meat"
                    ? "text-white bg-custom-orange-500"
                    : "text-[#45595b] bg-[#f3f3f3]"
                }`}
              >
                Meat
              </button>
            </div>
          </div>
        </div>
        <div className="product-grid">
          {data?.map((cur) => (
            <div key={cur.path} className="product-item">
              <Card data={cur} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main5;
