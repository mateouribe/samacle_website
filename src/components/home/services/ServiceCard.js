import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const ServiceCard = ({ service }) => {
  const container = useRef(null);

  return (
    <div
      className="item-service w-full grid grid-cols-2 border-b-[1px] border-white py-tablet gap-20 lg:pl-tablet opacity-70 hover:opacity-100 "
      ref={container}
      style={{
        transition: "0.5s",
      }}
    >
      <div className="w-full h-full">
        <h4
          className="text-white text-[20px]"
          dangerouslySetInnerHTML={{ __html: service.title }}
        ></h4>
        {service.subtitle !== "" && (
          <span className="text-xsm text-white">{service.subtitle}</span>
        )}
      </div>
      <div className="w-full h-full">
        <p
          className="text-white text-text text-justify"
          dangerouslySetInnerHTML={{ __html: service.shortDescription }}
        ></p>
      </div>
    </div>
  );
};

export default ServiceCard;
