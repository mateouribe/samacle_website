import React from "react";
import { AiOutlineBehance, AiOutlineInstagram } from "react-icons/ai";
import { colors } from "../utils/constants";
import { Expo, gsap } from "gsap";

const SocialMedia = ({ color, bgColor }) => {
  // const onMouseEnter = (e) => {
  //   gsap.to(e.target, {
  //     y: -5,
  //     duration: 0.5,
  //     ease: Expo.easeInOut,
  //   });
  // };
  // const onMouseLeave = (e) => {
  //   gsap.fromTo(
  //     e.target,
  //     {
  //       y: -5,
  //     },
  //     {
  //       y: 0,
  //       duration: 0.5,
  //       ease: Expo.easeInOut,
  //     }
  //   );
  // };
  return (
    <>
      <li
        className="p-5 rounded-full"
        style={{
          backgroundColor: bgColor,
        }}
      >
        <a href="https://www.instagram.com/samacle.inc/?hl=es">
          <AiOutlineInstagram color={color} size={20} />
        </a>
      </li>
      <li
        className="p-5 rounded-full"
        style={{
          backgroundColor: bgColor,
        }}
        // onMouseEnter={onMouseEnter}
        // onMouseLeave={onMouseLeave}
      >
        <a href="https://www.behance.net/samacle">
          <AiOutlineBehance color={color} size={20} />
        </a>
      </li>
    </>
  );
};

export default SocialMedia;
