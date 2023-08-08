import React, { useLayoutEffect, useRef } from "react";
import CustomButton from "../../customElements/CustomButton";
import SectionTitle from "../../customElements/SectionTitle";
import ContextItem from "./ContextItem";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitText from "../../../utils/Split3.min";
gsap.registerPlugin(ScrollTrigger);

const Context = ({ project }) => {
  const container = useRef(null);
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
            yPercent: 100,
          },
          {
            opacity: 1,
            yPercent: 0,
            duration: 1,
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
      <SectionTitle className="text-black ctxTitle" noMaxHeight>
        Some
        <br />
        Context.
      </SectionTitle>
      <div className="w-full h-full flex flex-col">
        <ContextItem
          title="Meet the team"
          text={project.studyCase.meet}
          hasButton
        />
        <ContextItem title="Background" text={project.studyCase.background} />
      </div>
    </section>
  );
};

export default Context;
