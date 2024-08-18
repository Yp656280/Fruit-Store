import React, { useEffect, useState } from "react";
import "./admin.css";
import { useInView } from "react-intersection-observer";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

import { Link } from "react-router-dom";
function Admin() {
  const location = useLocation();
  const [sidebarActive, setSidebarActive] = useState(
    location.pathname.slice(7)
  );
  const [inputActive, setInputActive] = useState(false);
  const { ref, inView } = useInView({
    threshold: 1,
    rootMargin: "-150px 0px 0px 0px",
  });
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const login = localStorage.getItem("AdminLogin");
    if (!login) {
      navigate("/admin/login");
    }
    if (login == "true") {
      setVisible(true);
    }
  }, []);
  return (
    <>
      {visible ? (
        <div className=" admin-wrapper">
          <div className=" admin-container">
            <div className=" admin-sidebar">
              <div className="sidebar-heading">Fruitables Dashboard</div>
              <hr className=" admin-hr" />
              <div className=" admin-option-list">
                <ul>
                  {/* <li
                    onClick={() => {
                      setSidebarActive("dashboard");
                    }}
                    className={`${
                      sidebarActive === "dashboard"
                        ? " admin-list-li-active"
                        : "admin-list-li"
                    }`}
                  >
                    <Link to="/admin/dashboard">
                      <div className=" admin-list-item">
                        <span className="admin-icon-div">
                          {" "}
                          <span class="material-icons">dashboard</span>
                        </span>
                        <div>Dashboard</div>
                      </div>
                    </Link>
                  </li> */}
                  <li
                    className={`${
                      sidebarActive === "profile"
                        ? " admin-list-li-active"
                        : "admin-list-li"
                    }`}
                    onClick={() => {
                      setSidebarActive("profile");
                    }}
                  >
                    <Link to="/admin/profile">
                      <div className=" admin-list-item">
                        <span className="admin-icon-div">
                          <span class="material-icons">person</span>
                        </span>
                        <div>Profile</div>
                      </div>
                    </Link>
                  </li>{" "}
                  <li
                    className={`${
                      sidebarActive === "products"
                        ? " admin-list-li-active"
                        : "admin-list-li"
                    }`}
                    onClick={() => {
                      setSidebarActive("products");
                    }}
                  >
                    <Link to="/admin/products">
                      <div className=" admin-list-item">
                        <span className="admin-icon-div">
                          <span class="material-icons">lunch_dining </span>
                        </span>
                        <div>Products</div>
                      </div>
                    </Link>
                  </li>
                  <li
                    className={`${
                      sidebarActive === "category"
                        ? " admin-list-li-active"
                        : "admin-list-li"
                    }`}
                    onClick={() => {
                      setSidebarActive("category");
                    }}
                  >
                    <Link to="/admin/category">
                      <div className=" admin-list-item">
                        <span className="admin-icon-div">
                          <span class="material-icons">category</span>
                        </span>
                        <div>Category</div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="sidebar-btn">
                {" "}
                <button className=" upgrade-button">UPGRADE TO PRO</button>
              </div>
            </div>
            <div className=" admin-main">
              <div className={`${!inView ? "top-bar-active" : "top-bar"}`}>
                <div className=" top-bar-navigation">
                  <div className=" top-bar-page-div">
                    <span class="material-icons top-bar-page-icon">home</span>
                    <span className="  mx-[8px] text-[14px] text-[#929ead]">
                      /
                    </span>
                    <span className="top-bar-page-name ">
                      {location.pathname.slice(7).charAt(0).toUpperCase() +
                        location.pathname.slice(7).substring(1)}
                    </span>
                  </div>

                  <div className=" top-bar-page-title">
                    {" "}
                    {location.pathname.slice(7).charAt(0).toUpperCase() +
                      location.pathname.slice(7).substring(1)}
                  </div>
                </div>
                <div className=" top-bar-control">
                  <button>
                    <span className=" material-icons "> account_circle</span>
                  </button>{" "}
                  <button>
                    <span className=" material-icons "> settings</span>
                  </button>{" "}
                  <div></div>
                  <button>
                    <span className=" material-icons "> notifications</span>
                  </button>
                </div>
              </div>
              <div ref={ref} className=" absolute h-[0.5px] " />
              <div className=" admin-main-div">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Admin;
