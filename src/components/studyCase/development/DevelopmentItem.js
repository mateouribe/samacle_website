import React, { useLayoutEffect, useRef } from "react";
import CustomButton from "../../customElements/CustomButton";
import CustomImage from "../../customElements/CustomImage";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const DevelopmentItem = ({ index, item }) => {
  const container = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container.current,
        start: index === 0 ? "top 92.85%" : "top 120%",
        end: index === 0 ? "bottom 92.85%" : "bottom 120%",
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
      className="w-full flex flex-col md:flex-row  gap-20 md:gap-0 rounded-10"
      key={index}
      ref={container}
    >
      {/* Image */}
      <div
        className={`w-full md:w-1/2 h-[80vh] bg-lightGray rounded-10 ${
          index % 2 !== 0 ? "order-1 md:order-2" : "order-1"
        }`}
      >
        <CustomImage
          image={item.image}
          position={
            index === 0
              ? {
                  start: "top 92.85%",
                  end: "bottom 92.85%",
                }
              : {
                  start: "top 120%",
                  end: "bottom 120%",
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
          <h5 className="text-[20px] text-black">{item.title}</h5>
          <p className="text-black">{item.description}</p>
        </div>

        <CustomButton>BECOME CLIENT</CustomButton>
      </div>
    </div>
  );
};

export default DevelopmentItem;
