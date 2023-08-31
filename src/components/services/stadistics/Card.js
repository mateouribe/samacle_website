import React from "react";

const Card = ({ children, title, text }) => {
  return (
    <div className="w-full h-full flex flex-col items-center gap-10">
      <h5 className="text-black font-medium text-[25px] lg:text-[40px]">
        {title}
      </h5>
      <p className="text-black" dangerouslySetInnerHTML={{ __html: text }}></p>
    </div>
  );
};

export default Card;
