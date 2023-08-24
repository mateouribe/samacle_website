import React, { useLayoutEffect, useRef } from "react";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { colors } from "../../utils/constants";
gsap.registerPlugin(ScrollTrigger);

const ProjectItem = ({ project, index }) => {
  const navigate = useNavigate();
  const container = useRef(null);
  const tl = useRef(null);

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

      tl.current = gsap.timeline({ paused: true });

      tl.current.to(".projectContainer", {
        scale: 0.99,
        duration: 2,
        ease: Expo.easeOut,
      });
    }, container);

    return () => ctx.revert();
  }, [index]);

  return (
    <figure
      key={index}
      onMouseEnter={() => {
        if (project.completed) {
          tl.current.play();
          tl.current.duration(2);
        }
      }}
      onMouseLeave={() => {
        if (project.completed) {
          tl.current.reverse();
          tl.current.duration(0.8);
        }
      }}
    >
      <Link
        className={`w-full h-[80vh] flex flex-col gap-10 hoverMouse cursor-none ${
          index === 0 && "animateFirstProject"
        }`}
        ref={container}
        to={project.completed && `/projects/study_case/${project.info.link}`}
      >
        <div className="w-full h-full flex gap-20 projectContainer relative">
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

          {!project.completed && (
            <div className="w-full h-full absolute left-0 top-0 bg-black/80 rounded-10 flex justify-center items-center">
              <span className="text-[20px] md:text-[30px] text-gray">
                Coming soon...
              </span>
            </div>
          )}
        </div>
        <figcaption className="flex justify-between">
          <h5 className="text-black textProject">
            {project.info.title} - {project.info.place}
          </h5>
          <div className="flex flex-col">
            {project.info.tags.map((tag, index) => (
              <span className="text-xsm text-gray textProject" key={index}>
                {tag}
              </span>
            ))}
          </div>
        </figcaption>
      </Link>
    </figure>
  );
};

export default ProjectItem;
