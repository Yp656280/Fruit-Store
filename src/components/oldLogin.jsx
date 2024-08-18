import React, { useState } from "react";
import image from "../assets/360_F_579545387_6JuKZXKyBuvrGTVxcCIXPZnE5cr41vC9.jpg";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  //   const [error, setError] = useState("");
  //   //   const [error, setError] = useState("");
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordRegex = /^\S{6,}$/;
  const handleLogin = (e) => {
    e.preventDefault();
    setUsernameError("");
    setPasswordError("");
    if (
      !username ||
      !emailRegex.test(username) ||
      !password ||
      !passwordRegex.test(password)
    ) {
      if (!username || !emailRegex.test(username)) {
        setUsernameError("Enter correct email");
      }

      if (!password || !passwordRegex.test(password)) {
        setPasswordError("Enter correct password");
      }
      document.activeElement.blur();
      return;
    }

    console.log("username:", username);
    console.log("password:", password);
    setUsername("");
    setPassword("");
    setPasswordError("");
    setUsernameError("");
    document.activeElement.blur();
  };

  return (
    <div className=" h-screen w-screen flex  justify-center items-center">
      <div className=" h-3/4  w-1/2 flex     bg-slate-200 rounded-2xl shadow-custom-focus-shadow ">
        <div className=" w-2/4   ">
          {" "}
          <img
            src={image}
            style={{ height: "100%" }}
            className=" rounded-2xl"
            alt=""
          />{" "}
        </div>
        <div className=" w-2/4 flex flex-col justify-center items-center   ">
          <div className=" flex flex-col justify-center items-center  h-2/4 w-full ">
            <div className=" w-1/2 mb-2 ">
              <img src="" className="  mix-blend-multiply" alt="" />
            </div>
            <h2 className="text-center text-xl font-bold leading-tight mb-1">
              Sign In to your Account
            </h2>
            <p className="mb-2">
              {" "}
              Create new account?&nbsp;{" "}
              <Link to="/signup" className="font-bold">
                SignUp
              </Link>
            </p>
          </div>

          <form
            onSubmit={handleLogin}
            className=" flex flex-col h-full  w-full  justify-evenly   items-center   "
          >
            <div
              className=" w-full flex flex-col  pl-16  "
              style={{ minHeight: "30%", maxHeight: "30%" }}
            >
              <label className="  font-bold mb-3">Username:</label>
              <input
                type="text"
                className="w-3/4 rounded-md pl-2 focus:outline-none focus:shadow-custom-focus-shadow text-lg"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setUsernameError("");
                }}
                placeholder="Enter your username"
              />

              <p className="text-red-600 mt-2  mb-2">{usernameError}</p>
            </div>

            <div
              className=" w-full flex flex-col pl-16  "
              style={{ minHeight: "30%", maxHeight: "30%" }}
            >
              <label className=" font-bold mb-3">Password:</label>
              <input
                type="password"
                className="w-3/4 rounded-md pl-2   focus:outline-none focus:shadow-custom-focus-shadow text-lg"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError("");
                }}
                placeholder="Enter your password"
              />
              <p className="text-red-600 mt-2 mb-2">{passwordError}</p>
            </div>

            <button
              type="submit"
              className=" bg-blue-600  w-24 rounded-lg h-9 text-white font-semibold"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
