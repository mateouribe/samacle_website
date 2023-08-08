import React, { useLayoutEffect, useRef } from "react";
import SectionTitle from "../../customElements/SectionTitle";
import TableRow from "./TableRow";
import Table from "./Table";
import { useState } from "react";
import { useEffect } from "react";
import ColorItem from "./ColorItem";
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { changeBgColorAnimation } from "../../../utils/gsapAnimations";
import { colors } from "../../../utils/constants";
gsap.registerPlugin(ScrollTrigger);

const DesignSystem = ({ project }) => {
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
        // ScrollTrigger.create({
        //   trigger: container.current,
        //   start: "top 50%",
        //   end: "bottom 50%",
        //   animation: gsap.to(container.current, {
        //     backgroundColor: colors.black,
        //   }),
        // });
      }, container);

      return () => ctx.revert();
    }
  }, [isLoaded]);

  return (
    <section
      className="w-full min-h-[100vh] md:h-view flex flex-col gap-50 py-tablet px-mobile md:px-tablet lg:px-desktop bg-black"
      ref={container}
    >
      {isLoaded && (
        <>
          <SectionTitle noMaxHeight className="text-white">
            Style
            <br />
            guide.
          </SectionTitle>
          <div className="w-full h-full flex flex-col md:flex-row gap-50">
            {/* Typography */}
            <Table title="Typography" subtitle="Font family: Poppins">
              <div className="flex flex-col gap-10">
                {/* Table header */}
                <div className="grid grid-cols-4 border-b-[1px] border-gray pb-5">
                  <div className="col-span-2 pl-10">
                    <span className="text-xsm text-gray uppercase">
                      HEADINGS
                    </span>
                  </div>
                  <div className="col-span-1">
                    <span className="text-xsm text-gray uppercase">
                      DESKTOP
                    </span>
                  </div>
                  <div className="col-span-1">
                    <span className="text-xsm text-gray uppercase">MOBILE</span>
                  </div>
                </div>

                {/* Table rows */}
                {project.studyCase.designSystem.typography.map(
                  (item, index) => (
                    <TableRow
                      heading={item.heading}
                      desktop={item.desktop}
                      mobile={item.mobile}
                      index={index}
                      key={index}
                    />
                  )
                )}
              </div>
            </Table>

            {/* Colors */}
            <Table title="Colours palette" className="md:gap-50 md:h-full">
              <div className="w-full h-[60vh] md:h-full grid grid-cols-3 gap-20">
                {project.studyCase.designSystem.colors.map((item, index) =>
                  index === project.studyCase.designSystem.colors.length - 1 &&
                  index % 3 !== 0 ? (
                    <ColorItem index={index} key={index} item={item} spanTwo />
                  ) : (
                    <ColorItem index={index} key={index} item={item} />
                  )
                )}
              </div>
            </Table>
          </div>
        </>
      )}
    </section>
  );
};

export default DesignSystem;
