import React from "react";
import Card6 from "../Card6";
import Card6_2 from "../Card6_2";

// import { useId } from "react";
function Main6() {
  // const id = useId();
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
  const data = [
    {
      name: "Oranges",

      url: "https://themewagon.github.io/fruitables/img/best-product-1.jpg",
    },
    {
      name: "Raspberries",

      url: "https://themewagon.github.io/fruitables/img/best-product-2.jpg",
    },
    {
      name: "Banana",

      url: "https://themewagon.github.io/fruitables/img/best-product-3.jpg",
    },
    {
      name: "Apricots",
      url: "https://themewagon.github.io/fruitables/img/best-product-4.jpg",
    },
    {
      name: "Grapes",
      url: "https://themewagon.github.io/fruitables/img/best-product-5.jpg",
    },
    {
      name: "",
      url: "https://themewagon.github.io/fruitables/img/best-product-6.jpg",
    },
  ];
  const data2 = [
    {
      name: "Oranges",

      url: "https://themewagon.github.io/fruitables/img/fruite-item-1.jpg",
    },
    {
      name: "Raspberries",

      url: "https://themewagon.github.io/fruitables/img/fruite-item-2.jpg",
    },
    {
      name: "Banana",

      url: "https://themewagon.github.io/fruitables/img/fruite-item-3.jpg",
    },
    {
      name: "Apricots",
      url: "https://themewagon.github.io/fruitables/img/fruite-item-4.jpg",
    },
  ];
  return (
    <div className="main6-wrapper">
      <div className="main6-container">
        <div className="main6-header">
          <h1 className="main6-title">Bestseller Products</h1>
          <span className="main6-description">
            Latin words, combined with a handful of model sentence structures,
            to generate Lorem Ipsum which looks reasonable.
          </span>
        </div>
        <div className=" main6-items-div">
          {data.map((cur) => (
            <div className=" main6-3-card-container">
              <Card6 data={cur} key={cur.path} />
            </div>
          ))}
          {data2.map((cur) => (
            <div key={cur.path} className="main6-card-container">
              <Card6_2 data={cur} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main6;
