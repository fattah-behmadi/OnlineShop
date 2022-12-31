import React from "react";
import BaseCategorySubItems from "./BaseCategorySubItems";
import BaseSubItems from "./BaseSubItems";

const BaseSubItemsNavbars = ({ className }) => {
  return (
    <div className={className + " flex justify-start"}>
      <div className="left border-l-2">
        <BaseCategorySubItems title="Digital" />
        <BaseCategorySubItems title="Shoes" />
      </div>
      <div className="right">
        <BaseSubItems title="adidas" />
        <BaseSubItems title="Nike" />
      </div>
    </div>
  );
};

export default BaseSubItemsNavbars;
