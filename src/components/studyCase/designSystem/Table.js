import React from "react";

const Table = ({ children, title, subtitle, className }) => {
  return (
    <div
      className={`w-full md:w-1/2 border-[1px] border-gray rounded-10 p-mobile flex flex-col gap-50 md:gap-20 justify-between ${className} overflow-y-scroll`}
    >
      <div className="w-full flex justify-between">
        <p className="text-text text-white">{title}</p>
        <p className="text-text text-main">{subtitle}</p>
      </div>
      {children}
    </div>
  );
};

export default Table;
