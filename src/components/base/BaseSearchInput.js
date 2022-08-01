import React from "react";
import { FiSearch } from "react-icons/fi";

const BaseSearchInput = ({ placeholder, className, value, ChangeValue }) => {
  return (
    <div className={className + " h-10 flex items-center bg-gray-200 w-[432px] rounded-md "}>
      <input
        className=" px-4 py-2 md:py-3 bg-transparent text-slate-800 outline-none w-full"
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={(event) => ChangeValue(event.target.value)}
      />
      <FiSearch size="1.8rem" className="min-w-fit px-4 text-gray-500" />
    </div>
  );
};

export default BaseSearchInput;
