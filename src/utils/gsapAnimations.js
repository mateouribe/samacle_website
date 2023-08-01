import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitText from "./Split3.min";
import { colors as defaultColors } from "./constants";
gsap.registerPlugin(ScrollTrigger);

const changeBgColorAnimation = ({
  trigger,
  position = { start: "top 50%", end: "bottom 50%" },
  colors = { enter: "", exit: "" },
  markers = false,
  toggleActions = "",
}) => {
  const dependsOnBgColor = document.querySelectorAll(".dependsOnBgColor");
  const linesBurger = document.querySelectorAll(".lineBurger");
  const circleBurger = document.querySelectorAll(".burgerCircle");

  ScrollTrigger.create({
    trigger: trigger,
    start: position.start,
    end: position.end,
    markers: markers,
    toggleActions: toggleActions,
    onToggle: (self) => {
      // whenever we enter a section from either direction (scrolling up or down), animate to its color
      if (self.isActive) {
        gsap.to(["body", dependsOnBgColor], {
          backgroundColor: colors.enter,
          overwrite: "auto",
        });
      } else {
        gsap.to(["body", dependsOnBgColor], {
          backgroundColor: colors.exit,
          overwrite: "auto",
        });
      }
    },
  });

  if (colors.enter === defaultColors.black) {
    ScrollTrigger.create({
      trigger: trigger,
      start: position.start,
      end: position.end,
      onToggle: (self) => {
        // whenever we enter a section from either direction (scrolling up or down), animate to its color
        if (self.isActive) {
          gsap.to(linesBurger, {
            backgroundColor: defaultColors.white,
            overwrite: "auto",
          });
        } else {
          gsap.to(linesBurger, {
            backgroundColor: defaultColors.black,
            overwrite: "auto",
          });
        }
      },
    });
    ScrollTrigger.create({
      trigger: trigger,
      start: position.start,
      end: position.end,
      onToggle: (self) => {
        // whenever we enter a section from either direction (scrolling up or down), animate to its color
        if (self.isActive) {
          gsap.to(circleBurger, {
            borderColor: defaultColors.white,
          });
        } else {
          gsap.to(linesBurger, {
            borderColor: defaultColors.black,
          });
        }
      },
    });
  } else if (colors.enter === defaultColors.white) {
    ScrollTrigger.create({
      trigger: trigger,
      start: position.start,
      end: position.end,
      onToggle: (self) => {
        // whenever we enter a section from either direction (scrolling up or down), animate to its color
        if (self.isActive) {
          gsap.to(linesBurger, {
            backgroundColor: defaultColors.black,
            overwrite: "auto",
          });
        } else {
          gsap.to(linesBurger, {
            backgroundColor: defaultColors.white,
            overwrite: "auto",
          });
        }
      },
    });
    ScrollTrigger.create({
      trigger: trigger,
      start: position.start,
      end: position.end,
      onToggle: (self) => {
        // whenever we enter a section from either direction (scrolling up or down), animate to its color
        if (self.isActive) {
          gsap.to(circleBurger, {
            borderColor: defaultColors.black,
          });
        } else {
          gsap.to(linesBurger, {
            borderColor: defaultColors.white,
          });
        }
      },
    });
  }
};

export { changeBgColorAnimation };
