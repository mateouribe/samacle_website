import React from "react";

const AboutLetter = ({
  subText,
  small = false,
  medium = false,
  large = false,
}) => {
  return (
    <div className="relative flex flex-col items-center lg:block">
      <p
        className={`font-swearDisplay inline-block leading-[80%] lg:leading-[0] aboutWord relative z-[10]
        ${
          small
            ? "text-[100px]"
            : medium
            ? "text-[190px]"
            : "text-[230px] lg:text-[400px]"
        }`}
      >
        WE
      </p>
      <img
        src={large ? "/images/heart.svg" : "/images/finger.svg"}
        className={`absolute w-[80%] top-1/2 -translate-y-1/2 lg:-top-full lg:translate-y-0 left-1/2 transform -translate-x-1/2 2 z-[1] ${
          large && "heart"
        }`}
        alt="finger svg"
      />
      <div className="w-full h-[1px] lg:h-[3px] block lg:absolute -bottom-20 left-0 bg-black z-[200]">
        <div className="w-full h-full relative">
          <span
            className={`text-xsm text-black absolute left-1/2  top-1/2 transform -translate-x-1/2  -translate-y-1/2 p-[3px] 
          ${
            small
              ? "bg-white"
              : medium
              ? "bg-white lg:bg-lightGray"
              : "bg-lightGray"
          }
          `}
          >
            ({subText})
          </span>
        </div>
      </div>
      {large && (
        <p className="text-black text-justify max-w-[466.41px] lg:hidden mt-[20px] block z-[200]">
          We are a digital agency in Waterloo, ON, Canada! We are not confined
          by borders; we thrive on collaborating with clients from all corners
          of the world. Our mission is to deliver exceptional digital solutions
          that leave a lasting impact on your brand.
        </p>
      )}
    </div>
  );
};

export default AboutLetter;
