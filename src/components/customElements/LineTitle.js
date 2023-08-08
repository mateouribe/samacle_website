import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useLayoutEffect, useRef } from "react";

const LineTitle = ({ title }) => {
  const container = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".slideLeft", {
        scaleX: 0,
      });
      gsap.set(".processTitle", {
        y: 5,
        opacity: 0,
      });
      ScrollTrigger.create({
        trigger: container.current,
        start: "top 50%",
        end: "bottom 50%",
        animation: gsap.to(".slideLeft", {
          scaleX: 1,
          duration: 1.5,
          ease: Expo.easeOut,
        }),
      });
      ScrollTrigger.create({
        trigger: container.current,
        start: "top 50%",
        end: "bottom 50%",
        animation: gsap.to(".processTitle", {
          y: -20,
          opacity: 1,
          duration: 1,
          ease: Expo.easeOut,
        }),
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="w-[30%] hidden md:flex flex-col justify-center items-center relative"
      ref={container}
    >
      <span className="text-main text-sm absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-[calc(50%+10px)] processTitle">
        {title}
      </span>
      <div className="w-full h-[1px] bg-main slideLeft origin-left" />
    </div>
  );
};

export default LineTitle;
