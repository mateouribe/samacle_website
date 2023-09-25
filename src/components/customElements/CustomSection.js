import React from "react";

const CustomSection = ({
  children,
  fullHeightNav = false,
  hasPadding = false,
  className,
  fullHeight = false,
  ref,
}) => {
  return (
    <section
      className={`w-full 
      ${fullHeightNav ? "h-view lg:h-[calc(100vh-66px)]" : "h-full"}
      ${hasPadding ? "p-mobile md:p-tablet lg:p-desktop" : ""} 
      ${fullHeight ? "h-view" : "h-auto"}
      ${className} 
    }`}
      ref={ref}
    >
      {children}
    </section>
  );
};

export default CustomSection;
