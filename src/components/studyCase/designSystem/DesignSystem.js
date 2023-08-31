import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SectionTitle from "../../customElements/SectionTitle";
import Table from "./Table";
import TableRow from "./TableRow";
import ColorItem from "./ColorItem";
import { changeBgColorAnimation } from "../../../utils/gsapAnimations";
import { colors } from "../../../utils/constants";
import { useTranslation } from "react-i18next";
gsap.registerPlugin(ScrollTrigger);

const DesignSystem = ({ project, item }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const container = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (project !== undefined && project !== null && project !== []) {
      setIsLoaded(true);
    }
  }, [project]);

  useLayoutEffect(() => {
    if (isLoaded) {
      const ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: container.current,
          start: "top 70%",
          end: "bottom 70%",
          animation: gsap.fromTo(
            ".styleGuideTitle",
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
        ScrollTrigger.create({
          trigger: container.current,
          start: "top 55%",
          end: "bottom 55%",
          animation: gsap.fromTo(
            ".tablesContainer",
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
        changeBgColorAnimation({
          trigger: container.current,
          colors: {
            enter: colors.black,
            exit: colors.black,
            menuEnter: colors.white,
            menuExit: colors.white,
          },
          position: {
            start: "top 100%",
            end: "bottom 110%",
          },
        });
      }, container);

      return () => ctx.revert();
    }
  }, [isLoaded]);

  return (
    <section
      className="w-full min-h-[100vh] md:min-h-view flex flex-col gap-50 py-desktop px-mobile md:px-tablet lg:px-desktop bg-black"
      ref={container}
    >
      {isLoaded && (
        <>
          <SectionTitle
            noMaxHeight
            className="text-white styleGuideTitle"
            text={t(`studyCases.text.designSystem.title`)}
          ></SectionTitle>
          <div className="w-full flex flex-col md:flex-row gap-50 items-stretch tablesContainer">
            {/* Typography */}
            <Table
              title={t(`studyCases.text.designSystem.table.typography.title`)}
              subtitle="Font family: Poppins"
              className="overflow-y-scroll"
            >
              <div className="flex flex-col gap-10">
                {/* Table header */}
                <div className="grid grid-cols-4 border-b-[1px] border-gray pb-5 ">
                  <div className="col-span-2 pl-10">
                    <span className="text-xsm text-gray uppercase">
                      {t(
                        `studyCases.text.designSystem.table.typography.heading`
                      )}
                    </span>
                  </div>
                  <div className="col-span-1">
                    <span className="text-xsm text-gray uppercase">
                      {t(
                        `studyCases.text.designSystem.table.typography.desktop`
                      )}
                    </span>
                  </div>
                  <div className="col-span-1">
                    <span className="text-xsm text-gray uppercase">
                      {t(
                        `studyCases.text.designSystem.table.typography.mobile`
                      )}
                    </span>
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
            <Table
              title={t(`studyCases.text.designSystem.table.colors`)}
              className="md:gap-50 overflow-y-scroll"
            >
              <div className="w-full h-[60vh] md:h-full grid grid-cols-3 gap-20">
                {project.studyCase.designSystem.colors.map((item, index) =>
                  index === project.studyCase.designSystem.colors.length - 1 &&
                  (index + 1) % 3 !== 0 ? (
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
