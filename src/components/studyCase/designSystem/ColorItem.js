import React from "react";

const ColorItem = ({ item, index, spanTwo = false }) => {
  return (
    <div
      className={`w-full h-full flex flex-col gap-5 ${spanTwo && "col-span-2"}`}
      key={index}
    >
      <div
        className="w-full h-full rounded-10"
        //    style={{
        //      backgroundColor: item.hex,
        //    }}
        style={
          item.hex.split("-")[1]
            ? {
                backgroundImage: `linear-gradient(90deg, ${
                  item.hex.split("-")[0]
                } 0%, ${item.hex.split("-")[1]} 100%)`,
              }
            : { backgroundColor: item.hex }
        }
      />
      <div className="w-full flex justify-between">
        <span className="text-xsm text-gray">{item.name}</span>
        <span className="text-xsm text-gray">{item.hex}</span>
      </div>
    </div>
  );
};

export default ColorItem;
