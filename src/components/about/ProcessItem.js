import React, { useLayoutEffect, useRef } from "react";
import { Expo, gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import LineTitle from "../customElements/LineTitle";
import { useTranslation } from "react-i18next";
gsap.registerPlugin(ScrollTrigger);

const ProcessItem = ({ index }) => {
  const container = useRef(null);
  const { t } = useTranslation();

  console.log(index);

  return (
    <div
      className="flex flex-col items-center justify-between w-full md:flex-row gap-100"
      ref={container}
    >
      <div className="processesContainer w-[70%]">
        <h5 className="text-main text-[20px] block md:hidden">
          {t(`about.processes.${index}.title`)}
        </h5>
        <p className="w-full text-white md:w-full">
          {t(`about.processes.${index}.description`)}
        </p>
      </div>

      <LineTitle title={t(`about.processes.${index}.title`)} />
    </div>
  );
};

export default ProcessItem;
