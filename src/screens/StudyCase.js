import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Transition from "../components/Transition";
import { colors, projects } from "../utils/constants";
import CustomImage from "../components/customElements/CustomImage";
import Context from "../components/studyCase/context/Context";
import Development from "../components/studyCase/development/Development";
import Designs from "../components/studyCase/design/Designs";
import ClientsOpinion from "../components/studyCase/ClientsOpinion";
import DesignSystem from "../components/studyCase/designSystem/DesignSystem";
import { Expo, gsap } from "gsap";
import Header from "../components/studyCase/Header";
import { ScrollTrigger } from "gsap/all";

const StudyCase = () => {
  const { link } = useParams();
  const [project, setProject] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const container = useRef(null);
  useLayoutEffect(() => {
    const project = projects.find((project) => project.info.link === link);
    setProject(project);
    setIsLoaded(true);
  }, [link]);

  useLayoutEffect(() => {
    const body = document.querySelector("body");
    const ctx = gsap.context(() => {
      gsap.to(body, {
        backgroundColor: colors.white,
      });
      if (isLoaded) {
        gsap.set(".projectMainImg", {
          scale: 0.95,
        });
        ScrollTrigger.create({
          trigger: ".imgTrigger",
          start: "top 50%",
          end: "top 0%",
          scrub: true,
          animation: gsap.to(".projectMainImg", {
            scale: 1,
          }),
        });
      }
    }, container);
  }, [isLoaded]);

  return (
    <main ref={container}>
      <Helmet>
        <title>Web Agency - Samacle</title>
        <meta name="description" content="Web agency in Waterloo, ON, CA." />
      </Helmet>
      {isLoaded && (
        <>
          <Header project={project} />
          <div className="w-full h-[80vh] imgTrigger">
            <div className="w-full h-full bg-lightGray relative projectMainImg">
              <CustomImage
                image={project.studyCase.image}
                onLoad
                noHover
                noRounded
              />
            </div>
          </div>
          <Context project={project} />
          <Development project={project} />
          <Designs project={project} />
          <DesignSystem project={project} />
          <ClientsOpinion project={project} />
        </>
      )}
    </main>
  );
};

export default Transition(StudyCase);
