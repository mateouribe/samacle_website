import React, { useEffect } from "react";
import Transition from "../components/Transition";
import { useStatesContext } from "../context/StatesProvider";

const About = () => {
  const { isFirstLoading, setIsFirstLoading } = useStatesContext();

  useEffect(() => {
    if (isFirstLoading) {
      setIsFirstLoading(false);
    }
  }, [isFirstLoading]);

  return <div>About</div>;
};

export default Transition(About);
