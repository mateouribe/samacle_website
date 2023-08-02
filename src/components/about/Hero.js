import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Expo, gsap } from "gsap";
import CustomSection from "../CustomSection";
import SplitText from "../../utils/Split3.min";

const Hero = () => {
  const container = useRef(null);

  useLayoutEffect(() => {
    const splitTitleParent = new SplitText("#aboutTitle", {
      type: "words, chars",
      chars: "chars",
      charsClass: "wordsParent",
    });

    const splitTitle = new SplitText("#aboutTitle", {
      type: "words, chars",
      charsClass: "wordsBlack swearFont",
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
          duration: 2,
          ease: Expo.easeInOut,
          stagger: 0.02,
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);
  return (
    <div ref={container}>
      <CustomSection
        fullHeightNav
        hasPadding
        className="py-desktop md:py-desktop lg:py-tablet"
      >
        <h4
          className="text-[65px] md:text-[86px] lg:text-[106px] font-swearDisplay leading-[95%] w-full lg:w-[90%] text-black"
          id="aboutTitle"
        >
          We live and breathe design, innovation, and the thrill of helping
          businesses grow.
        </h4>
      </CustomSection>
    </div>
  );
};

export default Hero;