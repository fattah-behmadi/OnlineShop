import React from "react";
import BaseImg from "components/base/BaseImg";
import BaseButton from "components/base/BaseButton";
import BaseIcon from "components/base/BaseIcon";
const TheNavbar = () => {


  return (
    <div className="flex-grow">
      <BaseImg className="cursor-pointer md:ltr:-mr-3 h-20 pb-2  m-2" />
      <BaseButton className="h-10 items-center md:flex  rounded-lg py-1 px-2 ltr:mr-3 rtl:ml-3 border-[1px] border-gray-200 dark:border-gray-200/40 shadow-sm ">
        <p className="text-center flex ">
          Login | SingIn

          <i className="px-1 mx-1">
          <BaseIcon iconID='login' size='1rem' />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg> */}
          </i>
        </p>
      </BaseButton>
    </div>
  );
};

export default TheNavbar;
