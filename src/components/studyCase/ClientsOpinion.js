import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import CustomButton from "../customElements/CustomButton";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { colors } from "../../utils/constants";
import { changeBgColorAnimation } from "../../utils/gsapAnimations";
gsap.registerPlugin(ScrollTrigger);

const ClientsOpinion = ({ project }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const container = useRef(null);

  useEffect(() => {
    if (project !== undefined && project !== null && project !== []) {
      setIsLoaded(true);
    }
  }, [project]);

  useLayoutEffect(() => {
    if (isLoaded) {
      const ctx = gsap.context(() => {
        changeBgColorAnimation({
          trigger: container.current,
          colors: {
            enter: colors.main,
            exit: colors.main,
            menuEnter: colors.black,
            menuExit: colors.black,
          },
          position: {
            start: "top 80%",
            end: "bottom 80%",
          },
        });
        ScrollTrigger.create({
          trigger: container.current,
          start: "top 70%",
          end: "bottom 70%",
          animation: gsap.fromTo(
            ".clientOpinion",
            {
              opacity: 0,
              yPercent: 100,
            },
            {
              opacity: 1,
              yPercent: 0,
              duration: 1,
              ease: Expo.easeOut,
            }
          ),
        });
      }, container);

      return () => ctx.revert();
    }
  }, [isLoaded]);

  return (
    <section
      className="py-desktop px-mobile md:px-tablet lg:px-desktop flex flex-col gap-100 min-h-[90vh] justify-center items-center"
      ref={container}
    >
      {isLoaded && (
        <>
          <div className="flex flex-col gap-5 clientOpinion">
            <p className="text-[22px] md:text-[32px] uppercase text-black">
              To create a groundbreaking operating experience, the NODO Film
              Systems allowed camera operators to adjust the weight of the
              wheels, control mass and drag, and create different camera
              simulations.
            </p>
            <span className="text-black text-sm">
              Andrés. Pago Tienda, CEO.
            </span>
          </div>
          <CustomButton blackColor className="self-start clientOpinion">
            Become a client
          </CustomButton>
        </>
      )}
    </section>
  );
};

export default ClientsOpinion;
