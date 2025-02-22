import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function AdminLogin() {
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

    const userData = JSON.parse(localStorage.getItem("AdminUsers"));
    if (userData) {
      userData.every((cur) => {
        if (cur.username === username && cur.password === password) {
          localStorage.setItem("AdminLogin", true);
          console.log("in");
          navigate("/admin");
          setPasswordError("");
          setUsernameError("");
          setUsername("");
          setPassword("");
          return false;
        } else if (cur.username === username && cur.password !== password) {
          setPassword("");
          console.log("in2");
          setPasswordError("Incorrect password");
          return false;
        } else {
          setUsername("");
          setPassword("");
          console.log("in3");
          setUsernameError("User not registerd");
          setPasswordError("Enter a password");
          return false;
        }

        return true;
      });
    } else if (!userData) {
      setUsername("");
      setPassword("");
      setUsernameError("User not registerd");
      setPasswordError("Enter a password");
    }
  };
  const [inputActive, setInputActive] = useState(false);
  const [inputActive1, setInputActive1] = useState(false);

  return (
    <div className=" admin-login-wrapper">
      {/* <div className=" login-top-bar">
        <div className=" admin-login-heading">
          <span>Fruitables Admin</span>
        </div>
        <div className=" admin-login-nav-links">
          <Link>
            {" "}
            <span className=" material-icons mr-2"> donut_large</span>Dashboard
          </Link>
          <Link>
            {" "}
            <span className=" material-icons mr-2"> person</span>Profile
          </Link>
          <Link>
            <span className=" material-icons mr-2"> account_circle</span>Signup
          </Link>
        </div>
      </div> */}
      <div className=" login-wrapper">
        <div className="login-main">
          <div className=" login-header">
            <h4>Sign In</h4>
            <div className=" login-social-links">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  style={{ fill: "#FFFFFF" }}
                >
                  <path d="M 21.800781 0 L 2.199219 0 C 1 0 0 1 0 2.199219 L 0 21.800781 C 0 23 1 24 2.199219 24 L 12 24 L 12 14 L 9 14 L 9 11 L 12 11 L 12 8 C 12 5.5 13 4 16 4 L 19 4 L 19 7 L 17.699219 7 C 16.800781 7 16 7.800781 16 8.699219 L 16 11 L 20 11 L 19.5 14 L 16 14 L 16 24 L 21.800781 24 C 23 24 24 23 24 21.800781 L 24 2.199219 C 24 1 23 0 21.800781 0 Z"></path>
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="15"
                  height="15"
                  viewBox="0 0 50 50"
                  style={{ fill: "#FFFFFF" }}
                >
                  <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="15"
                  height="15"
                  viewBox="0 0 50 50"
                  style={{ fill: "#FFFFFF" }}
                >
                  <path d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="admin-login-form">
            <form onSubmit={handleLogin}>
              <fieldset
                className={`${
                  inputActive || username
                    ? "top-bar-control-fieldset-active-x"
                    : "top-bar-control-fieldset-x"
                }`}
                onFocusCapture={() => {
                  setInputActive(true);
                }}
                onBlur={() => {
                  setInputActive(false);
                }}
              >
                <legend
                  className={`${
                    inputActive || username
                      ? "top-bar-control-legend-active-x"
                      : "top-bar-control-legend-x"
                  }`}
                >
                  username
                </legend>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setUsernameError("");
                  }}
                  //   placeholder="Username"
                />
              </fieldset>
              <p className="text-red-600   -mb-5">{usernameError}</p>{" "}
              <fieldset
                className={`${
                  inputActive1 || password
                    ? "top-bar-control-fieldset-active-x"
                    : "top-bar-control-fieldset-x"
                }`}
                onFocusCapture={() => {
                  setInputActive1(true);
                }}
                onBlur={() => {
                  setInputActive1(false);
                }}
              >
                <legend
                  className={`${
                    inputActive1 || password
                      ? "top-bar-control-legend-active-x"
                      : "top-bar-control-legend-x"
                  }`}
                >
                  Password
                </legend>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError("");
                  }}
                  //   placeholder="Password"
                />
              </fieldset>
              <p className="text-red-600   mb-2">{passwordError}</p>
              <button type="submit" className="admin-login-form-button">
                {" "}
                SIGN IN
              </button>
            </form>
            <div className=" admin-signup-link">
              Don't have an account?{" "}
              <span>
                <Link to="/admin/signup">Sign up</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
