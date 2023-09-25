import React, { useLayoutEffect, useRef } from "react";
import CustomSection from "../../customElements/CustomSection";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { colors } from "../../../utils/constants";
import { changeBgColorAnimation } from "../../../utils/gsapAnimations";
import ServiceCard from "./ServiceCard";
import { services } from "../../../utils/constants";
import ServiceImage from "./ServiceImage";
import SplitText from "../../../utils/Split3.min.js";
import SectionTitle from "../../customElements/SectionTitle";
import { useTranslation } from "react-i18next";
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const container = useRef(null);
  const { t } = useTranslation();

  useLayoutEffect(() => {
    const splitTitleParent = new SplitText(".servicesTitle", {
      type: "words, chars",
      chars: "chars",
      charsClass: "wordsParent",
    });

    const splitTitle = new SplitText(".servicesTitle", {
      type: "words, chars",
      charsClass: "beigeWords",
    });

    const elementsWorks = gsap.utils.toArray(".item-service");
    const slidePicWorks = gsap.utils.toArray("#gallery-services");
    const slidePicsWorks = gsap.utils.toArray("#services-images");

    gsap.set(slidePicWorks, { autoAlpha: 0 });

    const ctx = gsap.context(() => {
      let tl = gsap.timeline();

      // Animations for mouse over
      elementsWorks.forEach((element, index) => {
        element.addEventListener("mouseenter", function () {
          gsap.to(slidePicsWorks, {
            marginTop: `-${280 * index}px`,
            duration: 0.1,
            ease: "power1",
          });
        });

        element.addEventListener("mouseleave", function () {
          gsap.to(element, { color: "initial", duration: 10, ease: "power1" });
        });
      });

      window.addEventListener("mousemove", function (e) {
        gsap.to(slidePicWorks, {
          top: `${e.clientY}px`,
          left: `${e.clientX}px`,
          xPercent: -20,
          yPercent: -45,
          duration: 0.2,
          ease: "power1",
        });
      });

      //On enter container show image
      document
        .querySelector(".items-service")
        .addEventListener("mouseenter", function () {
          gsap.to(slidePicWorks, {
            autoAlpha: 1,
            duration: 0,
            ease: Expo.easeInOut,
          });
          gsap.fromTo(
            slidePicWorks,
            {
              scale: 2,
              clipPath: "circle(10px at 50% 50%)",
            },
            {
              scale: 1,
              clipPath: "circle(100% at 50% 50%)",
            }
          );
        });

      //On leave container hide image
      document
        .querySelector(".items-service")
        .addEventListener("mouseleave", function () {
          gsap.to(slidePicWorks, {
            autoAlpha: 0,
            duration: 0,
            clipPath: "circle(10px at 50% 50%)",
            ease: Expo.easeInOut,
          });
        });

      // Animations for scroll

      changeBgColorAnimation({
        trigger: container.current,
        colors: {
          enter: colors.black,
          exit: "#FAEEFF",
          menuEnter: colors.white,
          menuExit: colors.black,
        },
        position: {
          start: "top 50%",
          end: "bottom 30.5%",
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container}>
      <CustomSection hasPadding className="flex flex-col gap-50 min-h-[100vh]">
        <SectionTitle
          className="servicesTitle text-beige"
          text={t("home.services.title")}
        ></SectionTitle>
        <section className="relative flex flex-col services">
          <div className="w-full m-auto container-services">
            <div className="flex flex-col w-full h-full content-services">
              {/* header */}
              <div className="w-full grid grid-cols-2 pb-10 border-b-[1px] border-white gap-20 ">
                <div className="w-full h-full">
                  <span className="text-white text-xsm">
                    ({t("home.services.tableHeaderOne")})
                  </span>
                </div>
                <div className="w-full h-full">
                  <span className="text-white text-xsm">
                    ({t("home.services.tableHeaderTwo")})
                  </span>
                </div>
              </div>

              {/* gallery */}
              <div
                id="gallery-services"
                className="flex fixed w-[385px] h-[280px] transform z-[999] overflow-hidden pointer-events-none rounded-[10px]"
                style={{
                  transform: "translateY(-50%, 50%)",
                  transition: "all cubic-bezier(0.19, 1, 0.22, 1) 1s",
                }}
              >
                <div
                  id="services-images"
                  className="w-full h-[calc(280px*3)] flex flex-col rounded-[10px]"
                  style={{
                    transition: "all cubic-bezier(0.19, 1, 0.22, 1) 1s",
                  }}
                >
                  <ServiceImage image="/images/website.png" />
                  <ServiceImage image="/images/seo.png" />
                  <ServiceImage image="/images/mail.png" />
                </div>
              </div>

              {/* items */}
              <div className="flex flex-col w-full h-full items-service">
                {services.map((service, index) => (
                  <ServiceCard index={index} key={index} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </CustomSection>
    </div>
  );
};

export default Services;
