import React from "react";
import BaseCategory from "components/base/BaseCategory";
import BaseDiscount from "components/base/BaseDiscount";
import BaseSell from "components/base/BaseSell";
import BaseLanguage from "components/base/BaseLanguage";


const TheNavbar = () => {


  return (
    <div className="flex justify-center flex-row-reverse items-center ">
      <BaseCategory />
      <BaseDiscount />
      <BaseSell />
      <BaseLanguage />

    </div>
  );
};

export default TheNavbar;


