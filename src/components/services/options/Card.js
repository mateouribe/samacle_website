import React from "react";
import CustomImage from "../../customElements/CustomImage";
import CustomButton from "../../customElements/CustomButton";

const Card = ({ service, index }) => {
  return (
    <div className="w-full h-full flex flex-col gap-20" key={index}>
      <div className="w-full h-full flex items-center gap-20 leading-[100%]">
        <span className="text-[25px] lg:text-[60px] text-beige font-medium">
          0{index + 1}
        </span>
        <h4 className="text-xl text-black">{service.title}</h4>
      </div>
      <div className="w-full flex gap-30 justify-between items-stretch">
        <div className="w-[35%]">
          <CustomImage image={service.image} onLoad noHover />
        </div>
        <div className="w-[65%] flex flex-col gap-20 py-mobile">
          <p
            className="text-black"
            dangerouslySetInnerHTML={{ __html: service.description }}
          ></p>
          <CustomButton>Become a client</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Card;
