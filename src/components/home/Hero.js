import React, { useLayoutEffect, useRef } from "react";
import CustomSection from "../customElements/CustomSection";
import { AiOutlineBehance, AiOutlineInstagram } from "react-icons/ai";
import { colors } from "../../utils/constants";
import { Expo, gsap } from "gsap";
import SplitText from "../../utils/Split3.min";
import { useStatesContext } from "../../context/StatesProvider";

const Hero = () => {
  const container = useRef(null);
  const { animateNavbar, setAnimateNavbar } = useStatesContext();

  useLayoutEffect(() => {
    const splitTitleParent = new SplitText("#heroText", {
      type: "words, chars",
      chars: "chars",
      charsClass: "wordsParent",
    });

    const splitTitle = new SplitText("#heroText", {
      type: "words, chars",
      charsClass: "wordsBlack swearFont",
    });

    gsap.set(".followGroup", {
      opacity: 0,
    });
    const ctx = gsap.context(() => {
      let tl = gsap.timeline({});

      tl.fromTo(
        splitTitle.chars,
        {
          y: "120px",
        },
        {
          y: 0,
          duration: 2,
          ease: Expo.easeInOut,
          stagger: 0.03,
        }
      );
      tl.to(
        ".slideOut",
        {
          scaleY: 0,
          duration: 1.5,
          ease: Expo.easeInOut,
        },
        "-=2"
      );
      tl.from(
        ".coverImage",
        {
          scale: 1.3,
          duration: 2,
          ease: Expo.easeInOut,
        },
        "-=2"
      );
      tl.fromTo(
        ".followGroup",
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
        },
        "-=1.5"
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative" ref={container}>
      <CustomSection
        className="pt-[100px] md:pt-[200px] lg:pt-[55px] overflow-hidden relative"
        fullHeightNav
        hasPadding
      >
        <h2
          className="text-black font-swearDisplay text-[80px] md:text-[100px] lg:text-[138px] xl:text-[150px] leading-[99%] text-left overflow-hidden z-[100] relative"
          id="heroText"
        >
          Designing Dreams, <br />
          Delivering Results.
        </h2>

        <figure className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[50%] lg:w-[30%] h-[50%] origin-bottom z-[10]">
          <div className="w-full h-full relative">
            <div className="w-full h-full absolute top-0 left-0 bg-white z-[9] origin-top slideOut" />
            <div className="w-full h-full overflow-hidden relative">
              <div
                className="w-full h-full absolute top-0 left-0 z-[5] coverImage"
                style={{
                  backgroundImage: "url(images/orange_process.png)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </div>
          </div>
        </figure>

        <div className="absolute right-[10px] md:right-[20px] lg.right-[30px] bottom-[50px] lg:bottom-[100px] flex flex-col justify-center items-center gap-10 followGroup">
          <span
            className="text-[10px] text-main"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "upright",
              whiteSpace: "nowrap",
            }}
          >
            FOLLOW US
          </span>
          <div className="w-[1px] h-[30px] bg-main" />
          <div className="flex flex-col gap-5">
            <AiOutlineInstagram size={15} color={colors.main} />
            <AiOutlineBehance size={15} color={colors.main} />
          </div>
        </div>
      </CustomSection>
      {/* <div className="w-full h-view bg-green-300 absolute -top-[66px] left-0 origin-bottom slideHero" /> */}
    </div>
  );
};

export default Hero;
