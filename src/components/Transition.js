import React, { useState } from "react";
import { motion } from "framer-motion";
// import { useStatesContext } from "../context/StatesProvider";

const Transition = (OgComponent) => {
  function checkScreenWidth() {
    const desktopSize = 1024; // The minimum screen width to be considered as a desktop
    window.isDesktop = window.innerWidth >= desktopSize;
    window.scrollTo({ top: 0 });
    // Use the isDesktop variable as needed in your application
    // For example, you can conditionally render content or apply specific styles based on the screen size.
  }

  // Call the function initially and add an event listener for resizing
  checkScreenWidth();
  window.addEventListener("resize", checkScreenWidth);

  return () => (
    <>
      <OgComponent />
      {window.isDesktop ? (
        <>
          <motion.div
            className="slide-in z-[9999]"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.div
            className="slide-out z-[9999]"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
        </>
      ) : null}
    </>
  );
};

export default Transition;
