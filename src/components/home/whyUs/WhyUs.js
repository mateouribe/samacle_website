import React, { useLayoutEffect, useRef } from "react";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import DesktopContentSection from "./DesktopContentSection";
import { colors } from "../../../utils/constants";
import DesktopPhoto from "./DesktopPhoto";
import MobileContentSections from "./MobileContentSections";
gsap.registerPlugin(ScrollTrigger);

const WhyUs = () => {
  const container = useRef();

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
          scrub: true,
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container}>
      <div className="gallery flex relative">
        {/* Left side */}
        <div className="left w-1/2 outline-1">
          {/* Desktop content */}
          <div className="desktopContent m-auto px-desktop">
            <DesktopContentSection
              title="Expand Horizons: Captivating Design"
              text="A website extends the horizons of a business and increasing the number of people who have access to your product. Our team will take care of extending those horizons by presenting an outstanding and eye-catching effect."
              bgColor="#E3F9FC"
              backToWhite
            />
            <DesktopContentSection
              title="Revolutionize Appeal: Dynamic Presentation"
              text="Refrain from showing your product or service. Discover revolutionary ways to present it to make it more attractive to customers. Our team will be in charge of generating a much more striking image for customers."
              bgColor="#FFF3E5"
            />
            <DesktopContentSection
              title="Convert Leads: Trusted Dynamic Design"
              text="Make your website dynamics convert your leads into paying customers. Our team will give your website an attractive design and be equipped with mechanics that will provide confidence and professionalism when navigating it."
              bgColor="#FBE5EB"
            />
            <DesktopContentSection
              title="Taiolored Excellence: Unique Websites"
              text="Don't worry about your niche market, as our team is flexible and able to adapt to different needs, creating unique and customized websites that are attractive no matter the business."
              bgColor="#F0E9F8"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="right h-view w-1/2 flex flex-col justify-center px-mobile md:px-desktop lg:pl-0 lg:pr-desktop">
          {/* //TODO:pr-100 */}
          {/* <!-- add mobile content here--> */}
          <div className="mobileContent w-full hidden">
            <MobileContentSections
              title="Expand Horizons: Captivating Design"
              text="A website extends the horizons of a business and increasing the number of people who have access to your product. Our team will take care of extending those horizons by presenting an outstanding and eye-catching effect."
              image="/images/blue.png"
              color="#C5F8FF #8BF5FF #37AFC8"
            />
            <MobileContentSections
              title="Revolutionize Appeal: Dynamic Presentation"
              text="Refrain from showing your product or service. Discover revolutionary ways to present it to make it more attractive to customers. Our team will be in charge of generating a much more striking image for customers."
              image="/images/orange.png"
              color="#FFE2C2 #FF9F35 #CF7A1B"
            />
            <MobileContentSections
              title="Convert Leads: Trusted Dynamic Design"
              text="Make your website dynamics convert your leads into paying customers. Our team will give your website an attractive design and be equipped with mechanics that will provide confidence and professionalism when navigating it."
              image="/images/pink.png"
              color="#FEB6CC #DF3866 #AA2147"
            />
            <MobileContentSections
              title="Taiolored Excellence: Unique Websites"
              text="Don't worry about your niche market, as our team is flexible and able to adapt to different needs, creating unique and customized websites that are attractive no matter the business."
              image="/images/purple.png"
              color="#D8BBFC #8952CB #4D21AA"
            />
          </div>
          {/* <!-- desktop content --> */}
          <div className="desktopPhotos w-[100%] h-[40vw] relative overflow-hidden rounded-[10px]">
            <DesktopPhoto
              image="/images/blue.png"
              color="#C5F8FF #8BF5FF #37AFC8"
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
