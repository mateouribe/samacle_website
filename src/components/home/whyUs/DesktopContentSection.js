import React, { useLayoutEffect, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import colors from "../../../utils/constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const DesktopContentSection = ({
  title,
  text,
  className = "",
  bgColor,
  backToWhite = false,
}) => {
  const container = useRef(null);

  useLayoutEffect(() => {
    gsap.to("body", {
      overwrite: "auto",
    });
    const heart = document.querySelector(".heart");
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container.current,
        start: "top 80%",
        end: "bottom 80%",
        onToggle: (self) => {
          // whenever we enter a section from either direction (scrolling up or down), animate to its color
          if (self.isActive) {
            gsap.to("body", {
              backgroundColor: bgColor,
              overwrite: "auto",
            });
            gsap.to(heart, {
              opacity: 0.1,
            });
          } else if (backToWhite) {
            gsap.to("body", {
              backgroundColor: colors.white,
              overwrite: "auto",
            });
            gsap.to(heart, {
              opacity: 1,
            });
          }
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className={`desktopContentSection h-view flex flex-col justify-center gap-50 ${className}`}
      ref={container}
      data-color={bgColor}
    >
      <div className="flex flex-col gap-5">
        <h3 className="text-black text-subtitleTablet italic">{title}</h3>
        <p className="text-black">{text}</p>
      </div>
      <button className="max-w-fit bg-main px-[50px] py-[20px] text-white flex items-center gap-10">
        Become a client <FiArrowUpRight color={colors.white} size={20} />
      </button>
    </div>
  );
};

export default DesktopContentSection;
