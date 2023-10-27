import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Transition from "../components/Transition";
import Hero from "../components/about/Hero";
import CustomImage from "../components/customElements/CustomImage";
import Process from "../components/about/Process";
import { useTranslation } from "react-i18next";
import { colors } from "../utils/constants";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet-async";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef(null);
  const { t } = useTranslation();

  //GOOGLE ANALYTICS
  //No interaction event
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  useLayoutEffect(() => {
    const body = document.querySelector("body");
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
      gsap.to(body, {
        backgroundColor: colors.white,
      });
    }, container);

    //scroll to top right before it mounts
    window.scrollTo(0, 0);

    return () => ctx.revert();
  }, []);

  return (
    <main>
      <Helmet>
        <title>{t("seo.about.title")}</title>
        <meta name="description" content={t("seo.about.metaDescription")} />
        <link rel="canonical" href="/about-us" />
      </Helmet>
      <Hero />
      <div
        className="flex flex-col items-end w-full py-tablet px-mobile md:px-tablet lg:px-desktop gap-50"
        ref={container}
      >
        <div className="w-[80%] md:w-[60%] h-[80vh] textTrigger">
          <CustomImage image="/images/team_working.png" onLoad noHover />
        </div>
        <p className="w-[70%] md:w-1/2 textAbout text-black">
          {t("home.ourMission")}
        </p>
      </div>
      <Process />
    </main>
  );
};

export default Transition(About);
