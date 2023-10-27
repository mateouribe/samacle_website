import React, { useEffect, useLayoutEffect } from "react";
// import { Helmet } from "react-helmet";
import Transition from "../components/Transition";
import Hero from "../components/services/Hero";
import Statistics from "../components/services/stadistics/Statistics";
import Options from "../components/services/options/Options";
import gsap from "gsap";
import { colors } from "../utils/constants";
import { Helmet } from "react-helmet-async";

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
      {/* <Helmet>
        <title>Services - Samacle</title>
        <meta
          name="description"
          content="Web agency in Waterloo, ON, CA. This is what we do good."
        />
      </Helmet> */}
      <Helmet>
        <title>Samacle - Our Services</title>
        <meta
          name="description"
          content="Samacle - Our Services: Explore our full suite of web services in Canada, including web design, development, SEO, e-commerce solutions, and more. Our dedicated team is committed to helping your business thrive online. Discover how we can tailor our expertise to meet your unique needs. Partner with us for your digital journey today."
        />
        <link rel="canonical" href="/our-services" />
      </Helmet>
      <Hero />
      <Statistics />
      <Options />
    </main>
  );
};

export default Transition(Services);
