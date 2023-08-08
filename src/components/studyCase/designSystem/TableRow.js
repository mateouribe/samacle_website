import React from "react";

const TableRow = ({ heading, desktop, mobile, index }) => {
  return (
    <div
      className="grid grid-cols-4 border-b-[1px] border-gray pb-5"
      key={index}
    >
      <div className="col-span-2 pl-10 flex justify-start">
        <div className="w-[25%] flex flex-col gap-[-5px] items-center ">
          <span className="text-text text-white uppercase leading-[80%]">
            {heading.split(" ")[0]}
          </span>
          <span className="text-xsm text-gray uppercase">
            ({heading.split(" ")[1]})
          </span>
        </div>
      </div>
      <div className="col-span-1 ">
        <span className="text-xsm text-gray uppercase text-center ">
          {desktop}
        </span>
      </div>
      <div className="col-span-1">
        <span className="text-xsm text-gray uppercase text-center ">
          {mobile}
        </span>
      </div>
    </div>
  );
};

export default TableRow;
