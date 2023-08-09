import React, { useLayoutEffect, useRef } from "react";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import LineTitle from "../customElements/LineTitle";
gsap.registerPlugin(ScrollTrigger);

const ProcessItem = ({ process }) => {
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
      className="w-ful flex flex-col md:flex-row justify-between items-stretch gap-100"
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
