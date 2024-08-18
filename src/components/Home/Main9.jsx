import React, { useState, useEffect } from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Card9 from "../Card9";
import { useMediaQuery } from "react-responsive";
import { useId } from "react";

function Main9({ title = "Fresh Organic Vegetables", state = true }) {
  const buttonStyle = {};
  let Maindata = [
    {
      name: "Potatoes",
      path: "https://themewagon.github.io/fruitables/img/vegetable-item-5.jpg",
      type: "vegetable",
      price: "4.99$",
    },
    {
      name: "Parsely",
      path: "https://themewagon.github.io/fruitables/img/vegetable-item-6.jpg",
      type: "vegetable",
      price: "4.99$",
    },
    {
      name: "Bell Paper",
      path: "https://themewagon.github.io/fruitables/img/vegetable-item-4.jpg",
      type: "vegetable",
      price: "4.99$",
    },
    {
      name: "Tomato",
      path: "https://themewagon.github.io/fruitables/img/vegetable-item-1.jpg",
      type: "vegetable",
      price: "4.99$",
    },
    {
      name: "Potatoes",
      path: "https://themewagon.github.io/fruitables/img/vegetable-item-5.jpg",
      type: "vegetable",
      price: "4.99$",
    },
    {
      name: "Parsely",
      path: "https://themewagon.github.io/fruitables/img/vegetable-item-6.jpg",
      type: "vegetable",
      price: "4.99$",
    },
    {
      name: "Bell Paper",
      path: "https://themewagon.github.io/fruitables/img/vegetable-item-4.jpg",
      type: "vegetable",
      price: "4.99$",
    },
  ];
  const id = useId;
  const properties = {
    prevArrow: (
      <button
        className=" flex justify-center items-center main9-button-Style left-button "
        style={{ left: "86.3%" }}
      >
        <i class="bi bi-arrow-right"></i>
        {/* <svg
          width="20px"
          height="20px"
          viewBox="0 0 1024 1024"
          class="icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
            fill="#ffff"
          />
        </svg>{" "} */}
      </button>
    ),
    nextArrow: (
      <button
        className=" flex justify-center items-center mr-5 main9-button-Style"
        style={{ right: "0px" }}
      >
        <i class="bi bi-arrow-left"></i>
        {/* <svg
          width="20px"
          height="20px"
          viewBox="0 0 1024 1024"
          className="icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
            fill="#ffff"
          />
        </svg> */}
      </button>
    ),
  };
  const isNarrow = useMediaQuery({ query: "(max-width: 1200px)" });
  const isNarrow2 = useMediaQuery({ query: "(max-width: 992px)" });
  const isNarrow3 = useMediaQuery({ query: "(max-width: 768px)" });

  const [narrow, setnarrow] = useState(4);
  useEffect(() => {
    if (isNarrow3) {
      setnarrow(1);
    } else if (isNarrow2) {
      setnarrow(2);
    } else if (isNarrow) {
      setnarrow(3);
    } else {
      setnarrow(4);
    }
  }, [isNarrow, isNarrow2, isNarrow3]);
  return (
    <div className={`${state ? "main9-container" : "main9-container-x"}`}>
      <div className=" main9-Container ">
        {" "}
        <div className={`${state ? "main9-title" : "main9-title-x"}`}>
          {title}
        </div>
        <Slide
          cssClass="main9-slide"
          {...properties}
          slidesToScroll={1}
          slidesToShow={narrow}
        >
          {Maindata.map((cur) => (
            <div key={id} className="main9-slide-item">
              <Card9 state={state} data={cur} />
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
}

export default Main9;
