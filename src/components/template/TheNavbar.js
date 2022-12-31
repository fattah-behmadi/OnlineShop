import React from "react";
import BaseItemNavbar from "components/base/BaseItemNavbar";

import BaseCategory from "components/base/BaseCategory";
import BaseDiscount from "components/base/BaseDiscount";
import BaseSell from "components/base/BaseSell";
import BaseLanguage from "components/base/BaseLanguage";
import BaseSubItemsNavbars from "components/base/BaseSubItemsNavbars";
import "./style.css";
import { useTranslation } from "react-i18next";
import * as Icons from "react-icons/fa";

const TheNavbar = () => {
  const { t: fnTranslate } = useTranslation();
  const itemsNavbars = [
    {
      titel: fnTranslate("category"),
      icon: "FaBars",
    },
    {
      titel: fnTranslate("offers"),
      icon: "FaBars",
    },
    {
      titel: fnTranslate("sells"),
      icon: "FaBars",
    },
    {
      titel: "About",
      icon: "FaBars",
    },
  ];

  let elNavbars = itemsNavbars.map((item, index) => {
    const FaIcon = Icons[item?.icon];
    return (
      <BaseItemNavbar title={item.titel} key={index}>
        <FaIcon />
      </BaseItemNavbar>
    );
  });
  return (
    <div className="flex justify-between items-center mb-4 relative">
      <nav className="flex">
        {elNavbars}
        <BaseSubItemsNavbars className="nav__sub-item" />
      </nav>

      {/* <BaseCategory className="" /> */}
      {/* <BaseDiscount /> */}
      {/* <BaseSell /> */}
      <BaseLanguage />
    </div>
  );
};

export default TheNavbar;
