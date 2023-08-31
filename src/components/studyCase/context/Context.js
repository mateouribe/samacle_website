import React, { useLayoutEffect, useRef } from "react";
import SectionTitle from "../../customElements/SectionTitle";
import ContextItem from "./ContextItem";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitText from "../../../utils/Split3.min";
import { useTranslation } from "react-i18next";
gsap.registerPlugin(ScrollTrigger);

const Context = ({ project }) => {
  const container = useRef(null);
  const { t } = useTranslation();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container.current,
        start: "top 70%",
        end: "bottom 70%",
        animation: gsap.fromTo(
          ".ctxTitle",
          {
            opacity: 0,
            yPercent: 50,
          },
          {
            opacity: 1,
            yPercent: 0,
            duration: 1.5,
            ease: Expo.easeOut,
          }
        ),
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="py-desktop px-mobile md:px-tablet lg:px-desktop"
      ref={container}
    >
      <SectionTitle
        className="text-black ctxTitle"
        noMaxHeight
        text={t("studyCases.text.context.title")}
      ></SectionTitle>
      <div className="w-full h-full flex flex-col">
        <ContextItem
          title={t("studyCases.text.context.team")}
          text={t(`${project}.studyCase.meet`)}
          hasButton
        />
        <ContextItem
          title={t("studyCases.text.context.background")}
          text={t(`${project}.studyCase.background`)}
        />
      </div>
    </section>
  );
};

export default Context;
