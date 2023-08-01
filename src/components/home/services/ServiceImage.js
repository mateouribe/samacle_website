import React from "react";

const ServiceImage = ({ image }) => {
  return (
    <div
      className="service-image w-full h-full"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
};

export default ServiceImage;
