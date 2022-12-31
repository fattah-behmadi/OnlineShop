import React from "react";
import logo from "assets/images/logo.svg";

const BaseImg = ({ titleImg, className }) => {
  return <img src={logo} alt="logo" className={className} />;
};

export default BaseImg;
