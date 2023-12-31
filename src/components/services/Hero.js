import React, { useLayoutEffect, useRef } from "react";
import CustomSection from "../customElements/CustomSection";
import CustomImage from "../customElements/CustomImage";
import { gsap, Expo } from "gsap";
import SplitText from "../../utils/Split3.min";
import { ScrollTrigger } from "gsap/all";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const container = useRef(null);
  const { t } = useTranslation();

  useLayoutEffect(() => {
    const splitTitleParent = new SplitText("#servicesText", {
      type: "words, chars",
      chars: "chars",
      charsClass: "wordsParent",
    });

    const splitTitle = new SplitText("#servicesText", {
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
      ScrollTrigger.create({
        trigger: ".imgTriggerS",
        start: "top 10%",
        end: "bottom 10%",
        scrub: 1.5,
        animation: gsap.to(".servicesMainImg", {
          scale: 0.9,
        }),
      });
    }, container);

    return () => ctx.revert();
  }, []);
  return (
    <div ref={container}>
      <CustomSection
        fullHeightNav
        className="flex flex-col items-end pt-desktop md:pt-tablet"
      >
        <h4
          className="text-[20px] lg:text-[30px] font-swearDisplay leading-[95%] text-black text-right w-[80%] md:w-1/2 px-mobile md:px-tablet lg:px-desktop"
          id="servicesText"
        >
          {t("services.welcomeMessage")}
        </h4>
        <div className="w-full h-[80vh] imgTriggerS">
          <div className="relative w-full h-full servicesMainImg">
            <CustomImage
              image="/images/rocket_services.png"
              onLoad
              noHover
              noRounded
            />
          </div>
        </div>
      </CustomSection>
    </div>
  );
};

export default Hero;
