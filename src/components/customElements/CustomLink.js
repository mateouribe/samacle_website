import React, { useLayoutEffect, useRef } from "react";
import { navigateToPage } from "../../utils/navigateToPage";
import { useNavigate } from "react-router-dom";
import { Expo, gsap } from "gsap";
import { colors } from "../../utils/constants";

const CustomLink = ({ children, className, route, image = "", onClick }) => {
  const navigate = useNavigate();
  const tl = useRef(null);
  const container = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();
      tl.current = gsap.timeline({ paused: true });
      if (image !== "") {
        mm.add("(min-width: 1024px)", () => {
          gsap.set(".link", {
            opacity: 0,
          });

          tl.current.to(".link", {
            opacity: 1,
            duration: 0,
          });
          tl.current.to(".screenshot", {
            scaleY: 0,
            duration: 1,
            ease: Expo.easeOut,
          });
        });
      }

      tl.current.to(
        container.current,
        {
          color: colors.main,
          duration: 0,
        },
        image ? "-=1" : ""
      );
    }, container);

    return () => ctx.revert();
  }, [image]);

  const onMouseEnterItem = () => {
    tl.current.play();
  };

  const onMouseLeaveItem = () => {
    tl.current.reverse();
  };

  return (
    <li
      onClick={() => {
        onClick && onClick();
        navigateToPage(navigate, route);
      }}
      className={`${className} relative hoverMouse`}
      ref={container}
      onMouseEnter={onMouseEnterItem}
      onMouseLeave={onMouseLeaveItem}
    >
      {children}
      {image !== "" && (
        <>
          <img
            src={image}
            alt="Screenshot of about page"
            className="absolute min-w-[70px] left-1/2 transform -translate-x-1/2 top-full link pointer-events-none rounded-[2px]"
          />
          <div className="absolute w-[70px] h-[45.5px] bg-white left-1/2 transform -translate-x-1/2 top-full screenshot origin-bottom pointer-events-none" />
        </>
      )}
    </li>
  );
};

export default CustomLink;
