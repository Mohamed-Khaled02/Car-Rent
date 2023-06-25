import { CustomButtonProps } from "@/types/type";
import React from "react";

const CustomButton = ({
  textStyles,
  title,
  containerStyles,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={`custom-btn ${containerStyles} ${textStyles} `}
    >
      {title}
    </button>
  );
};

export default CustomButton;
