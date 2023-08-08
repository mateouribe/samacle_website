import React, { useLayoutEffect, useRef } from "react";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const CustomImage = ({
  image,
  position = { start: "top 70%", end: "bottom 70%" },
  onLoad = false,
}) => {
  const container = useRef(null);
  const tl = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const animationSlideout = gsap.to(".slideOut", {
        scaleY: 0,
        duration: 1.2,
        ease: Expo.easeInOut,
      });

      const animationCoverImage = gsap.from(".coverImage", {
        scale: 1.3,
        duration: 2,
        ease: Expo.easeInOut,
      });

      if (onLoad) {
        animationSlideout.play();
        animationCoverImage.play();
      } else {
        ScrollTrigger.create({
          trigger: container.current,
          start: position.start,
          end: position.end,
          animation: animationSlideout,
        });
        ScrollTrigger.create({
          trigger: container.current,
          start: position.start,
          end: position.end,
          animation: animationCoverImage,
        });
      }
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full h-full relative" ref={container}>
      <div className="w-full h-full absolute top-0 left-0 z-[9] origin-top slideOut dependsOnBgColor bg-white" />
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
