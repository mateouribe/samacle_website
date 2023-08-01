import React, { useLayoutEffect, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { colors } from "../utils/constants";
import { gsap } from "gsap";

const CustomButton = ({ children, className, onClick, type }) => {
  const container = useRef(null);
  const tl = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({ paused: true });

      tl.current.to(".icon", {
        y: -2,
        x: 2,
        duration: 0.5,
      });
      tl.current.to(
        container.current,
        {
          scale: 1.01,
        },
        "-=0.5"
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <button
      className={`max-w-fit bg-main px-[50px] py-[20px] text-white flex items-center gap-10 rounded-[10px] ${className}`}
      onClick={onClick}
      ref={container}
      onMouseEnter={() => {
        tl.current.play();
      }}
      onMouseLeave={() => {
        tl.current.reverse();
      }}
      type={type}
    >
      {children}
      <div className="relative w-[20px] h-[20px] overflow-hidden">
        <div className="w-full h-full absolute top-0 icon">
          <FiArrowUpRight color={colors.white} size={20} />
        </div>
      </div>
    </button>
  );
};

export default CustomButton;
