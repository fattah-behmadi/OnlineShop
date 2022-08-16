import React from "react";
import { FaBars } from "react-icons/fa";
import { useTranslation } from "react-i18next";
const BaseCategory = ({className}) => {
  const { t } = useTranslation();

  return (
    <div className={className +" flex text-xl  cursor-pointer  ml-12"}>
      <h3 className="pl-1 font-bold order-gray-400"> {t("category")}</h3>
      <FaBars />
    </div>
  );
};

export default BaseCategory;
