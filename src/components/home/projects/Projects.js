import React, { useLayoutEffect, useRef } from "react";
import CustomSection from "../../CustomSection";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { colors, projects } from "../../../utils/constants";
import { changeBgColorAnimation } from "../../../utils/gsapAnimations";
import SplitText from "../../../utils/Split3.min.js";
import CustomImage from "../../CustomImage";
import ProjectItem from "./ProjectItem";
import SectionTitle from "../../SectionTitle";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const container = useRef(null);

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
        colors: { enter: colors.white, exit: colors.white },
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
      <CustomSection hasPadding className="flex flex-col gap-50 min-h-[100vh]">
        <SectionTitle className="projectTitle text-main">
          Our projects
        </SectionTitle>
        <div className="w-full h-full grid gap-50 grid-cols-1 md:grid-cols-12 ">
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
