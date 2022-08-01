import React from "react";

const BaseButton = ({ title, type = "default", className, children }) => {
  
  const bgButton = {
    success: " bg-green-700 text-white ",
    danger: " bg-red-500 text-white ",
    warning: " bg-yellow-500 text-white ",
    default: " bg-gray-200 text-gray-600 ",
  };
  const color = bgButton[type];

  return (
    <>
      <button
        type="button"
        className={
          className +
          color +
          " items-center md:flex  rounded-lg py-1 px-2 ltr:mr-3 rtl:ml-3 border-[1px] border-gray-200 dark:border-gray-200/40 shadow-sm"
        }
      >
        {children || title}
      </button>
    </>
  );
};

export default BaseButton;
