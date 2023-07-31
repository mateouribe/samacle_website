import React, { useLayoutEffect, useRef } from "react";
import CustomSection from "../CustomSection";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import colors from "../../utils/constants";
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const container = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let tl = gsap.timeline();
      const body = document.querySelector("body");
      ScrollTrigger.create({
        trigger: container.current,
        start: "top 50%",
        end: "bottom 50%",
        animation: gsap.to(body, { background: colors.black }),
        toggleActions: "play reverse play reverse",
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container}>
      <CustomSection hasPadding className="flex flex-col gap-50 min-h-[100vh]">
        <h3 className="text-titleMobile md:text-titleTablet text-main font-normal">
          Our services
        </h3>
        <div className="w-full h-full bg-green-300 flex flex-col">
          <div className="bg-purple-300 w-full h-full"></div>
          <div className="bg-yellow-300 w-full h-full"></div>
          <div className="bg-orange-300 w-full h-full"></div>
        </div>
      </CustomSection>
    </div>
  );
};

export default Services;
