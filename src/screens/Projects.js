import React, { useEffect, useLayoutEffect, useRef } from "react";
import Transition from "../components/Transition";
import CustomSection from "../components/customElements/CustomSection";
import SectionTitle from "../components/customElements/SectionTitle";
import { Helmet } from "react-helmet";
import { colors, projects } from "../utils/constants";
import ProjectItem from "../components/projects/ProjectItem";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitText from "../utils/Split3.min";
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const container = useRef(null);

  useLayoutEffect(() => {
    let itemsTitle = [];

    // Split title
    gsap.utils.toArray(".projectsPageTitle").forEach((el) => {
      const splitTitleParent = new SplitText(el, {
        type: "words",
        wordsClass: "wordsParent",
      });

      const splitTitle = new SplitText(el, {
        type: "words",
        wordsClass: "wordsBlack",
      });

      itemsTitle.push(splitTitle.words);
    });

    //Split text
    const splitTextParent = new SplitText(".projectPageText", {
      type: "words",
      wordsClass: "wordsParent",
    });

    const splitText = new SplitText(".projectPageText", {
      type: "words",
      wordsClass: "wordsBlack",
    });
    const ctx = gsap.context(() => {
      gsap.set(".animateFirstProject", {
        opacity: 0,
        yPercent: 100,
      });

      let tl = gsap.timeline({});
      tl.fromTo(
        itemsTitle,
        {
          y: 48,
        },
        {
          y: 0,
          duration: 1.5,
          stagger: 0.1,
          ease: Expo.easeOut,
        }
      );
      tl.fromTo(
        splitText.words,
        {
          y: 48,
        },
        {
          y: 0,
          duration: 1.5,
          stagger: 0.01,
          ease: Expo.easeOut,
        },
        "-=1.7"
      );
      tl.to(
        ".animateFirstProject",
        {
          opacity: 1,
          yPercent: 0,
          duration: 1.5,
          ease: Expo.easeOut,
        },
        "-=1.5"
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={container}>
      <Helmet>
        <title>Projects - Samacle</title>
        <meta name="description" content="Web agency in Waterloo, ON, CA." />
      </Helmet>
      <CustomSection
        hasPadding
        className="py-desktop md:py-desktop flex flex-col gap-100"
      >
        <div className="w-full flex justify-between items-center">
          <div>
            <SectionTitle className="text-black italic leading-[100%] projectsPageTitle">
              Dream,
            </SectionTitle>
            <SectionTitle className="text-black italic leading-[100%] projectsPageTitle">
              Design,
            </SectionTitle>
            <SectionTitle className="text-black italic leading-[100%] projectsPageTitle">
              Deliver.
            </SectionTitle>
          </div>
          <p className="w-[70%] md:w-[50%] lg:w-[30%] text-justify text-black projectPageText leading-[90%]">
            We take pride in every collaboration, using statistics and analytics
            as our guiding beacons to navigate the ever-evolving digital
            landscape.
          </p>
        </div>
        {projects.map((project, index) => (
          <ProjectItem project={project} index={index} key={index} />
        ))}
      </CustomSection>
    </main>
  );
};

export default Transition(Projects);
