import React, { useLayoutEffect, useRef } from "react";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import CustomSection from "../CustomSection";
import SectionTitle from "../SectionTitle";
import { changeBgColorAnimation } from "../../utils/gsapAnimations";
import { colors, processes } from "../../utils/constants";
import SplitText from "../../utils/Split3.min";
import ProcessItem from "./ProcessItem";
gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const container = useRef(null);
  useLayoutEffect(() => {
    const splitTitleParent = new SplitText(".processTitle", {
      type: "words, chars",
      chars: "chars",
      charsClass: "wordsParent",
    });

    const splitTitle = new SplitText(".processTitle", {
      type: "words, chars",
      charsClass: "orangeWords",
    });

    const ctx = gsap.context(() => {
      changeBgColorAnimation({
        trigger: container.current,
        colors: {
          enter: colors.black,
          exit: colors.white,
          menuEnter: colors.white,
          menuExit: colors.black,
        },
      });

      ScrollTrigger.create({
        trigger: container.current,
        start: "top 50%",
        end: "bottom 50%",
        animation: gsap.fromTo(
          splitTitle.chars,
          {
            y: 45,
          },
          {
            y: 0,
            duration: 1,
            stagger: 0.02,
            ease: Expo.easeOut,
          }
        ),
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container}>
      <CustomSection
        hasPadding
        className="w-full min-h-[100vh] md:h-view flex flex-col gap-50"
      >
        <SectionTitle className="text-white processTitle">
          Our process
        </SectionTitle>
        <div className="w-full h-full flex justify-end">
          <div className="w-full md:w-[80%] lg:w-[70%] h-full flex flex-col gap-50 justify-center">
            {processes.map((process, index) => (
              <ProcessItem process={process} key={index} />
            ))}
          </div>
        </div>
      </CustomSection>
    </div>
  );
};

export default Process;