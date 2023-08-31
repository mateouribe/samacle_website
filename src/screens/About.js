import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Transition from "../components/Transition";
import CustomSection from "../components/customElements/CustomSection";
import SplitText from "../utils/Split3.min";
import Hero from "../components/about/Hero";
import CustomImage from "../components/customElements/CustomImage";
import Process from "../components/about/Process";
import { useTranslation } from "react-i18next";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef(null);
  const { t } = useTranslation();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".textTrigger",
        start: "bottom 100%",
        end: "bottom 100%",
        animation: gsap.fromTo(
          ".textAbout",
          {
            yPercent: 100,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1,
            ease: Expo.easeOut,
          }
        ),
      });
      // gsap.to(body, {
      //   backgroundColor: colors.white,
      // });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <main>
      <Helmet>
        <title>About - Samacle</title>
        <meta name="description" content="Web agency in Waterloo, ON, CA." />
      </Helmet>
      <Hero />
      <div
        className="w-full py-tablet px-mobile md:px-tablet lg:px-desktop flex flex-col items-end gap-50"
        ref={container}
      >
        <div className="w-[80%] md:w-[60%] h-[80vh] rounded-10 textTrigger">
          <CustomImage image="/images/team_working.png" onLoad noHover />
        </div>
        <p className="w-[70%] md:w-1/2 text-justify textAbout text-black">
          {t("home.ourMission")}
        </p>
      </div>
      <Process />
    </main>
  );
};

export default Transition(About);
