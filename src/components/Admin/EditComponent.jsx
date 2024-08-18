import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function EditComponent({ data, setTemp, temp }) {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const deleteItem = () => {
    const data1 = JSON.parse(localStorage.getItem("Items"));
    const data2 = data1.filter((cur) => cur.name !== data.name);
    localStorage.setItem("Items", JSON.stringify(data2));
    setTemp(!temp);
    setVisible(false);
  };
  const updateItem = () => {
    navigate("/admin/additem", {
      state: { data },
    });
  };
  return (
    <>
      <button onClick={() => setVisible(!visible)}>
        <span class="material-icons fruits-delete">more_vert</span>
      </button>
      <div className={`edit-div ${visible ? " flex" : " hidden "}`}>
        <button className=" edit-div-btn-1" onClick={updateItem}>
          Edit<span class="material-icons">edit</span>
        </button>
        <Link>
          <button className=" edit-div-btn-2" onClick={() => deleteItem()}>
            Delete<span class="material-icons">delete</span>
          </button>
        </Link>
      </div>
    </>
  );
}

export default EditComponent;
