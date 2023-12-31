import React, { useLayoutEffect, useRef } from "react";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import DesktopContentSection from "./DesktopContentSection";
import { colors } from "../../../utils/constants";
import DesktopPhoto from "./DesktopPhoto";
import MobileContentSections from "./MobileContentSections";
//isDesktop context
import { useTranslation } from "react-i18next";
gsap.registerPlugin(ScrollTrigger);

const WhyUs = () => {
  const container = useRef();
  const { t } = useTranslation();

  useLayoutEffect(() => {
    const images = gsap.utils.toArray(".desktopPhoto:not(:first-child)");
    const body = document.querySelector("body");
    let mm = gsap.matchMedia();
    gsap.set(images, { yPercent: 100 });

    const ctx = gsap.context(() => {
      const animation = gsap.to(images, {
        yPercent: 0,
        stagger: 0.5,
      });

      mm.add("(min-width: 900px)", () => {
        ScrollTrigger.create({
          trigger: container.current,
          start: "top top",
          end: "bottom bottom",
          pin: ".right",
          animation: animation,
          scrub: 2,
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container}>
      <div className="relative flex gallery">
        {/* Left side */}
        <div className="w-1/2 left outline-1">
          {/* Desktop content */}
          <div className="m-auto desktopContent px-desktop">
            <DesktopContentSection
              title={t("home.whyUs.reasonOneTitle")}
              text={t("home.whyUs.reasonOneDescription")}
              bgColor="#E3F9FC"
              backToWhite
            />
            <DesktopContentSection
              title={t("home.whyUs.reasonTwoTitle")}
              text={t("home.whyUs.reasonTwoDescription")}
              bgColor="#FFF3E5"
            />
            <DesktopContentSection
              title={t("home.whyUs.reasonThreeTitle")}
              text={t("home.whyUs.reasonThreeDescription")}
              bgColor="#FBE5EB"
            />
            <DesktopContentSection
              title={t("home.whyUs.reasonFourTitle")}
              text={t("home.whyUs.reasonFourDescription")}
              bgColor="#F0E9F8"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-col justify-center w-1/2 right h-view px-mobile md:px-desktop lg:pl-0 lg:pr-desktop">
          {/* //TODO:pr-100 */}
          {/* <!-- add mobile content here--> */}
          <div className="hidden w-full mobileContent mb-100">
            <MobileContentSections
              ttitle={t("home.whyUs.reasonOneTitle")}
              text={t("home.whyUs.reasonOneDescription")}
              image="/images/blue.png"
              color="#C5F8FF #8BF5FF #37AFC8"
            />
            <MobileContentSections
              title={t("home.whyUs.reasonTwoTitle")}
              text={t("home.whyUs.reasonTwoDescription")}
              image="/images/orange.png"
              color="#FFE2C2 #FF9F35 #CF7A1B"
            />
            <MobileContentSections
              title={t("home.whyUs.reasonThreeTitle")}
              text={t("home.whyUs.reasonThreeDescription")}
              image="/images/pink.png"
              color="#FEB6CC #DF3866 #AA2147"
            />
            <MobileContentSections
              title={t("home.whyUs.reasonFourTitle")}
              text={t("home.whyUs.reasonFourDescription")}
              image="/images/purple.png"
              color="#D8BBFC #8952CB #4D21AA"
            />
          </div>
          {/* <!-- desktop content --> */}
          <div className="desktopPhotos w-[100%] h-[40vw] relative overflow-hidden rounded-10">
            <DesktopPhoto
              image="/images/blue.png"
              color="#94EFF9 #1BB7C8 #229AB2"
            />
            <DesktopPhoto
              image="/images/orange.png"
              color="#FFE2C2 #FF9F35 #CF7A1B"
            />
            <DesktopPhoto
              image="/images/pink.png"
              color="#FEB6CC #DF3866 #AA2147"
            />
            <DesktopPhoto
              image="/images/purple.png"
              color="#D8BBFC #8952CB #4D21AA"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
