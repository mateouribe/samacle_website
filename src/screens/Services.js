import React, { useEffect, useLayoutEffect } from "react";
// import { Helmet } from "react-helmet";
import Transition from "../components/Transition";
import Hero from "../components/services/Hero";
import Statistics from "../components/services/stadistics/Statistics";
import Options from "../components/services/options/Options";
import gsap from "gsap";
import { colors } from "../utils/constants";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

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
        <title>{t("seo.services.title")}</title>
        <meta name="description" content={t("seo.services.metaDescription")} />
        <link rel="canonical" href="/our-services" />
      </Helmet>
      <Hero />
      <Statistics />
      <Options />
    </main>
  );
};

export default Transition(Services);
