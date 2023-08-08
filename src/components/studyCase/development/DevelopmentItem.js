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
        start: "top 80%",
        end: "bottom 80%",
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
            delay: 0.4,
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
          position={{
            start: "top 80%",
            end: "bottom 80%",
          }}
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
