import React from "react";
import BaseImg from "components/base/BaseImg";
import BaseButton from "components/base/BaseButton";
// import BaseInput from "components/base/BaseInput";
import BaseSearchInput from "components/base/BaseSearchInput";

import { BiLogOut } from "react-icons/bi";
import { FaShoppingCart } from 'react-icons/fa'

const TheNavbar = () => {
  const inputHandler = (value) => {
    console.log(value);
  };

  return (
    <div className="flex-grow  flex h-32 w-full  ">
      <BaseButton className="h-10 mx-28 my-8 bg-gray-200 p-2" >
        <p className="text-center flex text-gray-800 ">
          Login | SingIn <BiLogOut size="1.5rem" className="text-black  mr-4" />
        </p>
      </BaseButton>
      <FaShoppingCart className="absolute top-8 right-10 mt-1" size="2rem" />
      <span className="absolute top-6 right-8 flex items-center justify-center w-6 h-6 rtl:pt-[0.1rem] rounded-full bg-red-500 text-[0.75rem] leading-3 text-white shadow-lg ">10</span>
      <BaseSearchInput value="222" ChangeValue={inputHandler} className='mr-auto mt-8' />
      <BaseImg className="cursor-pointer md:ltr:-mr-3 h-20 pb-2 m-2 " />

    </div>
  );
};

export default TheNavbar;
