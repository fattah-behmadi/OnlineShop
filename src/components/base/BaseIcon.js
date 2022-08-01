import React from "react";
import Icons from "assets/images/icons.svg";

const BaseIcon = ({ iconID, size, color, fill }) => {
  const srcIcon = () => {
    let src = `${require("assets/images/icons.svg")}#${iconID}`;
    return require(src);
  };

  const sizeIcon = () => {
    let value = size.split(" ");
    if (value?.length === 1) {
      return [value, value];
    }
    return [value[0], value?.[1]];
  };
  return (
    <>
      <svg
        aria-hidden="true"
        className={`${iconID}_icon icon`}
        style={{
          height: sizeIcon[0],
          width: sizeIcon[1],
          color: color,
          fill: fill,
        }}
      >
        <use xlinkHref={`${Icons}#${iconID}`} />
        {/* <use xlinkHref={srcIcon}></use> */}
      </svg>
    </>
  );
};

export default BaseIcon;
