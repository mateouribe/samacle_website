import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import ScrollSection from "./ScrollSection";
import { changeBgColorAnimation } from "../../../utils/gsapAnimations";
import { colors } from "../../../utils/constants";
gsap.registerPlugin(ScrollTrigger);

const Designs = ({ project }) => {
  const container = useRef(null);
  const triggerRef = useRef(null);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (project !== undefined && project !== null && project !== []) {
      setIsLoaded(true);
    }
  }, [project]);

  useLayoutEffect(() => {
    if (isLoaded) {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 1180px)", () => {
        const pin = gsap.fromTo(
          container.current,
          {
            translateX: 0,
          },
          {
            translateX: -window.innerWidth * 1,
            ease: "none",
            duration: 1,
            scrollTrigger: {
              trigger: triggerRef.current,
              scrub: 0,
              pin: true,
              start: "top top",
              end: "+=100%",
            },
          }
        );
        return () => pin.kill();
      });

      const ctx = gsap.context(() => {
        changeBgColorAnimation({
          trigger: container.current,
          colors: {
            enter: colors.black,
            exit: colors.white,
            menuEnter: colors.white,
            menuExit: colors.black,
          },
          position: {
            start: "top 10%",
            end: "bottom 10%",
          },
        });
      }, container);

      return () => ctx.revert();
    }
  }, [isLoaded]);

  return (
    <section className="overflow-hidden">
      {isLoaded && (
        <div ref={triggerRef}>
          {/* Desktop */}
          <div
            className="w-[200vw] h-view lg:flex flex-row relative hidden bg-black"
            ref={container}
          >
            {project.studyCase.figmaDesigns.map((design, index) => (
              <ScrollSection
                className="bg-black"
                image={design}
                index={index}
                key={index}
              />
            ))}
          </div>

          {/* Tablet */}
          <div className="w-full h-full flex flex-col gap-100 py-tablet lg:hidden bg-black">
            {project.studyCase.figmaDesigns.map((design, index) => (
              <div
                className="w-full h-[80vh]"
                style={{
                  backgroundImage: `url(${design})`,
                  backgroundSize: "cover",
                  backgroundPosition: "top center",
                  backgroundRepeat: "no-repeat",
                }}
                key={index}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Designs;
