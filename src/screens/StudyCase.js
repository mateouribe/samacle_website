import React, { useEffect, useLayoutEffect, useState } from "react";
import Transition from "../components/Transition";
import { useParams } from "react-router-dom";
import { projects } from "../utils/constants";
import CustomImage from "../components/customElements/CustomImage";
import Context from "../components/studyCase/context/Context";
import Development from "../components/studyCase/development/Development";
import Designs from "../components/studyCase/design/Designs";
import ClientsOpinion from "../components/studyCase/ClientsOpinion";
import DesignSystem from "../components/studyCase/designSystem/DesignSystem";

const StudyCase = () => {
  const { link } = useParams();
  const [project, setProject] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useLayoutEffect(() => {
    const project = projects.find((project) => project.link === link);
    setProject(project);
    setIsLoaded(true);
  }, [link]);

  return (
    <main>
      {isLoaded && (
        <>
          <div className="w-full h-[80vh] bg-lightGray relative lg:mt-50">
            <CustomImage image={project.studyCase.image} onLoad />
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
