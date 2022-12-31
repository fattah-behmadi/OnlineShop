import React from "react";

const BaseInput = ({ placeholder, className, value, ChangeValue }) => {
  return (
    <>
      <input
        className={
          className +
          " w-[432px] rounded-md px-4 py-2 md:py-3 text-slate-800 outline-none "
        }
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(event) => ChangeValue(event.target.value)}
      />
    </>
  );
};

export default BaseInput;
