import React, { useLayoutEffect, useRef } from "react";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const CustomImage = ({
  image,
  position = { start: "top 70%", end: "bottom 70%" },
  index,
}) => {
  const container = useRef(null);
  const tl = useRef(null);

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

      //Hover effect
      // tl.current = gsap.timeline({ paused: true });
      // gsap.set(".coverImage", {
      //   transformOrigin: index % 2 === 0 ? "top left" : "top right",
      // });
      // tl.current.to(".coverImage", {
      //   scale: 0.99,
      //   duration: 0.5,
      //   ease: Expo.easeOut,
      // });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="w-full h-full relative"
      ref={container}
      // onMouseEnter={() => {
      //   tl.current.play();
      // }}
      // onMouseLeave={() => {
      //   tl.current.reverse();
      // }}
    >
      <div className="w-full h-full absolute top-0 left-0 z-[9] origin-top slideOut dependsOnBgColor" />
      <div className="w-full h-full overflow-hidden relative">
        <div
          className="w-full h-full absolute top-0 left-0 z-[5] coverImage rounded-10"
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
