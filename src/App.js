import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Home, Services, Projects, About, Contact, StudyCase } from "./screens";
import Navbar from "./components/Navbar";
import { AnimatePresence } from "framer-motion";
// import Footer from "./components/Footer";
import { useStatesContext } from "./context/StatesProvider";

const App = () => {
  const { isFirstLoading, setIsFirstLoading } = useStatesContext();

  const location = useLocation();
  return (
    <>
      <Navbar />
      {!isFirstLoading ? (
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
      ) : (
        <>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/study_case/:name" element={<StudyCase />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </>
      )}
      {/* <Footer /> */}
    </>
  );
};

export default App;
