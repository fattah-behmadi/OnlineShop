import React from "react";
const BaseItemNavbar = ({ title, children }) => {
  return (
    <div className="text-gray-500 flex mx-4   ">
      {children}
      <a href="/">{title}</a>
    </div>
  );
};

export default BaseItemNavbar;
