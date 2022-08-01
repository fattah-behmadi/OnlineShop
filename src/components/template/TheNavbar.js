import React from "react";
import BaseImg from "components/base/BaseImg";
import BaseButton from "components/base/BaseButton";
import BaseInput from "components/base/BaseInput";
import BaseSearchInput from "components/base/BaseSearchInput";

import { BiLogOut } from "react-icons/bi";

const TheNavbar = () => {
  const inputHandler = (value) => {
    console.log(value);
  };

  return (
    <div className="flex-grow  flex h-32 bg-gray-100 w-full">
      <BaseButton className="h-10">
        <p className="text-center flex ">
          Login | SingIn <BiLogOut size="1.5rem" className="text-white  mx-1" />
        </p>
      </BaseButton>
      <BaseSearchInput value="222" ChangeValue={inputHandler} className='mr-auto'/>
      <BaseImg className="cursor-pointer md:ltr:-mr-3 h-20 pb-2  m-2 mr-auto" />
    </div>
  );
};

export default TheNavbar;
