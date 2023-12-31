import React, { useLayoutEffect, useRef } from "react";
import CustomSection from "../../customElements/CustomSection";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { colors, projects } from "../../../utils/constants";
import { changeBgColorAnimation } from "../../../utils/gsapAnimations";
import SplitText from "../../../utils/Split3.min.js";
import ProjectItem from "./ProjectItem";
import SectionTitle from "../../customElements/SectionTitle";
import { useTranslation } from "react-i18next";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const container = useRef(null);
  const { t } = useTranslation();

  useLayoutEffect(() => {
    const splitTitleParent = new SplitText(".projectTitle", {
      type: "words, chars",
      chars: "chars",
      charsClass: "wordsParent",
    });

    const splitTitle = new SplitText(".projectTitle", {
      type: "words, chars",
      charsClass: "orangeWords",
    });

    const ctx = gsap.context(() => {
      let tl = gsap.timeline();
      changeBgColorAnimation({
        trigger: container.current,
        colors: {
          enter: colors.white,
          exit: colors.white,
          menuEnter: colors.black,
          menuExit: colors.black,
        },
        position: {
          start: "top 30%",
          end: "bottom 30%",
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
    }, container);

    return () => ctx.revert();
  }, []);
  return (
    <div ref={container}>
      <CustomSection hasPadding className="flex flex-col gap-50 min-h-[100vh]">
        <SectionTitle
          className="projectTitle text-main"
          text={t("home.projects.title")}
        ></SectionTitle>
        <div className="grid w-full h-full grid-cols-1 gap-50 md:grid-cols-12 ">
          {projects.map((project, index) =>
            index === 0 ? (
              <ProjectItem
                key={index}
                project={project}
                index={index}
                alignLeft
                isFirstOne
              />
            ) : index % 2 === 0 ? (
              <ProjectItem
                key={index}
                project={project}
                index={index}
                alignLeft
              />
            ) : (
              <ProjectItem key={index} project={project} index={index} />
            )
          )}
        </div>
      </CustomSection>
    </div>
  );
};

export default Projects;
