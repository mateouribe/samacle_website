// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { gsap } from "gsap";
// import { colors } from "./constants";

// export default function ScrollToTop() {
//   const { pathname } = useLocation();
//   const body = document.querySelector("body");

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     gsap.to(body, { duration: 0, backgroundColor: colors.white });
//   }, [pathname]);

//   return null;
// }

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { createBrowserHistory } from "history"; // Import createBrowserHistory
import { gsap } from "gsap";
import { colors } from "./constants";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const history = createBrowserHistory(); // Create a history object

  useEffect(() => {
    // Listen for route changes
    const unlisten = history.listen(() => {
      // Smooth scroll to top after a short delay (adjust the duration as needed)
      setTimeout(() => {
        window.scrollTo({ top: 0 });
      }, 0);
    });

    // Clean up the listener when the component unmounts
    return () => {
      unlisten();
    };
  }, [history, pathname]);

  // Optionally, you can apply other effects when the route changes.
  // For example, changing the background color.
  useEffect(() => {
    // gsap.to(body, { duration: 0, backgroundColor: colors.white });
  }, [pathname]);

  return null;
}
