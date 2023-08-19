import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { colors } from "./constants";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const body = document.querySelector("body");

  useEffect(() => {
    window.scrollTo(0, 0);
    // gsap.to(body, { duration: 0, backgroundColor: colors.white });
  }, [pathname, body]);

  return null;
}
