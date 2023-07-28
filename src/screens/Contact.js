import React, { useEffect } from "react";
import Transition from "../components/Transition";
import { useStatesContext } from "../context/StatesProvider";

const Contact = () => {
  const { isFirstLoading, setIsFirstLoading } = useStatesContext();

  useEffect(() => {
    if (isFirstLoading) {
      setIsFirstLoading(false);
    }
  }, [isFirstLoading]);
  return <div>Contact</div>;
};

export default Transition(Contact);
