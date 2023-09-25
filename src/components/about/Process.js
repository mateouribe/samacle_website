import React, { useLayoutEffect, useRef } from "react";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import CustomSection from "../customElements/CustomSection";
import SectionTitle from "../customElements/SectionTitle";
import { changeBgColorAnimation } from "../../utils/gsapAnimations";
import { colors, processes } from "../../utils/constants";
import SplitText from "../../utils/Split3.min";
import ProcessItem from "./ProcessItem";
import { useTranslation } from "react-i18next";
gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const { t } = useTranslation();
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
            duration: 1.5,
            stagger: 0.02,
            ease: Expo.easeOut,
          }
        ),
      });
      ScrollTrigger.create({
        trigger: container.current,
        start: "top 50%",
        end: "bottom 50%",
        animation: gsap.fromTo(
          ".processesContainer",
          {
            yPercent: 100,
          },
          {
            yPercent: 0,
            duration: 1.5,
            ease: Expo.easeOut,
            onComplete: () => {
              gsap.to(".processesContainer", {
                clearProps: "all",
              });
            },
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
        <SectionTitle
          className="text-main processTitle"
          text={t("about.title")}
        ></SectionTitle>
        <div className="w-full h-full flex justify-end">
          <div className="w-full md:w-[80%] lg:w-[70%] h-full flex flex-col gap-50 justify-center">
            {processes.map((el, index) => (
              <ProcessItem key={index} index={index} />
            ))}
          </div>
        </div>
      </CustomSection>
    </div>
  );
};

export default Process;
