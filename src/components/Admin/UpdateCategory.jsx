import React, { useEffect, useState } from "react";

function UpdateCategory({ handleEdit, cur, temp }) {
  const [visible2, setVisible2] = useState(false);
  useEffect(() => {
    setVisible2(false);
  }, [temp]);
  return (
    <>
      <button onClick={() => setVisible2(!visible2)}>
        <span class="material-icons fruits-delete">more_vert</span>
      </button>
      <div
        className={`edit-div-x ${visible2 ? " flex" : " hidden "}`}
        onClick={() => handleEdit(cur, setVisible2)}
      >
        <button className=" edit-div-btn-1">
          Edit
          <span class="material-icons">edit</span>
        </button>
      </div>
    </>
  );
}

export default UpdateCategory;
