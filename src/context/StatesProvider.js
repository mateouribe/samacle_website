import React, { createContext, useContext, useState, useEffect } from "react";

const StatesContext = createContext();

const StatesProvider = ({ children }) => {
  const [isFirstLoading, setIsFirstLoading] = useState(true);
  const desktopSize = 1024; // The minimum screen width to be considered as a desktop
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= desktopSize);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsDesktop(window.innerWidth >= desktopSize);
    };

    // Add event listener for resizing
    window.addEventListener("resize", checkScreenWidth);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  useEffect(() => {
    console.log("isFirstTime?", isFirstLoading);
  }, [isFirstLoading]);

  return (
    <StatesContext.Provider
      value={{
        isDesktop,
        setIsDesktop,
        isFirstLoading,
        setIsFirstLoading,
      }}
    >
      {children}
    </StatesContext.Provider>
  );
};

export const useStatesContext = () => useContext(StatesContext);

export default StatesProvider;
