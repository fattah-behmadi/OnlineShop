import React from "react";

const BaseCategorySubItems = ({ className, title }) => {
  return (
    <div className={className + " flex text-xl  cursor-pointer  ml-12"}>
      {title}
    </div>
  );
};

export default BaseCategorySubItems;
