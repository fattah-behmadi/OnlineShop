import React from "react";

const  BaseButton = ({
  title,
  type = "button",
  className,
  children,
}) => {
  return (
    <>
      <button type={type} className={className + ""}>
        {children || title}
      </button>
    </>
  );
};

export default BaseButton;