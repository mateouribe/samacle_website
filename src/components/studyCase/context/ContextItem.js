import React, { useLayoutEffect, useRef } from "react";
import CustomButton from "../../customElements/CustomButton";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import LineTitle from "../../customElements/LineTitle";

const ContextItem = ({ title, text, hasButton = false }) => {
  const container = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container.current,
        start: "top 70%",
        end: "bottom 70%",
        animation: gsap.fromTo(
          ".contextContainer",
          {
            opacity: 0,
            yPercent: 50,
          },
          {
            opacity: 1,
            yPercent: 0,
            duration: 1.5,
            ease: Expo.easeOut,
            onComplete: () => {
              gsap.to(".contextContainer", {
                clearProps: "all",
              });
            },
          }
        ),
      });
    }, container);

    return () => ctx.revert();
  }, []);
  return (
    <div
      className="w-full h-full py-tablet border-b-[1px] border-lightGray flex justify-end"
      ref={container}
    >
      <div className="w-full md:w-[70%] flex flex-col md:flex-row gap-20 md:gap-50">
        <div className="w-full md:w-[70%] flex flex-col gap-50 contextContainer">
          <span className="text-main text-sm md:hidden">{title}</span>
          <p className="text-black w-full md:w-[90%] text-left">{text}</p>
          {hasButton && <CustomButton>VISIT SITE</CustomButton>}
        </div>
        <LineTitle title={title} />
      </div>
    </div>
  );
};

export default ContextItem;
