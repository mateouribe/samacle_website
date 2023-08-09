import React, { useLayoutEffect, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { colors } from "../../utils/constants";
import { gsap } from "gsap";

const CustomButton = ({
  children,
  className,
  onClick,
  type,
  blackColor = false,
}) => {
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
      className={`max-w-fit pl-20 pr-[70px] py-[15px] flex text-left gap-10 rounded-[10px] cursor-none ${className} text-sm uppercase font-light`}
      style={{
        backgroundColor: blackColor ? colors.black : colors.main,
        color: blackColor ? colors.main : colors.black,
      }}
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
          <FiArrowUpRight
            color={blackColor ? colors.main : colors.black}
            size={20}
          />
        </div>
      </div>
    </button>
  );
};

export default CustomButton;
