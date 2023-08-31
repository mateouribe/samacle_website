import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Transition from "../components/Transition";
import Hero from "../components/services/Hero";
import Statistics from "../components/services/stadistics/Statistics";
import Options from "../components/services/options/Options";

const Services = () => {
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
