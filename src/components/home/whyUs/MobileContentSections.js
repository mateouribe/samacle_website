import React from "react";

const MobileContentSections = ({ image, title, text, color }) => {
  return (
    <div className="w-full flex flex-col gap-30">
      <div
        className="mobilePhoto w-full h-[80vh] flex flex-col justify-center items-center px-mobile py-tablet gap-20 rounded-10"
        style={{
          background: `linear-gradient(180deg, ${color.split(" ")[0]} 0%, ${
            color.split(" ")[1]
          } 100%)`,
        }}
      >
        <div
          className="w-full h-full rounded-10"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            boxShadow: `0px 10px 22px 2px ${color.split(" ")[2]}`,
          }}
        />{" "}
        <div className="flex flex-col gap-5">
          <h3 className="text-black italic text-[20px]]">{title}</h3>
          <p className="text-black">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default MobileContentSections;
