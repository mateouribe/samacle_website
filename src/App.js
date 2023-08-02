import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Home, Services, Projects, About, Contact, StudyCase } from "./screens";
import Navbar from "./components/Navbar";
import { AnimatePresence } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Footer from "./components/Footer";
// import Footer from "./components/Footer";

const App = () => {
  const location = useLocation();
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
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
      <Navbar />

      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/study_case/:name" element={<StudyCase />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      {/* <Footer /> */}
    </>
  );
};

export default App;
