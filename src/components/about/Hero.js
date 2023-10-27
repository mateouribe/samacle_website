import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Expo, gsap } from "gsap";
import CustomSection from "../customElements/CustomSection";
import SplitText from "../../utils/Split3.min";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const container = useRef(null);
  const { t } = useTranslation();

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
          duration: 1.5,
          ease: Expo.easeInOut,
          stagger: 0.008,
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);
  return (
    <div ref={container}>
      <CustomSection
        hasPadding
        className="py-desktop md:py-desktop lg:py-tablet"
      >
        <h1
          className="text-[45px] md:text-[55px] lg:text-[65px] xl:text-[75px] font-swearDisplay leading-[95%] w-full lg:w-[90%] text-black"
          id="aboutTitle"
        >
          {t("about.welcomeMessage")}
        </h1>
      </CustomSection>
    </div>
  );
};

export default Hero;
