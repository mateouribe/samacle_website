import React, { useEffect } from "react";
import Transition from "../components/Transition";
import { useStatesContext } from "../context/StatesProvider";

const Services = () => {
  const { isFirstLoading, setIsFirstLoading } = useStatesContext();

  useEffect(() => {
    if (isFirstLoading) {
      setIsFirstLoading(false);
    }
  }, [isFirstLoading]);
  return <div>Services</div>;
};

export default Transition(Services);
