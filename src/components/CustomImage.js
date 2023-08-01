import React, { useLayoutEffect, useRef } from "react";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const CustomImage = ({
  image,
  position = { start: "top 70%", end: "bottom 70%" },
}) => {
  const container = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container.current,
        start: position.start,
        end: position.end,
        animation: gsap.to(".slideOut", {
          scaleY: 0,
          duration: 1.2,
          ease: Expo.easeInOut,
        }),
      });
      ScrollTrigger.create({
        trigger: container.current,
        start: position.start,
        end: position.end,
        animation: gsap.from(".coverImage", {
          scale: 1.3,
          duration: 2,
          ease: Expo.easeInOut,
        }),
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full h-full relative" ref={container}>
      <div className="w-full h-full absolute top-0 left-0 z-[9] origin-top slideOut dependsOnBgColor" />
      <div className="w-full h-full overflow-hidden relative">
        <div
          className="w-full h-full absolute top-0 left-0 z-[5] coverImage"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </div>
  );
};

export default CustomImage;
