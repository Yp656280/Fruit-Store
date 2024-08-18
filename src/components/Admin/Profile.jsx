import React, { useState } from "react";
import { Link } from "react-router-dom";

function Profile() {
  const [navClass, setNavClass] = useState("app");
  return (
    <>
      <div className=" profile-header"></div>
      <div className=" profile-content">
        <div className=" profile-content-header">
          <div className="content-header-image">
            {" "}
            <img
              src="https://demos.creative-tim.com/material-dashboard-react/static/media/bruce-mars.8a606c4a6dab54c9ceff.jpg"
              alt=""
            />
          </div>
          <div className="content-header-name">
            <h5>Richard Davis</h5>
            <span>CEO / Co-Founder</span>
          </div>
          <div className="content-header-btn-div">
            <header>
              <span className={`header-span ${navClass} `}>
                <div></div>
              </span>
              <button onClick={() => setNavClass("app")}>
                <span className=" material-icons mr-2"> home</span>
                <p>App</p>
              </button>
              <button onClick={() => setNavClass("message")}>
                <span className=" material-icons mr-2">email</span>
                <p>Message</p>
              </button>
              <button onClick={() => setNavClass("settings")}>
                {" "}
                <span className=" material-icons mr-2">settings</span>
                <p>Settings</p>
              </button>
            </header>
          </div>
        </div>
        <div className=" profile-info">
          <div className="platform-settings">
            <h1>Platform Settings</h1>

            <div className="platform-settings-controls">
              <span className="platform-settings-account">ACCOUNT</span>
              <div className="account-btns">
                <div className="toggle">
                  <span></span>
                </div>
                <h2>Email me when someone follows me</h2>
              </div>{" "}
              <div className="account-btns">
                <span>d</span>
                <h2>Email me when someone answers on my post</h2>
              </div>{" "}
              <div className="account-btns">
                <span>d</span>
                <h2>Email me when someone mentions me</h2>
              </div>{" "}
              <div className="platform-settings-application ">Application</div>
              <div className="account-btns">
                <span>d</span>
                <h2>New launches and projects</h2>
              </div>{" "}
              <div className="account-btns">
                <span>d</span>
                <h2>Monthly product updates</h2>
              </div>{" "}
              <div className="account-btns">
                <span>d</span>
                <h2>Subscribe to newsletter</h2>
              </div>{" "}
            </div>
          </div>
          <div className=" profile-information">
            <hr />
            <div className="profile-information-main-div">
              {" "}
              <h1>
                Profile Information{" "}
                <span className=" material-icons right-0 cursor-pointer">
                  edit
                </span>
              </h1>
              <p>
                Hi, I’m Alec Thompson, Decisions: If you can’t decide, the
                answer is no. If two equally difficult paths, choose the one
                more painful in the short term (pain avoidance is creating an
                illusion of equality).
              </p>
              <div className="profile-information-details ">
                <span>Full Name: </span>
                <h2> Alec M. Thompson</h2>
              </div>{" "}
              <div className="profile-information-details ">
                <span>Mobile: </span>
                <h2> (44) 123 1234 123</h2>
              </div>{" "}
              <div className="profile-information-details ">
                <span>Email: </span>
                <h2> alecthompson@mail.com</h2>
              </div>{" "}
              <div className="profile-information-details ">
                <span>Location:</span>
                <h2> USA</h2>
              </div>
              <div className="profile-information-details ">
                <span>Social:</span>
                <h2 className=" flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0 0 48 48"
                    className=" mr-2"
                  >
                    <path
                      fill="#3F51B5"
                      d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                    ></path>
                    <path
                      fill="#FFF"
                      d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0 0 48 48"
                    className=" mr-2"
                  >
                    <path
                      fill="#03A9F4"
                      d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                  </svg>
                </h2>
              </div>
            </div>
          </div>
          <div className=" profile-conversations">
            <hr />
            <div className="profile-conversations-main-div">
              {" "}
              <h1>Conversations</h1>
              <div className="profile-conversations-items ">
                <img
                  src="https://demos.creative-tim.com/material-dashboard-react/static/media/kal-visuals-square.3210e28a48ff572ae88b.jpg"
                  alt=""
                />
                <div className=" conversation-item-div">
                  <h5>Sophie.B</h5> <h6>Hi! I need more information.</h6>
                </div>

                <h3>Reply</h3>
              </div>{" "}
              <div className="profile-conversations-items ">
                <img
                  src="https://demos.creative-tim.com/material-dashboard-react/static/media/marie.c28f32663b6432b46f78.jpg"
                  alt=""
                />
                <div className=" conversation-item-div">
                  <h5>Sophie.B</h5> <h6>Hi! I need more information.</h6>
                </div>

                <h3>Reply</h3>
              </div>{" "}
              <div className="profile-conversations-items ">
                <img
                  src="https://demos.creative-tim.com/material-dashboard-react/static/media/ivana-square.f7bc23b269d1d2509c82.jpg"
                  alt=""
                />
                <div className=" conversation-item-div">
                  <h5>Sophie.B</h5> <h6>Hi! I need more information.</h6>
                </div>

                <h3>Reply</h3>
              </div>{" "}
              <div className="profile-conversations-items ">
                <img
                  src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-4.85c82b6e60178804017f.jpg"
                  alt=""
                />
                <div className=" conversation-item-div">
                  <h5>Sophie.B</h5> <h6>Hi! I need more information.</h6>
                </div>

                <h3>Reply</h3>
              </div>{" "}
              <div className="profile-conversations-items ">
                <img
                  src="https://demos.creative-tim.com/material-dashboard-react/static/media/team-3.0ef0be95e6850814c79e.jpg"
                  alt=""
                />
                <div className=" conversation-item-div">
                  <h5>Sophie.B</h5> <h6>Hi! I need more information.</h6>
                </div>

                <h3>Reply</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
