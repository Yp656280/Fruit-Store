import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import banner from "../assets/bannneeeeetrrrr.png";
import mainBanner from "../assets/mainbanner.jpg";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordRegex = /^\S{6,}$/;
  const navigate = useNavigate();
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
      if (!username) {
        setUsernameError("Enter a email");
      } else if (!emailRegex.test(username)) {
        setUsernameError("Enter correct email");
      }

      if (!password) {
        setPasswordError("Enter a password");
      } else if (!passwordRegex.test(password)) {
        setPasswordError("Enter correct password");
      }

      document.activeElement.blur();
      return;
    }

    console.log("username:", username);
    console.log("password:", password);

    const correctEmail = localStorage?.getItem("Email");
    const correctPassword = localStorage?.getItem("Password");
    if (!correctEmail || !correctPassword) {
      setPasswordError("");
      setPassword("");
      setUsernameError("user not registerd");
      return;
    } else {
      if (correctEmail === username && correctPassword === password) {
        navigate("/home");
        localStorage.setItem("login", true);
      } else {
        setUsername("");
        setPasswordError("Incorrect password");
        setUsernameError("Incorrect username");
        document.activeElement.blur();
      }
    }
  };
  return (
    <div className="  h-screen w-screen flex justify-center items-center bg-gray-100">
      <div className="  h-5/6 w-3/5 max-phone:w-full  max-phone:h-full max-phone:p-5 flex  bg-white rounded-lg">
        <div
          className="w-1/2 max-phone:w-full  flex flex-col justify-center items-center  rounded-lg  pb-4"
          style={{
            backgroundImage: `url(${mainBanner})`,
            backgroundPosition: "contain",
            backgroundSize: "100% 100%",
          }}
        >
          <div className=" flex flex-col justify-center   items-center  rounded-lg">
            {" "}
            <img src={banner} alt="" className="  h-40  " />
            <p className="  text-2xl  text-custom-green-500 hover:text-custom-orange-500 transition delay-0 duration-500 font-semibold mb-5">
              Welcome To Fruitables
            </p>
          </div>
          <div className=" flex flex-col  h-1/2 w-4/5  items-center">
            <div className="mb-8 font-semibold text-custom-green-900">
              Please login to your account
            </div>
            <form
              onSubmit={handleLogin}
              className=" flex flex-col h-full  w-full     items-center   "
            >
              <div
                className=" w-full flex flex-col        "
                style={{ minHeight: "32%" }}
              >
                <input
                  type="text"
                  className="w-full rounded-md pl-4 p-2 focus:outline-none border focus:border-custom-orange-500  border-custom-green-500 "
                  value={username}
                  style={{ fontSize: "16px" }}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setUsernameError("");
                  }}
                  placeholder="Username"
                />

                <p className="text-red-600   mb-2">{usernameError}</p>
              </div>

              <div
                className=" w-full flex flex-col      mb-4  "
                style={{ minHeight: "32%" }}
              >
                <input
                  type="password"
                  className="w-full rounded-md pl-4 border p-2  focus:outline-none  focus:border-custom-orange-500   border-custom-green-500   "
                  value={password}
                  style={{ fontSize: "16px" }}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError("");
                  }}
                  placeholder="Password"
                />
                <p className="text-red-600  mb-2">{passwordError}</p>
              </div>

              <button
                type="submit"
                className="    bg-transparent text-custom-green-700 border border-custom-orange-500 hover:bg-custom-orange-500 hover:text-white transition delay-0 duration-700   w-full rounded-lg h-9  "
              >
                LOG IN
              </button>
            </form>
          </div>
          <div
            className=" flex w-4/5   justify-evenly items-center"
            style={{ height: "10%" }}
          >
            <Link to="/forgotpassword">
              <p className=" text-custom-green-900">Forgot Password?</p>
            </Link>
            <Link to="/signup" style={{ width: "30%", height: "80%" }}>
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
                CREATE NEW
              </button>
            </Link>
          </div>
        </div>
        <div className="w-1/2 max-phone:hidden   flex flex-col justify-center overflow-hidden ro items-center rounded-lg">
          <img
            src="https://i.pinimg.com/originals/68/60/27/686027dc0db04ae6272ac72b6a7ed195.jpg"
            alt=""
            className=" w-full h-full"
            style={{ objectFit: "cover " }}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
