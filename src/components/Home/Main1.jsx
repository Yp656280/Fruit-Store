import React, { useState } from "react";
import bgImg from "../../assets/background.jpg";
import Img1 from "../../assets/hero-img-1.png";
import { Slide } from "react-slideshow-image";
import Img2 from "../../assets/hero-img-2.jpg";
import "react-slideshow-image/dist/styles.css";
import { forwardRef } from "react";

const Main1 = forwardRef(function Main1(props, ref) {
  const images = [{ url: Img1 }, { url: Img2 }];
  // const divStyle = {
  //   borderRadius: "25px",
  //   zIndex: "2",
  //   overflow: "hidden",
  //   border: "solid black 1px",
  // };
  const buttonStyle = {
    width: "46.4px",
    background: "",
    border: "0px",
    height: "46.4px",
    borderRadius: "100%",
    // backgroundColor: "rgba(147,202,48,0.5)",
    zIndex: 1,
  };
  const style = {
    height: "100%",
    width: "100%",
  };
  const properties = {
    prevArrow: (
      <button
        className=" flex justify-center items-center ml-5 bg-[rgba(147,202,48,0.5)] hover:bg-custom-green-500   "
        style={{ ...buttonStyle }}
      >
        <svg
          width="22px"
          height="25px"
          viewBox="0 0 1024 1024"
          className="icon opacity-70 hover:opacity-100"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z"
            fill="#ffff"
          />
        </svg>{" "}
      </button>
    ),
    nextArrow: (
      <button
        className=" flex justify-center items-center mr-5 bg-[rgba(147,202,48,0.5)] hover:bg-custom-green-500  "
        style={{ ...buttonStyle }}
      >
        <svg
          width="22px"
          height="25px"
          viewBox="0 0 1024 1024"
          className="icon opacity-70 hover:opacity-100"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
            fill="#ffff"
          />
        </svg>
      </button>
    ),
  };
  return (
    <div className=" background1 ">
      {" "}
      <div className="main1">
        <div className=" main1Inner1">
          <div className="Main1SubHeading">100% Organic Foods</div>
          <div className="Main1Heading">Organic Veggies & Fruits Foods</div>
          <div className="Main1SearchContainer">
            <input
              type="number"
              className="Main1SearchInput"
              placeholder="Search"
            />
            <button className="Main1SubmitButton">Submit Now</button>
          </div>
        </div>
        <div className="main1Inner2">
          <div className=" w-full   h-full       ">
            <Slide
              slidesToShow={1}
              cssClass=" w-[512px] h-[341px] max-[1400px]:w-[437px] max-[1400px]:h-[291.33px] max-[1200px]:w-[362px] max-[1200px]:h-[241.33px] rounded-[10px] max-[992px]:h-[464px] max-[992px]:w-[696px] max-[768px]:w-[716px] max-[768px]:h-[348px] max-[564px]:w-[80vw] max-[564px]:h-[60vw]"
              {...properties}
            >
              <div className=" flex    items-center justify-center w-[512px] h-[341px] max-[1400px]:w-[437px] max-[1400px]:h-[291.33px]  max-[1200px]:w-[362px] max-[1200px]:h-[241.33px] max-[992px]:h-[464px] max-[992px]:w-[696px] max-[768px]:w-[516px] max-[768px]:h-[344px] max-[564px]:w-[auto] max-[564px]:h-[60vw]">
                <div
                  className=" bg-[#ffb524] flex justify-center items-center"
                  style={{
                    backgroundImage: `url(${images[0].url})`,
                    height: "100%",
                    width: "100%",
                    backgroundRepeat: "no-repeat",

                    backgroundSize: "100% 100%",
                  }}
                >
                  <span
                    className=" absolute font-[600] bg-custom-orange-500  pl-[1.5rem] pt-[0.5rem] pb-[0.5rem] pr-[1.5rem] rounded-[10px]   flex justify-center items-center text-white text-[25px] leading-[1.5]     "
                    style={{
                      backgroundColor: "rgba(249, 182, 53,0.8)",
                      fontFamily: "Open Sans",
                    }}
                  >
                    Fruites
                  </span>
                </div>
              </div>
              <div className="  flex   items-center justify-center  w-[512px] h-[341px] max-[1400px]:w-[437px] max-[1400px]:h-[291.33px]  max-[1200px]:w-[362px] max-[1200px]:h-[241.33px] max-[992px]:h-[464px] max-[992px]:w-[696px] max-[768px]:w-[516px] max-[768px]:h-[344px] max-[564px]:w-[auto] max-[564px]:h-[60vw]">
                <div
                  className="flex justify-center items-center  h-full w-full"
                  style={{
                    backgroundImage: `url(${images[1].url})`,
                    height: "100%",
                    width: "100%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                  }}
                >
                  <span
                    className=" absolute font-[600] bg-custom-orange-500  pl-[1.5rem] pt-[0.5rem] pb-[0.5rem] pr-[1.5rem] rounded-[10px]   flex justify-center items-center text-white text-[25px] leading-[1.5]     "
                    style={{
                      backgroundColor: "rgba(249, 182, 53,0.8)",
                      fontFamily: "Open Sans",
                    }}
                  >
                    Vesitables
                  </span>{" "}
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </div>{" "}
    </div>
  );
});

export default Main1;
