import React from "react";

const CustomInput = ({ label, type, placeholder, name, textarea = false, required=false }) => {
  return (
    <label className="flex gap-10 justify-between cursor-none">
      <span className="text-sm text-black uppercase">({label})</span>
      {textarea ? (
        <textarea
          type={type}
          name={name}
          className="w-[80%] bg-transparent border-[1px] border-gray text-gray placeholder:text-sm placeholder:text-gray px-20 py-10 rounded-10 min-h-[200px] max-h-[300px] md:max-h-[500px] overflow-scroll focus-visible:outline-none focus-visible:ring-0  focus-visible:border-main"
          placeholder={placeholder}
          required={required}
        />
      ) : (
        <input
          type={type}
          name={name}
          className="w-[80%] bg-transparent border-[1px] border-gray text-gray placeholder:text-sm placeholder:text-gray px-20 py-10 rounded-10 focus-visible:outline-none focus-visible:ring-0 focus-visible:border-main"
          placeholder={placeholder}
          required={required}
        />
      )}
    </label>
  );
};

export default CustomInput;
