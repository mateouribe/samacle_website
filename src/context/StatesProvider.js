import React, { createContext, useContext, useState, useEffect } from "react";

const StatesContext = createContext();

const StatesProvider = ({ children }) => {
  const [animateNavbar, setAnimateNavbar] = useState(false);
  const desktopSize = 1024; // The minimum screen width to be considered as a desktop
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= desktopSize);
  const [language, setLanguage] = useState("en");

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

  return (
    <StatesContext.Provider
      value={{
        isDesktop,
        setIsDesktop,
        animateNavbar,
        setAnimateNavbar,
        language,
        setLanguage,
      }}
    >
      {children}
    </StatesContext.Provider>
  );
};

export const useStatesContext = () => useContext(StatesContext);

export default StatesProvider;
