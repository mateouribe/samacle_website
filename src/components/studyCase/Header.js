import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import CustomSection from "../customElements/CustomSection";
import { gsap, Expo } from "gsap";
import SplitText from "../../utils/Split3.min";

const Header = ({ project }) => {

  const [isLoaded, setIsLoaded] = useState(false);
  const container = useRef(null);

  useEffect(() => {
    if (project !== undefined && project !== null && project !== []) {
      setIsLoaded(true);
    }
  }, [project]);

  useLayoutEffect(() => {
    if(isLoaded) {
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
            stagger: 0.025,
          }
        );
      }, container);
  
      return () => ctx.revert();
    }
  }, [isLoaded]);

  return (
    <div className="w-full min-h-[50vh] pt-desktop pb-mobile px-mobile md:px-tabler lg:px-desktop relative" ref={container}>
      <h5 className="text-[70px] md:text-[80px] lg:text-[90px] text-black font-medium uppercase w-full projectTitle leading-[90%]">
        {project.info.title} <br /> ©{project.info.date}
      </h5>
    </div>
  );
};

export default Header;
