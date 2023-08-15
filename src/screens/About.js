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
import { colors } from "../utils/constants";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container.current,
        start: "top 70%",
        end: "bottom 70%",
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
            ease: Expo.easeInOut,
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
        <div className="w-[80%] md:w-[60%] h-[80vh] rounded-10">
          <CustomImage image="/images/team_working.png" />
        </div>
        <p className="w-[70%] md:w-1/2 text-justify textAbout text-black">
          We are an agency in Waterloo, ON dedicated to developing and designing
          websites for emerging and mid-market businesses. Our mission is to
          deliver dynamic websites with attractive and intuitive mechanics that
          generate an impact on the future of the business of each of our
          clients.
        </p>
      </div>
      <Process />
    </main>
  );
};

export default Transition(About);
