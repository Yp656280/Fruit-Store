import React, { useState } from "react";
import image from "../assets/360_F_579545387_6JuKZXKyBuvrGTVxcCIXPZnE5cr41vC9.jpg";
import { Link } from "react-router-dom";

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
  const nameRegex = /([a-zA-Z0-9_\s]+)/;
  const [password2, setPassword2] = useState("");

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
      !nameRegex.test(name) ||
      !passwordRegex.test(password) ||
      password !== password2
    ) {
      if (!email || !emailRegex.test(email)) {
        setEmailError("Enter valid email ");
      }
      if (!name || !nameRegex.test(name) || name[0] === " ") {
        setNameError("Enter valid name  ");
      }
      if (!password || !passwordRegex.test(password)) {
        setPasswordError("Enter valid password  ");
      }
      if (!password2 || !passwordRegex.test(password2)) {
        setPassword2Error("Enter valid password  ");
      }
      if (password !== password2) {
        setPassword2Error("Enter same password");
      }
      document.activeElement.blur();

      return;
    }

    console.log("email ", email);
    console.log("name ", name);
    console.log("password ", password);
    setNameError("");
    setPassword2Error("");
    setPasswordError("");
    setEmailError("");
    setName("");
    setPassword("");
    setPassword2("");
    setEmail("");
    document.activeElement.blur();
  };

  return (
    <div className=" h-screen w-screen flex  justify-center items-center">
      <div className=" h-3/4  w-1/2 flex  bg-slate-200 rounded-2xl shadow-custom-focus-shadow ">
        <div className=" w-2/4   ">
          {" "}
          <img
            src={image}
            style={{ height: "100%" }}
            className=" rounded-2xl"
            alt=""
          />{" "}
        </div>
        <div className=" w-2/4 flex flex-col justify-center items-center    ">
          <div className=" flex flex-col justify-center items-center  h-1/4 w-full ">
            <div className=" w-1/2 mb-2 ">
              <img src="" className="  mix-blend-multiply" alt="" />
            </div>
            <h2 className="text-center text-xl font-bold leading-tight mb-1">
              Create your Account
            </h2>
            <p className="mb-2">
              {" "}
              Already have a account?&nbsp;
              <Link to="/login" className=" font-bold">
                {" "}
                SignIn
              </Link>
            </p>
          </div>

          <form
            onSubmit={handleSignup}
            className=" flex flex-col  h-full  w-full items-center"
          >
            <div
              className=" w-full flex flex-col    pl-16  "
              style={{ minHeight: "20%", maxHeight: "20%" }}
            >
              <label className=" font-bold mb-2">Name:</label>
              <input
                type="text"
                className="w-3/4 rounded-md pl-2 focus:outline-none  focus:shadow-custom-focus-shadow text-lg"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setNameError("");
                }}
                placeholder="Enter your name"
              />
              <span className="text-red-600   ">{nameError}</span>
            </div>
            <div
              className=" w-full flex flex-col   pl-16 "
              style={{ minHeight: "20%", maxHeight: "20%" }}
            >
              <label className=" font-bold mb-2">Email:</label>
              <input
                type="text"
                className="w-3/4 rounded-md pl-2 focus:outline-none focus:shadow-custom-focus-shadow  text-lg"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
                placeholder="Enter your email"
              />
              <span className="text-red-600   ">{emailError}</span>
            </div>
            <div
              className=" w-full flex flex-col pl-16 "
              style={{ minHeight: "20%", maxHeight: "20%" }}
            >
              <label className=" font-bold mb-2">Password:</label>
              <input
                type="password"
                className="w-3/4 rounded-md pl-2 focus:outline-none focus:shadow-custom-focus-shadow  text-lg "
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError("");
                }}
                placeholder="Enter new password"
              />
              <span className="text-red-600   ">{passwordError}</span>
            </div>
            <div
              className=" w-full flex flex-col pl-16"
              style={{ minHeight: "20%", maxHeight: "20%" }}
            >
              <label className=" font-bold mb-2">Re Enter Password:</label>
              <input
                type="password"
                className="w-3/4 rounded-md pl-2 focus:outline-none focus:shadow-custom-focus-shadow  text-lg "
                value={password2}
                onChange={(e) => {
                  setPassword2(e.target.value);
                  setPassword2Error("");
                }}
                placeholder="Enter your password"
                style={{ outline: "none" }}
              />
              <span className="text-red-600   ">{password2Error}</span>
            </div>

            <button
              type="submit"
              className=" bg-blue-600  w-24 rounded-lg h-9 font-semibold text-white mt-3 "
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
