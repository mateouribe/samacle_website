import React, { useEffect, useLayoutEffect, useRef } from "react";
import Transition from "../components/Transition";
// import { Helmet } from "react-helmet";
import Hero from "../components/home/Hero";
import About from "../components/home/about/About";
import WhyUs from "../components/home/whyUs/WhyUs";
import Services from "../components/home/services/Services";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitText from "../utils/Split3.min.js";
import Projects from "../components/home/projects/Projects";
import Contact from "../components/home/Contact";
import SectionTitle from "../components/customElements/SectionTitle";
import { colors } from "../utils/constants";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const textAbout = useRef(null);
  useLayoutEffect(() => {
    const splitTitleParent = new SplitText(".whyUs", {
      type: "words, chars",
      chars: "chars",
      charsClass: "wordsParent",
    });

    const splitTitle = new SplitText(".whyUs", {
      type: "words, chars",
      charsClass: "orangeWords",
    });

    const body = document.querySelector("body");
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: textAbout.current,
        start: "top 85%",
        end: "bottom 85%",
        animation: gsap.fromTo(
          splitTitle.chars,
          {
            y: 45,
          },
          {
            y: 0,
            duration: 1.5,
            stagger: 0.02,
            ease: Expo.easeOut,
          }
        ),
      });
      gsap.to(body, {
        backgroundColor: colors.white,
      });
      //scroll to top right before it mounts
      window.scrollTo(0, 0);
    }, textAbout);

    return () => ctx.revert();
  }, []);

  const { t } = useTranslation();

  return (
    <main>
      <Helmet>
        <title>Samacle - Web Agency in Canada</title>
        <meta
          name="description"
          content="Samacle - Web Agency in Canada: Elevating Businesses with Dynamic Web Solutions."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <Hero />
      <About />
      <div
        className="px-mobile md:px-tablet lg:px-desktop pb-tablet md:ob-0"
        ref={textAbout}
      >
        <SectionTitle className="whyUs text-main">
          {t("home.whyus.title")}
        </SectionTitle>
      </div>
      <WhyUs />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
};

export default Transition(Home);
