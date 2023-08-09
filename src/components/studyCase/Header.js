import React, { useLayoutEffect, useRef } from "react";
import CustomSection from "../customElements/CustomSection";
import { gsap, Expo } from "gsap";
import SplitText from "../../utils/Split3.min";

const Header = ({ project }) => {
  const container = useRef(null);
  useLayoutEffect(() => {
    const splitTitleParent = new SplitText(".projectTitle", {
      type: "words, chars",
      chars: "chars",
      charsClass: "wordsParent",
    });

    const splitTitle = new SplitText(".projectTitle", {
      type: "words, chars",
      charsClass: "wordsBlack",
    });

    const ctx = gsap.context(() => {
      let tl = gsap.timeline({});
      tl.fromTo(
        splitTitle.chars,
        {
          y: "150px",
        },
        {
          y: 0,
          duration: 1.5,
          ease: Expo.easeInOut,
          stagger: 0.008,
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full min-h-[50vh] pt-desktop pb-mobile px-mobile md:px-tabler lg:px-desktop relative">
      <h5 className="text-[70px] md:text-[80px] lg:text-[90px] text-black font-medium uppercase w-full projectTitle">
        {project.info.title} <br /> ©{project.info.date}
      </h5>
    </div>
  );
};

export default Header;
