import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import SectionTitle from "../../customElements/SectionTitle";
import DevelopmentItem from "./DevelopmentItem";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import SplitText from "../../../utils/Split3.min";
gsap.registerPlugin(ScrollTrigger);

const Development = ({ project }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const container = useRef(null);
  useEffect(() => {
    if (project !== undefined && project !== null && project !== []) {
      setIsLoaded(true);
    }
  }, [project]);

  useLayoutEffect(() => {
    if (isLoaded) {
      const splitTitleParent = new SplitText(".developmentTitle", {
        type: "words, chars",
        chars: "chars",
        charsClass: "wordsParent",
      });

      const splitTitle = new SplitText(".developmentTitle", {
        type: "words, chars",
        charsClass: "orangeWords",
      });

      const ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: container.current,
          start: "top 70%",
          end: "bottom 70%",
          animation: gsap.fromTo(
            splitTitle.chars,
            {
              y: 45,
            },
            {
              y: 0,
              duration: 1,
              stagger: 0.02,
              ease: Expo.easeOut,
            }
          ),
        });
      }, container);

      return () => ctx.revert();
    }
  }, [isLoaded]);

  return (
    <section className="py-tablet flex flex-col gap-50" ref={container}>
      {isLoaded && (
        <>
          <SectionTitle className="text-black pl-mobile md:pl-tablet lg:pl-desktop developmentTitle">
            Development
          </SectionTitle>
          <div className="w-full flex flex-col gap-100 md:gap-0">
            {project.studyCase.development.map((item, index) => (
              <DevelopmentItem index={index} item={item} key={index} />
            ))}
            <span className="text-black px-mobile md:px-tablet lg:px-desktop py-desktop text-[25px]">
              {project.studyCase.challenges}
            </span>
          </div>
        </>
      )}
    </section>
  );
};

export default Development;
