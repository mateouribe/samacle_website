import React, { useEffect } from "react";
import Transition from "../components/Transition";
import { useStatesContext } from "../context/StatesProvider";

const Home = () => {
  const { isFirstLoading, setIsFirstLoading } = useStatesContext();

  useEffect(() => {
    if (isFirstLoading) {
      setIsFirstLoading(false);
    }
  }, [isFirstLoading]);
  return (
    <div>
      <h1>Hola</h1>
      <h2 className="font-swearDisplay">Deberia cambiaf</h2>
    </div>
  );
};

export default Transition(Home);
