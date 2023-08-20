import React from "react";
import CustomImage from "../../customElements/CustomImage";
import CustomButton from "../../customElements/CustomButton";
import CustomSection from "../../customElements/CustomSection";
import { services } from "../../../utils/constants";
import Card from "./Card";

const Options = () => {
  return (
    <CustomSection hasPadding className="h-full flex flex-col gap-100">
      {services.map((service, index) => (
        <Card service={service} index={index} key={index} />
      ))}
    </CustomSection>
  );
};

export default Options;
