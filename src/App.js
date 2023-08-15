import { useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Home, Services, Projects, About, Contact, StudyCase } from "./screens";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import { AnimatePresence } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Footer from "./components/Footer";
import AnimatedCursor from "react-animated-cursor";
import { gsap } from "gsap";
// import Footer from "./components/Footer";

const App = () => {
  const location = useLocation();
  useEffect(() => {
    const lenis = new Lenis({
      duration: 4,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const cursor = useRef(null);
  const cursorFollower = useRef(null);

  useEffect(() => {
    let posX = 0;
    let posY = 0;
    let mouseX = 0;
    let mouseY = 0;

    gsap.to(
      {},
      {
        repeat: -1,
        onRepeat: () => {
          posX = (mouseX - posX) / 9;
          posY = (mouseY - posY) / 9;

          gsap.set(cursorFollower.current, {
            left: posX - 20,
            top: posY - 20,
          });

          gsap.set(cursor.current, {
            left: mouseX,
            top: mouseY,
          });
        },
      }
    );

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
  }, []);

  return (
    <>
      {/* <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="128, 128, 128"
        outerAlpha={0.2}
        innerScale={1}
        outerScale={10}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".hoverMouse",
        ]}
      /> */}
      <Navbar />

      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/study_case/:link" element={<StudyCase />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      {/* <Cursor /> */}
      <Footer />
    </>
  );
};

export default App;
