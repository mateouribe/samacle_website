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
              title="Statistics don't lie"
              text="Companies with compelling websites and top-notch SEO experience a staggering 30% increase in client acquisition every month. With our meticulous strategies, we aim to propel your business towards similar growth."
              bgColor="#FFF9F4"
              backToWhite
            />
            <DesktopContentSection
              title="Unleashing Your Sales Potential"
              text="Are you struggling to convert your leads into paying customers? Our team of experienced marketers and strategists will analyze your sales funnel to identify potential bottlenecks and areas of improvement. We'll craft data-driven strategies to optimize your conversion rates and increase your bottom line."
              bgColor="#DEFBFF"
            />
            <DesktopContentSection
              title="Unlock your potential"
              text="Uncover untapped opportunities in your target market through in-depth data analysis. Our team of experts leverages cutting-edge analytics to identify the most lucrative prospects for your business."
              bgColor="#EEFFEE"
            />
            <DesktopContentSection
              title="Statistics don't lie"
              text="Companies with compelling websites and top-notch SEO experience a staggering 30% increase in client acquisition every month. With our meticulous strategies, we aim to propel your business towards similar growth."
              bgColor="#FAEEFF"
              // backToWhite
            />
          </div>
        </div>

        {/* Right side */}
        <div className="right h-view w-1/2 flex flex-col justify-center px-mobile md:px-desktop lg:pl-0 lg:pr-desktop">
          {/* //TODO:pr-100 */}
          {/* <!-- add mobile content here--> */}
          <div className="mobileContent w-full hidden">
            <MobileContentSections
              title="Statistics don't lie"
              text="Companies with compelling websites and top-notch SEO experience a staggering 30% increase in client acquisition every month. With our meticulous strategies, we aim to propel your business towards similar growth."
              image="/images/orange.png"
              color="#FFF0E3 #FFDEC7 #FFA057"
            />
            <MobileContentSections
              title="Unleashing Your Sales Potential"
              text="Are you struggling to convert your leads into paying customers? Our team of experienced marketers and strategists will analyze your sales funnel to identify potential bottlenecks and areas of improvement. We'll craft data-driven strategies to optimize your conversion rates and increase your bottom line."
              image="/images/blue.png"
              color="#C5F8FF #8BF5FF #3BD1EC"
            />
            <MobileContentSections
              title="Unlock your potential"
              text="Uncover untapped opportunities in your target market through in-depth data analysis. Our team of experts leverages cutting-edge analytics to identify the most lucrative prospects for your business."
              image="/images/green.png"
              color="#DEFFDE #ACFFAE #78E47A"
            />
            <MobileContentSections
              title="Statistics don't lie"
              text="Companies with compelling websites and top-notch SEO experience a staggering 30% increase in client acquisition every month. With our meticulous strategies, we aim to propel your business towards similar growth."
              image="/images/purple.png"
              color="#F1DEFF #DBACFF #B420FA"
            />
          </div>
          {/* <!-- desktop content --> */}
          <div className="desktopPhotos w-[100%] h-[40vw] relative overflow-hidden rounded-[10px]">
            <DesktopPhoto
              image="/images/orange.png"
              color="#FFF0E3 #FFDEC7 #FFA057"
            />
            <DesktopPhoto
              image="/images/blue.png"
              color="#C5F8FF #8BF5FF #3BD1EC"
            />
            <DesktopPhoto
              image="/images/green.png"
              color="#DEFFDE #ACFFAE #78E47A"
            />
            <DesktopPhoto
              image="/images/purple.png"
              color="#F1DEFF #DBACFF #B420FA"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
