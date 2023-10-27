import React, { useLayoutEffect, useRef } from "react";
import CustomButton from "../../customElements/CustomButton";
import CustomImage from "../../customElements/CustomImage";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useTranslation } from "react-i18next";
gsap.registerPlugin(ScrollTrigger);

const DevelopmentItem = ({ index, item, image }) => {
  const container = useRef(null);
  const { t } = useTranslation();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container.current,
        start: index === 0 ? "top 92.85%" : "top 130%",
        end: index === 0 ? "bottom 92.85%" : "bottom 130%",
        animation: gsap.fromTo(
          ".itemText",
          {
            opacity: 0,
            yPercent: 100,
          },
          {
            opacity: 1,
            yPercent: 0,
            duration: 1,
            delay: 0.8,
            ease: Expo.easeOut,
          }
        ),
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="flex flex-col w-full gap-20 md:flex-row md:gap-0"
      key={index}
      ref={container}
    >
      {/* Image */}
      <div
        className={`w-full md:w-1/2 h-[80vh] bg-lightGray ${
          index % 2 !== 0 ? "order-1 md:order-2" : "order-1"
        }`}
      >
        <CustomImage
          image={image}
          position={
            index === 0
              ? {
                  start: "top 92.85%",
                  end: "bottom 92.85%",
                }
              : {
                  start: "top 130%",
                  end: "bottom 130%",
                }
          }
          duration={2}
          noHover
        />
      </div>

      {/* Text */}
      <div
        className={`w-full md:w-1/2 py-0 md:py-50 px-mobile md:px-tablet lg:px-desktop flex flex-col gap-50 itemText ${
          index % 2 !== 0 ? "order-1" : "order-1 md:order-2"
        }`}
      >
        <div className="flex flex-col gap-20">
          <h5 className="text-[20px] text-black">
            {t(`${item}.studyCase.development.${index}.title`)}
          </h5>
          <p className="text-black">
            {t(`${item}.studyCase.development.${index}.description`)}
          </p>
        </div>

        <CustomButton navigateTo="/contact-us">
          {t("button.becomeClient")}
        </CustomButton>
      </div>
    </div>
  );
};

export default DevelopmentItem;
