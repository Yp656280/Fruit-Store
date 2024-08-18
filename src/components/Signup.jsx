import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/success.png";

import banner from "../assets/bannneeeeetrrrr.png";
import mainBanner from "../assets/mainbanner.jpg";
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [password2Error, setPassword2Error] = useState("");
  const [name, setName] = useState("");
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordRegex = /^\S{6,}$/;
  const [password2, setPassword2] = useState("");
  const [overlay, setOverlay] = useState(false);
  const handleSignup = (e) => {
    setEmailError("");
    setPassword2Error("");
    setPasswordError("");
    setNameError("");

    e.preventDefault();
    if (
      !email ||
      !password ||
      !password2 ||
      !name ||
      !emailRegex.test(email) ||
      !passwordRegex.test(password) ||
      password !== password2
    ) {
      if (!email) {
        setEmailError("Enter a email ");
      } else if (!emailRegex.test(email)) {
        setEmailError("Enter valid email ");
      }

      if (!name) {
        setNameError("Enter a name  ");
      } else if (name.trimStart() === "") {
        setNameError("Enter a name  ");
      }

      if (!password) {
        setPasswordError("Enter a password  ");
      } else if (!passwordRegex.test(password)) {
        setPasswordError("Enter valid password  ");
      }

      if (!password2) {
        setPassword2Error("Enter a password  ");
      } else if (!passwordRegex.test(password2)) {
        setPassword2Error("Enter valid password  ");
      } else if (password !== password2) {
        setPassword2Error("Enter same password");
      }
      document.activeElement.blur();

      return;
    }

    console.log("email ", email);

    setNameError("");
    setPassword2Error("");
    setPasswordError("");
    setEmailError("");
    localStorage.setItem("Name", name);
    localStorage.setItem("Email", email);
    localStorage.setItem("Password", password);

    setName("");
    setPassword("");
    setPassword2("");
    setEmail("");
    setOverlay(true);
    document.activeElement.blur();
  };

  return (
    <div className="  h-screen w-screen flex justify-center items-center bg-gray-100 ">
      {overlay ? (
        <div className="h-screen w-screen  flex justify-center items-center ">
          <div
            className="h-screen w-screen  flex justify-center items-center  absolute  bg-transparent  "
            style={{
              backdropFilter: "brightness(15%)",
              zIndex: "2",
            }}
          >
            <div
              className="bg-white   rounded-2xl h-96  w-80 flex flex-col justify-center items-center   "
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="w-full  h-3/5 flex flex-col justify-center items-center "
                style={{
                  backgroundColor: "#8bc24a",
                  borderTopLeftRadius: "1rem",
                  borderTopRightRadius: "1rem",
                }}
              >
                <div>
                  <img src={img} alt="" />
                </div>
                <div className="text-white text-2xl tracking-widest">
                  SUCCESS
                </div>
              </div>
              <div className="w-full   h-2/5 rounded-xl flex flex-col justify-center items-center pb-10">
                <p className="p-6 text-center" style={{ color: "#757575" }}>
                  Congratulations, your account has been successfully created.
                </p>
                <Link to="/login" className="text-white">
                  <button
                    className=" w-28 h-9 flex justify-center items-center  rounded-3xl  hover:shadow-custom-focus-shadow"
                    style={{
                      backgroundColor: "#8bc24a",

                      boxShadow: "",
                    }}
                  >
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div
            className=" w-3/5 max-phone:w-full h-[90%]  max-phone:h-full max-phone:p-5  flex  bg-white rounded-lg"
            // style={{ height: "90%" }}
          >
            <div
              className="w-1/2  max-phone:w-full flex flex-col  items-center  rounded-lg  "
              style={{
                backgroundImage: `url(${mainBanner})`,
                backgroundPosition: "contain",
                backgroundSize: "100% 100%",
              }}
            >
              <div className=" flex flex-col justify-center   items-center  rounded-lg ">
                {" "}
                <img src={banner} alt="" className="  h-32  " />
                <p className="  text-2xl  text-custom-green-500 hover:text-custom-orange-500 transition delay-0 duration-500 font-semibold mb-5">
                  Welcome To Fruitables
                </p>
              </div>
              <div
                className=" flex flex-col    w-4/5 justify-center items-center "
                style={{ height: "80%" }}
              >
                <div className="mb-4 font-semibold text-coustom-grey-600">
                  Please create your account
                </div>
                <form
                  onSubmit={handleSignup}
                  className=" flex flex-col h-full  w-full  pb-3   items-center    "
                >
                  <div
                    className=" w-full flex flex-col      "
                    style={{ minHeight: "20%", maxHeight: "20%" }}
                  >
                    {/* <label className=" font-bold mb-2">Name:</label> */}
                    <input
                      type="text"
                      className="w-full rounded-md  p-2 focus:outline-none border focus:border-custom-orange-500  border-custom-green-500   "
                      value={name}
                      style={{ fontSize: "14px" }}
                      onChange={(e) => {
                        setName(e.target.value);
                        setNameError("");
                      }}
                      placeholder="Name"
                    />
                    <span className="text-red-600 text-sm  ">{nameError}</span>
                  </div>
                  <div
                    className=" w-full flex flex-col    "
                    style={{ minHeight: "20%", maxHeight: "20%" }}
                  >
                    {/* <label className=" font-bold mb-2">Email:</label> */}
                    <input
                      type="text"
                      className="w-full rounded-md  p-2 focus:outline-none border focus:border-custom-orange-500  border-custom-green-500   "
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError("");
                      }}
                      style={{ fontSize: "14px" }}
                      placeholder="Email"
                    />
                    <span className="text-red-600  text-sm ">{emailError}</span>
                  </div>
                  <div
                    className=" w-full flex flex-col "
                    style={{ minHeight: "20%", maxHeight: "20%" }}
                  >
                    {/* <label className=" font-bold mb-2">Password:</label> */}
                    <input
                      type="password"
                      className="w-full rounded-md  p-2 focus:outline-none border focus:border-custom-orange-500  border-custom-green-500  "
                      value={password}
                      style={{ fontSize: "14px" }}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setPasswordError("");
                      }}
                      placeholder="Password"
                    />
                    <span className="text-red-600  text-sm ">
                      {passwordError}
                    </span>
                  </div>
                  <div
                    className=" w-full flex flex-col  "
                    style={{ minHeight: "20%", maxHeight: "20%" }}
                  >
                    {/* <label className=" font-bold mb-2">Re Enter Password:</label> */}
                    <input
                      type="password"
                      className="w-full rounded-md  p-2 focus:outline-none border focus:border-custom-orange-500  border-custom-green-500   "
                      value={password2}
                      onChange={(e) => {
                        setPassword2(e.target.value);
                        setPassword2Error("");
                      }}
                      placeholder="Re Enter Password"
                      style={{ fontSize: "14px" }}
                    />
                    <span className="text-red-600  text-sm ">
                      {password2Error}
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="    bg-transparent text-custom-green-700 border border-custom-orange-500 hover:bg-custom-orange-500 hover:text-white transition delay-0 duration-700   w-full rounded-lg h-9  "
                  >
                    Sign Up
                  </button>
                </form>
              </div>
              <div
                className=" flex w-4/5  pb-4  justify-evenly items-center"
                style={{ height: "10%" }}
              >
                <p className=" text-coustom-grey-600">Don't have an account?</p>
                <Link
                  to="/login"
                  style={{
                    width: "30%",
                    height: "100%",
                    // border: "solid black 1px",
                  }}
                >
                  <button
                    className="h-full  tracking-wider rounded-lg border text-coustom-grey-600 hover:text-white  transition delay-0 duration-500 hover:bg-custom-orange-500 border-custom-green-500 hover:border-custom-orange-500"
                    style={{
                      width: "100%",

                      // borderImage:
                      //   "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593) 10",
                      // borderWidth: "2px",
                      // borderStyle: "solid",
                      fontSize: "14px",

                      fontWeight: "600",
                    }}
                  >
                    LogIn
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-1/2 max-phone:hidden   flex flex-col justify-center overflow-hidden items-center rounded-lg">
              <img
                src="https://i.pinimg.com/originals/68/60/27/686027dc0db04ae6272ac72b6a7ed195.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      ) : (
        <div
          className=" w-3/5 max-phone:w-full h-[90%]  max-phone:h-full max-phone:p-5  flex  bg-white rounded-lg"
          // style={{ height: "90%" }}
        >
          <div
            className="w-1/2  max-phone:w-full flex flex-col  items-center  rounded-lg  "
            style={{
              backgroundImage: `url(${mainBanner})`,
              backgroundPosition: "contain",
              backgroundSize: "100% 100%",
            }}
          >
            <div className=" flex flex-col justify-center   items-center  rounded-lg ">
              {" "}
              <img src={banner} alt="" className="  h-32  " />
              <p className="  text-2xl  text-custom-green-500 hover:text-custom-orange-500 transition delay-0 duration-500 font-semibold mb-5">
                Welcome To Fruitables
              </p>
            </div>
            <div
              className=" flex flex-col    w-4/5 justify-center items-center "
              style={{ height: "80%" }}
            >
              <div className="mb-4 font-semibold text-coustom-grey-600">
                Please create your account
              </div>
              <form
                onSubmit={handleSignup}
                className=" flex flex-col h-full  w-full  pb-3   items-center    "
              >
                <div
                  className=" w-full flex flex-col      "
                  style={{ minHeight: "20%", maxHeight: "20%" }}
                >
                  {/* <label className=" font-bold mb-2">Name:</label> */}
                  <input
                    type="text"
                    className="w-full rounded-md  p-2 focus:outline-none border focus:border-custom-orange-500  border-custom-green-500   "
                    value={name}
                    style={{ fontSize: "14px" }}
                    onChange={(e) => {
                      setName(e.target.value);
                      setNameError("");
                    }}
                    placeholder="Name"
                  />
                  <span className="text-red-600 text-sm  ">{nameError}</span>
                </div>
                <div
                  className=" w-full flex flex-col    "
                  style={{ minHeight: "20%", maxHeight: "20%" }}
                >
                  {/* <label className=" font-bold mb-2">Email:</label> */}
                  <input
                    type="text"
                    className="w-full rounded-md  p-2 focus:outline-none border focus:border-custom-orange-500  border-custom-green-500   "
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError("");
                    }}
                    style={{ fontSize: "14px" }}
                    placeholder="Email"
                  />
                  <span className="text-red-600  text-sm ">{emailError}</span>
                </div>
                <div
                  className=" w-full flex flex-col "
                  style={{ minHeight: "20%", maxHeight: "20%" }}
                >
                  {/* <label className=" font-bold mb-2">Password:</label> */}
                  <input
                    type="password"
                    className="w-full rounded-md  p-2 focus:outline-none border focus:border-custom-orange-500  border-custom-green-500  "
                    value={password}
                    style={{ fontSize: "14px" }}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setPasswordError("");
                    }}
                    placeholder="Password"
                  />
                  <span className="text-red-600  text-sm ">
                    {passwordError}
                  </span>
                </div>
                <div
                  className=" w-full flex flex-col  "
                  style={{ minHeight: "20%", maxHeight: "20%" }}
                >
                  {/* <label className=" font-bold mb-2">Re Enter Password:</label> */}
                  <input
                    type="password"
                    className="w-full rounded-md  p-2 focus:outline-none border focus:border-custom-orange-500  border-custom-green-500   "
                    value={password2}
                    onChange={(e) => {
                      setPassword2(e.target.value);
                      setPassword2Error("");
                    }}
                    placeholder="Re Enter Password"
                    style={{ fontSize: "14px" }}
                  />
                  <span className="text-red-600  text-sm ">
                    {password2Error}
                  </span>
                </div>

                <button
                  type="submit"
                  className="    bg-transparent text-custom-green-700 border border-custom-orange-500 hover:bg-custom-orange-500 hover:text-white transition delay-0 duration-700   w-full rounded-lg h-9  "
                >
                  Sign Up
                </button>
              </form>
            </div>
            <div
              className=" flex w-4/5  pb-4  justify-evenly items-center"
              style={{ height: "10%" }}
            >
              <p className=" text-coustom-grey-600">Don't have an account?</p>
              <Link
                to="/login"
                style={{
                  width: "30%",
                  height: "100%",
                  // border: "solid black 1px",
                }}
              >
                <button
                  className="h-full  tracking-wider rounded-lg border text-coustom-grey-600 hover:text-white  transition delay-0 duration-500 hover:bg-custom-orange-500 border-custom-green-500 hover:border-custom-orange-500"
                  style={{
                    width: "100%",

                    // borderImage:
                    //   "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593) 10",
                    // borderWidth: "2px",
                    // borderStyle: "solid",
                    fontSize: "14px",

                    fontWeight: "600",
                  }}
                >
                  LogIn
                </button>
              </Link>
            </div>
          </div>
          <div className="w-1/2 max-phone:hidden   flex flex-col justify-center overflow-hidden items-center rounded-lg">
            <img
              src="https://i.pinimg.com/originals/68/60/27/686027dc0db04ae6272ac72b6a7ed195.jpg"
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Signup;
