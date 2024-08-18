import React, { useState } from "react";
import { json, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import facebook from "../../assets/facebook.svg";
function AdminSignup() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const passwordRegex = /^\S{6,}$/;
  const navigate = useNavigate();

  const handleSignup = (e) => {
    setUsernameError("");
    setPasswordError("");
    setNameError("");

    e.preventDefault();
    if (
      !username ||
      !password ||
      !name ||
      !emailRegex.test(username) ||
      !passwordRegex.test(password)
    ) {
      if (!username) {
        setUsernameError("Enter a email ");
      } else if (!emailRegex.test(username)) {
        setUsernameError("Enter valid email ");
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

      document.activeElement.blur();

      return;
    }

    console.log("email ", username);

    setNameError("");
    setPasswordError("");
    setUsernameError("");

    const userData = JSON.parse(localStorage.getItem("AdminUsers"));
    if (userData) {
      if (userData.find((el) => el.username === username)) {
        setUsername("");
        setUsernameError("Email already registerd");
      } else {
        userData.push({ name, password, username });
        console.log("in1");
        localStorage.setItem("AdminUsers", JSON.stringify(userData));
        navigate("/admin/login");
        setName("");
        setPassword("");
        setUsername("");
        setUsernameError("");
        setNameError("");
        setPasswordError("");
      }
    } else if (!userData) {
      console.log("in2");
      localStorage.setItem(
        "AdminUsers",
        JSON.stringify([{ name, password, username }])
      );
      navigate("/admin/login");
      setName("");
      setPassword("");
      setUsername("");
      setUsernameError("");
      setNameError("");
      setPasswordError("");
    }

    document.activeElement.blur();
  };
  const [inputActive, setInputActive] = useState(false);
  const [inputActive1, setInputActive1] = useState(false);
  const [inputActive2, setInputActive2] = useState(false);

  return (
    <div className=" admin-signup-wrapper">
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
      <div className=" signup-banner"></div>
      <div className=" signup-wrapper">
        <div className="login-main">
          <div className=" login-header">
            <h4>Join Us Today</h4>
            <span>Enter your email and password to register</span>
          </div>
          <div className="admin-login-form">
            <form onSubmit={handleSignup}>
              <fieldset
                className={`${
                  inputActive2 || name
                    ? "top-bar-control-fieldset-active-signup"
                    : "top-bar-control-fieldset-signup"
                }`}
                onFocusCapture={() => {
                  setInputActive2(true);
                }}
                onBlur={() => {
                  setInputActive2(false);
                }}
              >
                <legend
                  className={`${
                    inputActive2 || name
                      ? "top-bar-control-legend-active-signup"
                      : "top-bar-control-legend-signup"
                  }`}
                >
                  Name
                </legend>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setNameError("");
                  }}
                  //   placeholder="Username"
                />
              </fieldset>
              <p className="text-red-600   -mb-5">{nameError}</p>{" "}
              <fieldset
                className={`${
                  inputActive || username
                    ? "top-bar-control-fieldset-active-signup"
                    : "top-bar-control-fieldset-signup"
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
                      ? "top-bar-control-legend-active-signup"
                      : "top-bar-control-legend-signup"
                  }`}
                >
                  Username
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
                    ? "top-bar-control-fieldset-active-signup"
                    : "top-bar-control-fieldset-signup"
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
                      ? "top-bar-control-legend-active-signup"
                      : "top-bar-control-legend-signup"
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
              <div className=" signup-terms">
                {" "}
                <input className=" signup-terms-input" type="checkbox" />
                <span>I agree the </span> <Link>Terms and Condition</Link>
              </div>
              <button type="submit" className="admin-login-form-button">
                {" "}
                SIGN UP
              </button>
            </form>
            <div className=" admin-signup-link">
              Don't have an account?{" "}
              <span>
                <Link to="/admin/login">Sign In</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSignup;
