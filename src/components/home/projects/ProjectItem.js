import React, { useLayoutEffect, useRef } from "react";
import CustomImage from "../../CustomImage";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const ProjectItem = ({ project, alignLeft = false, isFirstOne, index }) => {
  const positions = isFirstOne
    ? { start: "top 62.5%", end: "bottom 62.5%" }
    : { start: "top 70%", end: "bottom 70%" };

  const container = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container.current,
        start: positions.start,
        end: positions.end,
        animation: gsap.fromTo(
          ".projectInfo",
          {
            yPercent: 100,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.5,
            ease: Expo.easeOut,
          }
        ),
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className={`w-full h-[90vh] md:col-span-12 flex ${
        alignLeft ? "justify-start" : "justify-end"
      }`}
      ref={container}
    >
      <div className="w-[100%] md:w-[45%] h-[90vh] flex flex-col gap-10">
        <div className="w-full h-full overflow-hidden rounded-10">
          <CustomImage
            image={project.image}
            position={positions}
            index={index}
          />
        </div>
        <div className="flex justify-between items-start projectInfo">
          <h5 className="text-black">
            {project.title} - {project.place}
          </h5>
          <div className="flex flex-col">
            {project.tags.map((tag) => (
              <span className="text-xsm text-gray">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
