import React, { useLayoutEffect, useRef } from "react";
import CustomImage from "../../customElements/CustomImage";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";
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
      key={index}
    >
      <figure className="w-[100%] md:w-[45%] h-[90vh] flex flex-col gap-10">
        <Link
          className="h-full cursor-none projectItemScroll"
          to={
            project.completed && `/our-projects/study-case/${project.info.link}`
          }
        >
          <div className="relative w-full h-full overflow-hidden">
            <CustomImage
              image={project.image}
              position={positions}
              index={index}
              onLoad={!project.completed && true}
              noHover={!project.completed && true}
            />
            {!project.completed && (
              <div className="w-full h-full absolute left-0 top-0 bg-black/80 flex justify-center items-center z-[999]">
                <span className="text-[20px] md:text-[30px] text-gray">
                  Coming soon...
                </span>
              </div>
            )}
          </div>
          <figcaption className="flex items-start justify-between projectInfo">
            <h3 className="text-black">
              {project.info.title} - {project.info.place}
            </h3>
            <div className="flex flex-col">
              {project.info.tags.map((tag) => (
                <span className="text-xsm text-gray">{tag}</span>
              ))}
            </div>
          </figcaption>
        </Link>
      </figure>
    </div>
  );
};

export default ProjectItem;
