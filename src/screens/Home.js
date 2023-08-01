import React, { useEffect, useLayoutEffect, useRef } from "react";
import Transition from "../components/Transition";
import { Helmet } from "react-helmet";
import Hero from "../components/home/Hero";
import About from "../components/home/about/About";
import WhyUs from "../components/home/whyUs/WhyUs";
import Services from "../components/home/services/Services";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitText from "../utils/Split3.min.js";
import Projects from "../components/home/projects/Projects";
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
            duration: 1,
            stagger: 0.02,
            ease: Expo.easeOut,
          }
        ),
      });
    }, textAbout);

    return () => ctx.revert();
  }, []);

  return (
    <main>
      <Helmet>
        <title>Web Agency - Samacle</title>
        <meta name="description" content="Web agency in Waterloo, ON, CA." />
      </Helmet>
      <Hero />
      <About />
      <div
        className="px-mobile md:px-tablet lg:px-desktop pb-tablet md:ob-0"
        ref={textAbout}
      >
        <h3 className="text-titleMobile md:text-titleTablet text-main whyUs max-h-[42px] md:max-h-[62px] sectionTitle">
          Why choose us?
        </h3>
      </div>
      <WhyUs />
      <Services />
      <Projects />
      {/* <div className="w-full h-[200vh]" /> */}
    </main>
  );
};

export default Transition(Home);
