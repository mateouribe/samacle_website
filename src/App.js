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

import Footer from "./components/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import Lenis from "@studio-freight/lenis";

const App = () => {
  const location = useLocation();
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      {/* <ScrollToTop /> */}
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
      <Cursor />
      <Footer />
    </>
  );
};

export default App;
