import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EditComponent from "./EditComponent";

function Dashboard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("Items")));
  }, []);

  return (
    <>
      {" "}
      <div className=" admin-analytics">
        <div className=" admin-analytics-card">
          <div className=" admin-analytics-div">
            <div className=" admin-analytics-header">
              <div className="admin-analytics-black-div">
                <span className=" material-icons">weekend</span>
              </div>
              <div className="admin-analytics-header-numbers ">
                <span>Orders</span>
                <h4>281</h4>
              </div>
            </div>
            <hr className="admin-analytics-hr" />
            <div className="admin-analytics-footer">
              <span>+55%</span>
              <p>than last week</p>
            </div>
          </div>
        </div>{" "}
        <div className=" admin-analytics-card">
          <div className=" admin-analytics-div">
            <div className=" admin-analytics-header">
              <div className="admin-analytics-blue-div">
                <span className=" material-icons">leaderboard</span>
              </div>
              <div className="admin-analytics-header-numbers ">
                <span>Today's user</span>
                <h4>2,300</h4>
              </div>
            </div>
            <hr className="admin-analytics-hr" />
            <div className="admin-analytics-footer">
              <span>+3%</span>
              <p>than last month</p>
            </div>
          </div>
        </div>{" "}
        <div className=" admin-analytics-card">
          <div className=" admin-analytics-div">
            <div className=" admin-analytics-header">
              <div className="admin-analytics-green-div">
                <span className=" material-icons">store</span>
              </div>
              <div className="admin-analytics-header-numbers ">
                <span>Revenue</span>
                <h4>34k</h4>
              </div>
            </div>
            <hr className="admin-analytics-hr" />
            <div className="admin-analytics-footer">
              <span>+1%</span>
              <p>than yesterday</p>
            </div>
          </div>
        </div>{" "}
        <div className=" admin-analytics-card">
          <div className=" admin-analytics-div">
            <div className=" admin-analytics-header">
              <div className="admin-analytics-pink-div">
                <span className=" material-icons">person_add</span>
              </div>
              <div className="admin-analytics-header-numbers ">
                <span>Followers</span>
                <h4>281</h4>
              </div>
            </div>
            <hr className="admin-analytics-hr" />
            <div className="admin-analytics-footer">
              <p>just updated</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" add-delete-buttons">
        <button className=" add-delete-buttons-1">
          <Link to="/admin/addcategory">Add a Item</Link>
        </button>{" "}
        {/* <button className="add-delete-buttons-2">Delete a Item</button> */}
      </div>
      <div className=" admin-fresh-fruits">
        <div className=" admin-fresh-fruits-container">
          {" "}
          <div className=" admin-table-heading"> Fresh Fruits</div>
          <div className=" admin-fruits-table">
            <table>
              <thead>
                <th className=" w-[45%]">Name</th>
                <th className=" w-[150px]">Status</th>
                <th className=" w-[150px] text-center"> Quantity</th>
                <th className=" w-[200px] text-center">Organic</th>
                <th className=" w-[150px]"> Edit</th>
              </thead>
              <tbody>
                {data?.map((cur) =>
                  cur.type === "fruits" ? (
                    <tr>
                      <td>
                        <div className=" fresh-fruits-table-row">
                          <img
                            src="https://themewagon.github.io/fruitables/img/fruite-item-2.jpg"
                            alt=""
                          />
                          {cur.name}
                        </div>
                      </td>
                      <td>
                        <div className=" fresh-fruits-table-row-status">
                          {" "}
                          Available
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className=" fresh-fruits-table-quantity">
                          {cur.quantity}
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="fresh-fruits-table-organic ">
                          {cur.organic ? "yes" : "no"}
                        </div>
                      </td>
                      <td>
                        <EditComponent data={cur} />
                      </td>
                    </tr>
                  ) : (
                    ""
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className=" admin-fresh-vegetable">
        <div className=" admin-fresh-vegetable-container">
          {" "}
          <div className=" admin-table-heading-vegetable">
            {" "}
            Fresh Vegetables
          </div>
          <div className=" admin-vegetable-table">
            <table>
              <thead>
                <th className=" w-[45%]">Name</th>
                <th className=" w-[150px]">Status</th>
                <th className=" w-[150px] text-center"> Quantity</th>
                <th className=" w-[200px] text-center"> Organic</th>
                <th className=" w-[150px]"> Edit</th>
              </thead>
              <tbody>
                {data?.map((cur) =>
                  cur.type === "vegetable" ? (
                    <tr>
                      <td>
                        <div className=" fresh-fruits-table-row">
                          <img
                            src="https://themewagon.github.io/fruitables/img/fruite-item-2.jpg"
                            alt=""
                          />
                          {cur.name}
                        </div>
                      </td>
                      <td>
                        <div className=" fresh-fruits-table-row-status">
                          {" "}
                          Available
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className=" fresh-fruits-table-quantity">
                          {cur.quantity}
                        </div>
                      </td>
                      <td>
                        {" "}
                        <div className="fresh-fruits-table-organic ">
                          {cur.organic ? "yes" : "no"}
                        </div>
                      </td>
                      <td>
                        <button>
                          <span class="material-icons fruits-delete">
                            more_vert
                          </span>
                        </button>
                      </td>
                    </tr>
                  ) : (
                    ""
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
