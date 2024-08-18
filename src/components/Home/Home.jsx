import React, { useEffect, useState } from "react";

import Main1 from "./Main1";
import Main2 from "./Main2";
import Main3 from "./Main3";
import Main4 from "./Main4";
import Main5 from "./Main5";
import Main6 from "./Main6";
import Main7 from "./Main7";
import Main8 from "./Main8";
import Main9 from "./Main9";
import { useInView } from "react-intersection-observer";

function Home() {
  return (
    <div className="flex flex-col xl:justify-center xl:items-center ">
      <Main1 />
      <Main2 />
      <Main5 />
      <Main4 />
      <Main9 />
      <Main3 />
      <Main6 />
      <Main7 />
      <Main8 />
    </div>
  );
}

export default Home;
