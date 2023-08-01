import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitText from "./Split3.min";
gsap.registerPlugin(ScrollTrigger);

const changeBgColorAnimation = ({
  trigger,
  position = { start: "top 50%", end: "bottom 50%" },
  colors = { enter: "", exit: "" },
  markers = false,
  toggleActions = "",
}) => {
  const dependsOnBgColor = document.querySelectorAll(".dependsOnBgColor");
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
};

export { changeBgColorAnimation };
