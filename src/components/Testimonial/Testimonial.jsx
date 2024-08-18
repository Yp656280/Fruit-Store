import React, { useEffect, useState } from "react";
import "react-slideshow-image/dist/styles.css";

import DisplayPage from "../DisplayPage";
import Main8 from "../Home/Main8";

function Testimonial() {
  return (
    <>
      <DisplayPage data={{ title: "Testimonial" }} />
      <Main8 />
    </>
  );
}

export default Testimonial;
