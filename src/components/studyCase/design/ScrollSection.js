import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { changeBgColorAnimation } from "../../../utils/gsapAnimations";
import { colors } from "../../../utils/constants";
gsap.registerPlugin(ScrollTrigger);

const ScrollSection = ({ className, image, index }) => {
  return (
    <div
      className={`w-[100vw] h-view flex justify-center items-center ${className} p-tablet py-tablet ${
        index === 0 && "horizontalColor"
      }`}
      key={index}
    >
      <div
        className="hub__wrapper w-[100vw] h-view overflow-hidden relative"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};
export default ScrollSection;
