import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import "./Header.css";

function Header({ inView }) {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const [divVisible, setDivVisible] = useState(false);
  const [items, setItems] = useState(0);
  const isNarrow3 = useMediaQuery({ query: "(max-width: 1200px)" });
  useEffect(() => {
    if (!isNarrow3) {
      setDivVisible(false);
    }
  }, [isNarrow3]);
  const location = useLocation();
  useEffect(() => {
    const x = JSON.parse(localStorage.getItem("data"))?.flat();

    if (x) {
      setItems(x.length);
    }
  }, []);
  const cartItems = useSelector((state) => state.product.products);
  return (
    <div
      className={` header ${
        !inView
          ? "   shadow-header-shadow transition  delay-150 duration-500 -translate-y-[53.13px]  max-[992px]:translate-y-[0px]          max-[992px]:transition-none "
          : " transition duration-500 translate-y-[0]"
      }`}
    >
      <div className={`  topBar  `}>
        <div className="topBarBox1">
          <p className=" w-1/2  mr-[1rem] ">
            <Link className=" font-normal">
              {" "}
              <i className="fas fa-map-marker-alt text-[0.8rem] font-[900] me-2 text-secondary  mr-[0.7rem]    text-[#ffb524]"></i>
              123 Street, New York
            </Link>
          </p>
          <p className=" w-1/2">
            <Link className="    tracking-widest font-normal">
              {" "}
              <i className="fas fa-envelope me-2 text-secondary text-[#ffb524]"></i>
              Email@Example.com
            </Link>
          </p>
        </div>

        <div className="topBarBox2">
          <Link className="">Privacy Policy</Link>
          <p className=" ">/</p>
          <Link className="">Terms of Use</Link>
          <p className="  ">/</p>

          <Link className="  ">Sales and Refunds</Link>
        </div>
        {/* </div> */}
      </div>
      <div
        className={` bottomBar `}
        onClick={() => setVisible(false)}
        // style={{ zIndex: 20 }}
        onMouseLeave={() => setVisible(false)}
      >
        <div
          className={`  bottomBarLogo    ${
            divVisible
              ? "transition duration-300 ease-in-out  -translate-y-[10px] "
              : " transition duration-300 ease-in-out translate-y-[0px]"
          }`}
        >
          <Link to="/home" className=" ">
            <h1 className="  ">FruitStore</h1>
          </Link>
        </div>
        <button
          className={`
            bottomBarButton
            ${
              divVisible
                ? "transition duration-300 ease-in-out  -translate-y-[10px]"
                : " transition duration-300 ease-in-out translate-y-[0px]"
            }`}
          onClick={() => setDivVisible(!divVisible)}
        >
          <span className="fa fa-bars text-primary"></span>
        </button>
        <div className="bottomBarNavigation ">
          {" "}
          <div
            onMouseLeave={() => {
              setVisible(false);
            }}
            className=" pages "
          >
            <Link
              onMouseLeave={() => {
                setVisible(false);
              }}
              to="/home"
              className={` pagesLink ${
                location.pathname === "/home"
                  ? "text-custom-green-500"
                  : "text-[#0000008c]"
              }  `}
            >
              Home
            </Link>
            <Link
              to="/shop"
              onMouseLeave={() => {
                setVisible(false);
              }}
              className={` pagesLink  ${
                location.pathname === "/shop"
                  ? " text-custom-green-500 "
                  : "text-[rgba(0,0,0,.55)]"
              }`}
            >
              Shop
            </Link>
            <Link
              onMouseEnter={() => {
                setVisible(false);
              }}
              className={` pagesLink ${
                location.pathname === "/shopdetail"
                  ? "text-custom-green-500"
                  : "text-[rgba(0,0,0,.55)]"
              }`}
              to="/shopdetail"
            >
              Shop Detail
            </Link>{" "}
            <div
              onMouseEnter={() => setVisible(true)}
              className=" flex  justify-center items-center pt-[10px] pb-[10px] pr-[15px]  pl-[15px] font-[16px]"
            >
              <div
                // onClick={() => setVisible(true)}
                className=" flex text-[rgba(0,0,0,.55)]   justify-center items-center hover:text-custom-green-500  cursor-pointer"
              >
                Pages
                <i className="fas fa-angle-down flex justify-center items-center ml-[8px] hover:text-custom-green-500 text-[1rem]"></i>
              </div>
              <div
                className={` ${
                  visible
                    ? "header-drop-down-menu-show"
                    : "  header-drop-down-menu-hide"
                }  header-drop-down-menu`}
              >
                <Link
                  to="/cart"
                  className={` ${
                    location.pathname === "/cart"
                      ? " header-active-text-x"
                      : "header-active-text"
                  }`}
                >
                  Cart
                </Link>
                <Link
                  to="/checkout"
                  className={` ${
                    location.pathname === "/checkout"
                      ? "header-active-text-x"
                      : "header-active-text"
                  }`}
                >
                  Checkout
                </Link>
                <Link
                  to="/testimonial"
                  className={`${
                    location.pathname === "/testimonial"
                      ? "header-active-text-x "
                      : "header-active-text "
                  }`}
                >
                  Testimonial
                </Link>
                <Link className=" header-active-text">404 Page</Link>
              </div>
            </div>
            <Link
              onMouseEnter={() => {
                setVisible(false);
              }}
              to="/contact"
              className={`  pagesLink  ${
                location.pathname === "/contact"
                  ? "text-custom-green-500"
                  : "text-[rgba(0,0,0,.55)]"
              }`}
            >
              Contact
            </Link>
          </div>
          <div className=" flex justify-between  mr-0 m-[1rem] items-center   border-black  ">
            <button className="  text-custom-green-500 border border-custom-orange-500  transition delay-50 hover:bg-custom-orange-500 duration-1000    h-[2.75rem] w-[2.75rem] rounded-full mr-6">
              <i className="fas fa-search text-primary font-[900]  text-[1rem] text-custom-green-500 hover:text-custom-green-700 leading-[1]"></i>
            </button>
            <Link to="/cart">
              <i className="fa fa-shopping-bag fa-2x  text-[#81c408] mr-6 hover:text-custom-green-500 cursor-pointer">
                <div
                  className=" absolute -mt-9 ml-4 h-[20px] font-[400] w-[20px]  text-[#45595b] pr-[0.25rem] pl-[0.25rem]     flex justify-center items-center 5 text-center -5 rounded-full bg-custom-orange-500  text-base"
                  style={{ fontFamily: "Open Sans" }}
                >
                  {3}
                </div>
              </i>
            </Link>
            <Link to="/checkout">
              {" "}
              <i className="fas fa-user fa-2x text-[#81c408] hover:text-custom-green-500 "></i>
            </Link>{" "}
          </div>
        </div>
        <div
          className={`  bottomBarDropDownMenu ${
            divVisible
              ? "  overflow-hidden  transition-[height] duration-300 ease-in-out"
              : "h-0 transition-[height] duration-300 ease-in-out"
          }`}
        >
          {" "}
          <div className=" ">
            <Link
              to="/home"
              className="bottomBarDropDownMenuLink  "
              onClick={() => {
                setDivVisible(false);
                setVisible2(false);
              }}
            >
              Home
            </Link>

            <Link
              to="/shop"
              className="bottomBarDropDownMenuLink"
              onClick={() => {
                setDivVisible(false);
                setVisible2(false);
              }}
            >
              Shop
            </Link>

            <Link
              className="bottomBarDropDownMenuLink"
              to="/shopdetail"
              onClick={() => {
                setDivVisible(false);
                setVisible2(false);
              }}
            >
              Shop Detail
            </Link>
            <div className="bottomBarDropDownMenuLink       ">
              <span
                onClick={(e) => {
                  setVisible2(!visible2);
                  e.stopPropagation();
                }}
                className="flex   "
              >
                Pages{" "}
                <i className="fas fa-angle-down flex justify-center  items-center pl-2 hover:text-custom-green-500 text-lg"></i>
              </span>
              <div
                className={` ${
                  visible2 ? "flex" : " hidden"
                }  header-drop-down-menu-x`}
              >
                <Link
                  onClick={() => {
                    setDivVisible(false);
                    setVisible2(false);
                  }}
                  to="/cart"
                  className={` ${
                    location.pathname === "/cart"
                      ? " header-active-text-x"
                      : "header-active-text"
                  }`}
                >
                  Cart
                </Link>
                <Link
                  onClick={() => {
                    setDivVisible(false);
                    setVisible2(false);
                  }}
                  to="/checkout"
                  className={` ${
                    location.pathname === "/checkout"
                      ? "header-active-text-x"
                      : "header-active-text"
                  }`}
                >
                  Checkout
                </Link>
                <Link
                  onClick={() => {
                    setDivVisible(false);
                    setVisible2(false);
                  }}
                  to="/testimonial"
                  className={`${
                    location.pathname === "/testimonial"
                      ? "header-active-text-x "
                      : "header-active-text "
                  }`}
                >
                  Testimonial
                </Link>
                <Link className=" header-active-text">404 Page</Link>
              </div>
            </div>
            <Link to="/contact" className="bottomBarDropDownMenuLink">
              Contact
            </Link>
          </div>
          <div className="  flex   m-[1rem] items-center  ">
            <button className=" text-custom-green-500 border border-custom-orange-500  transition delay-50 hover:bg-custom-orange-500 duration-1000 bg-white     h-[44px] w-[44px]   rounded-full  mr-[1.5rem]">
              <i className="fas fa-search text-primary text-custom-green-500"></i>
            </button>
            <Link to="/cart" className="mr-[1.5rem]">
              <i className="fa fa-shopping-bag fa-2x text-[#679d06]  hover:text-custom-green-700 cursor-pointer">
                <div
                  className=" absolute -mt-10 ml-4   text-[#45595b] font-[400]  flex  justify-center items-center h-5 text-center w-5 rounded-full bg-custom-orange-500  text-base"
                  style={{ fontFamily: "Open Sans" }}
                >
                  {cartItems}
                </div>
              </i>
            </Link>
            <Link to="/checkout">
              {" "}
              <i className="fas fa-user fa-2x  text-[#679d06] mr-4"></i>
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
