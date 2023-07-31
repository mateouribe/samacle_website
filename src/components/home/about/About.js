import React, { useLayoutEffect, useRef } from "react";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import colors from "../../../utils/constants";
import AboutLetter from "./AboutLetter";
import SplitText from "../../../utils/Split3.min.js";
import CustomSection from "../../CustomSection";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef(null);

  useLayoutEffect(() => {
    const texts = gsap.utils.toArray(".aboutWord");
    let splitWords = [];

    texts.forEach((element) => {
      const split = new SplitText(element, {
        type: "words",
        wordsClass: "wordsBlack swearFont",
      });

      splitWords.push(split.words);
    });

    const animation = gsap.fromTo(
      splitWords,
      { yPercent: 0 },
      {
        yPercent: 100,
        duration: 1,
        stagger: 0.1,
        ease: Expo.easeInOut,
      }
    );

    // gsap.to(texts, {
    //   overflow: "hidden",
    // });
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container.current,
        start: "top 45%",
        end: "bottom 45%",
        markers: true,
        animation: animation,
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container}>
      <CustomSection
        hasPadding
        className="flex justify-center items-center lg:h-view py-[150px] lg:py-desktop select-none"
      >
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end w-full gap-50 lg:gap-0 relative">
          <AboutLetter subText="You" small />
          <AboutLetter subText="You" medium />
          <AboutLetter subText="Our mission" large />

          <div className="hidden lg:block lg:absolute right-0 top-[calc(100%+50px)] max-w-[466.41px] lg:max-w-[600.88px] z-[200]">
            <p className="text-black text-justify">
              We are a digital agency in Waterloo, ON, Canada! We are not
              confined by borders; we thrive on collaborating with clients from
              all corners of the world. Our mission is to deliver exceptional
              digital solutions that leave a lasting impact on your brand.
            </p>
          </div>
        </div>
      </CustomSection>
    </div>
  );
};

export default About;
