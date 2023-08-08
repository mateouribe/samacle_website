import React, { useLayoutEffect, useRef } from "react";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

const ProjectItem = ({ project, index }) => {
  const navigate = useNavigate();
  const container = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (index !== 0) {
        ScrollTrigger.create({
          trigger: container.current,
          start: "top 85%",
          end: "bottom 85%",
          animation: gsap.fromTo(
            ".projectContainer",
            {
              opacity: 0,
              yPercent: 100,
            },
            {
              opacity: 1,
              yPercent: 0,
              duration: 1.5,
              ease: Expo.easeOut,
            }
          ),
        });
      }
    }, container);

    return () => ctx.revert();
  }, [index]);

  return (
    <Link
      className={`w-full h-[80vh] flex flex-col gap-10 hoverMouse cursor-none ${
        index === 0 && "animateFirstProject"
      }`}
      ref={container}
      to={`/projects/study_case/${project.link}`}
    >
      <div
        className="w-full h-full flex gap-20 projectContainer"
        onClick={() => {
          window.scrollTo(0, 0);
          console.log("scroll top");
        }}
      >
        {/* image left */}
        <div
          className="w-full md:w-1/2 h-full rounded-10"
          style={{
            backgroundImage: `url(${project.mockupImages.big})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* images right */}
        <div className="w-1/2 h-full md:flex flex-col gap-20 hidden">
          <div
            className={`w-full h-[60%] rounded-10 ${
              index % 2 === 0 ? "order-2" : "order-1"
            }`}
            style={{
              backgroundImage: `url(${project.mockupImages.mid})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div
            className={`w-full h-[40%] rounded-10 ${
              index % 2 === 0 ? "order-1" : "order-2"
            }`}
            style={{
              backgroundImage: `url(${project.mockupImages.sm})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
      </div>
      <div className="flex justify-between">
        <h5 className="text-black">
          {project.title} - {project.place}
        </h5>
        <div className="flex flex-col">
          {project.tags.map((tag, index) => (
            <span className="text-xsm text-gray" key={index}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectItem;
