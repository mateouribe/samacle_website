import React, { useEffect } from "react";
import Transition from "../components/Transition";
import { Helmet } from "react-helmet";
import Hero from "../components/home/Hero";
import About from "../components/home/about/About";
import WhyUs from "../components/home/whyUs/WhyUs";
import Services from "../components/home/Services";

const Home = () => {
  return (
    <main>
      <Helmet>
        <title>Web Agency - Samacle</title>
        <meta name="description" content="Web agency in Waterloo, ON, CA." />
      </Helmet>
      <Hero />
      <About />
      <div className="px-mobile md:px-tablet lg:px-desktop pt-desktop pb-tablet md:ob-0">
        <h3 className="text-titleMobile md:text-titleTablet text-main">
          Why choose us?
        </h3>
      </div>
      <WhyUs />

      <div className="w-full h-[200vh]" />

      {/* <Services /> */}
    </main>
  );
};

export default Transition(Home);
