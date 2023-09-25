import React, { useEffect, useLayoutEffect } from "react";
import { Helmet } from "react-helmet";
import Transition from "../components/Transition";
import Hero from "../components/services/Hero";
import Statistics from "../components/services/stadistics/Statistics";
import Options from "../components/services/options/Options";
import gsap from "gsap";
import { colors } from "../utils/constants";

const Services = () => {
  useLayoutEffect(() => {
    const body = document.querySelector("body");
    gsap.to(body, {
      backgroundColor: colors.white,
    });
    //scroll to top right before it mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Helmet>
        <title>Services - Samacle</title>
        <meta
          name="description"
          content="Web agency in Waterloo, ON, CA. This is what we do good."
        />
      </Helmet>
      <Hero />
      <Statistics />
      <Options />
    </main>
  );
};

export default Transition(Services);
