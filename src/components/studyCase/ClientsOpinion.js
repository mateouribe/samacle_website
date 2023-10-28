import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import CustomButton from "../customElements/CustomButton";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { colors } from "../../utils/constants";
import { changeBgColorAnimation } from "../../utils/gsapAnimations";
import { useTranslation } from "react-i18next";
gsap.registerPlugin(ScrollTrigger);

const ClientsOpinion = ({ project }) => {
  const container = useRef(null);
  const { t } = useTranslation();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // changeBgColorAnimation({
      //   trigger: container.current,
      //   colors: {
      //     enter: colors.main,
      //     exit: colors.main,
      //     menuEnter: colors.black,
      //     menuExit: colors.black,
      //   },
      //   position: {
      //     start: "top 80%",
      //     end: "bottom 80%",
      //   },
      //   // markers: true,
      // });
      ScrollTrigger.create({
        trigger: container.current,
        start: "top 70%",
        end: "bottom 70%",
        animation: gsap.fromTo(
          ".clientOpinion",
          {
            opacity: 0,
            yPercent: 50,
          },
          {
            opacity: 1,
            yPercent: 0,
            duration: 1.5,
            ease: Expo.easeOut,
          }
        ),
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="py-desktop px-mobile md:px-tablet lg:px-desktop flex flex-col gap-100 min-h-[90vh] justify-center items-center relative"
      ref={container}
    >
      <div className="flex flex-col gap-5 clientOpinion z-[9999]">
        <p className="text-[22px] md:text-[32px] uppercase text-beige">
          <span className="text-[50px] leading-[0px]">"</span>To create a
          groundbreaking operating experience, the NODO Film Systems allowed
          camera operators to adjust the weight of the wheels, control mass and
          drag, and create different camera simulations.
          <span className="text-[50px] leading-[0px]">"</span>
        </p>
        <span className="text-sm text-beige">Andrés. Pago Tienda, CEO.</span>
      </div>
      <CustomButton
        className="self-start clientOpinion"
        navigateTo="/contact-us"
      >
        {t("button.becomeClient")}
      </CustomButton>

      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none top-1/2 left-1/2">
        <img
          src="/images/fingerPrint.png"
          alt="A grey fingerprint behind a portion of text in the Samacle - Our Projects web page section."
          className="w-full h-full"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default ClientsOpinion;
