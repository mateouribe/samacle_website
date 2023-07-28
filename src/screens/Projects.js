import React, { useEffect } from "react";
import Transition from "../components/Transition";
import { useStatesContext } from "../context/StatesProvider";

const Projects = () => {
  const { isFirstLoading, setIsFirstLoading } = useStatesContext();

  useEffect(() => {
    if (isFirstLoading) {
      setIsFirstLoading(false);
    }
  }, [isFirstLoading]);
  return <div>Projects</div>;
};

export default Transition(Projects);
