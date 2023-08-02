import React, { useLayoutEffect, useRef } from "react";
import { Expo, gsap } from "gsap";
import { colors } from "../utils/constants";

const CustomATag = ({ href, children, colorHover }) => {
  const container = useRef(null);
  const tl = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".bottomLine", {
        scaleX: 0,
      });
      tl.current = gsap.timeline({ paused: true });

      tl.current.to(".bottomLine", {
        scaleX: 1,
        duration: 0.7,
        ease: Expo.easeOut,
      });
      tl.current.to(
        container.current,
        {
          color: colorHover,
          duration: 0.7,
        },
        "-=0.7"
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <a
      href={href}
      onMouseEnter={() => {
        tl.current.play();
      }}
      onMouseLeave={() => {
        tl.current.reverse();
      }}
      ref={container}
      className="relative"
    >
      {children}
      <div className="w-full h-[1.5px] bg-main absolute bottom-0 bottomLine origin-left" />
    </a>
  );
};

export default CustomATag;
