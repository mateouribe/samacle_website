import React from "react";

const SectionTitle = ({ children, className, noMaxHeight = false }) => {
  return (
    <h3
      className={`text-titleMobile md:text-titleTablet ${className} ${
        noMaxHeight ? "" : "max-h-[42px] md:max-h-[62px] sectionTitle"
      }`}
    >
      {children}
    </h3>
  );
};

export default SectionTitle;
