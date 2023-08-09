import React, { useLayoutEffect, useRef } from "react";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const CustomImage = ({
  image,
  position = { start: "top 70%", end: "bottom 70%" },
  onLoad = false,
  duration = 1.2,
  noHover = false,
}) => {
  const container = useRef(null);
  const tl = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const animationSlideout = gsap.to(".slideOut", {
        scaleY: 0,
        duration: duration,
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
        animationSlideout.delay(0.2);
        animationCoverImage.delay(0.2);
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

      if (!noHover) {
        tl.current = gsap.timeline({ paused: true });

        tl.current.to(".containerScale", {
          scale: 0.99,
          duration: 2,
          ease: Expo.easeOut,
        });
      }
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="w-full h-full relative"
      ref={container}
      onMouseEnter={() => {
        if (!noHover) {
          tl.current.play();
          tl.current.duration(2);
        }
      }}
      onMouseLeave={() => {
        if (!noHover) {
          tl.current.reverse();
          tl.current.duration(0.8);
        }
      }}
    >
      <div className="w-full h-full absolute top-0 left-0 z-[9] origin-top slideOut dependsOnBgColor bg-white" />
      <div className="w-full h-full overflow-hidden relative containerScale">
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
