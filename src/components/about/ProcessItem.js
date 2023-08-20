import React, { useLayoutEffect, useRef } from "react";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import LineTitle from "../customElements/LineTitle";
gsap.registerPlugin(ScrollTrigger);

const ProcessItem = ({ process }) => {
  const container = useRef(null);

  return (
    <div
      className="w-full flex flex-col md:flex-row justify-between items-center gap-100"
      ref={container}
    >
      <div className="processesContainer w-[70%]">
        <h5 className="text-main text-[20px] block md:hidden">
          {process.title}
        </h5>
        <p className="w-full md:w-full text-justify text-white">
          {process.description}
        </p>
      </div>
      <LineTitle title={process.title} />
    </div>
  );
};

export default ProcessItem;
