import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import banner from "../assets/bannneeeeetrrrr.png";
import mainBanner from "../assets/mainbanner.jpg";

function ForgotPassword() {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const navigate = useNavigate();
  const [otp, setOtp] = useState();
  function otpGenerator() {
    // Generate a random number between 0 and 9999
    const randomNumber = Math.floor(Math.random() * 10000);

    // Convert the number to a 4-digit string, padding with leading zeros if necessary
    const code = randomNumber.toString().padStart(4, "0");

    localStorage.setItem("otp", code);
  }
  const sendOtp = (email) => {
    otpGenerator();
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setUsernameError("");
    if (!username || !emailRegex.test(username)) {
      if (!username) {
        setUsernameError("Enter a email");
      } else if (!emailRegex.test(username)) {
        setUsernameError("Enter correct email");
      }

      document.activeElement.blur();
      return;
    }

    console.log("username:", username);

    const correctEmail = localStorage?.getItem("Email");
    if (!correctEmail) {
      setUsernameError("user not registerd");
      return;
    } else {
      if (correctEmail === username) {
        // navigate("/home");
        sendOtp(correctEmail);
      } else {
        setUsername("");
        setUsernameError("Incorrect username");
        document.activeElement.blur();
      }
    }
  };

  return (
    <div className="  h-screen w-screen flex justify-center items-center bg-gray-100">
      <div className="  h-5/6 w-3/5  max-phone:w-full max-phone:p-4 max-phone:h-full flex  bg-white rounded-lg">
        <div
          className="w-1/2  flex flex-col justify-center items-center max-phone:w-full  rounded-lg  pb-4"
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
              Please Enter your Username
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

              <button
                type="submit"
                className="    bg-transparent text-custom-green-700 border border-custom-orange-500 hover:bg-custom-orange-500 hover:text-white transition delay-0 duration-700   w-full rounded-lg h-9  "
              >
                Send Otp{" "}
              </button>
            </form>
          </div>
        </div>
        <div className="w-1/2  max-phone:hidden  flex flex-col justify-center overflow-hidden ro items-center rounded-lg">
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

export default ForgotPassword;
