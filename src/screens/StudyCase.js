import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
// import { Helmet } from "react-helmet";
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
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const StudyCase = () => {
  const { link } = useParams();
  const [project, setProject] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const container = useRef(null);
  const { t } = useTranslation();
  const item = useRef(null);

  useLayoutEffect(() => {
    const project = projects.find((project) => project.info.link === link);
    setProject(project);
    item.current = `studyCases.projects.project${project.id}`;
    setIsLoaded(true);
  }, [link]);

  useLayoutEffect(() => {
    const body = document.querySelector("body");
    const ctx = gsap.context(() => {
      gsap.to(body, {
        backgroundColor: colors.white,
      });
      //scroll to top right before it mounts
      window.scrollTo(0, 0);

      if (isLoaded) {
        gsap.set(".projectMainImg", {
          scale: 0.9,
        });
        ScrollTrigger.create({
          trigger: ".imgTrigger",
          start: "top 50%",
          end: "bottom 0%",
          scrub: 1.5,
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
        <title>Samacle - {t(`${item.current}.info.title`)}</title>
        <meta
          name="description"
          content={`Samacle - ${t(`${item.current}.info.title`)}: ${t(
            "seo.studyCases.metaDescription"
          )}`}
        />
        {/* <link rel="canonical" href="/our-projects/study-case/" /> */}
      </Helmet>
      {isLoaded && (
        <>
          <Header project={item.current} />
          <div className="w-full h-[80vh] imgTrigger">
            <div className="relative w-full h-full projectMainImg">
              <CustomImage
                image={project.studyCase.image}
                onLoad
                noHover
                noRounded
              />
            </div>
          </div>
          <Context project={item.current} />
          <Development project={project} item={item.current} />
          <Designs project={project} />
          <DesignSystem project={project} />
          <ClientsOpinion project={project} />
        </>
      )}
    </main>
  );
};

export default Transition(StudyCase);
