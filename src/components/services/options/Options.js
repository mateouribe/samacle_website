import React, { useEffect } from "react";
import CustomSection from "../../customElements/CustomSection";
import { services } from "../../../utils/constants";
import Card from "./Card";

const Options = () => {
  return (
    <CustomSection
      hasPadding
      className="h-full flex flex-col gap-100 pt-desktop"
    >
      {services.map((service, index) => (
        <Card serviceImage={service.image} index={index} key={index} />
      ))}
    </CustomSection>
  );
};

export default Options;
