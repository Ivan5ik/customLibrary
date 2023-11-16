import React, { FC } from "react";
import { CustomizeBtn } from "./style";
import { ButtonProps as MuiButtonProps } from "@mui/material/Button";

export interface TextButtonProps extends MuiButtonProps {
  className: string;
  text: string;
}

const TextButtonComponent: FC<TextButtonProps> = ({
  className,
  variant,
  text,
  ...props
}) => {
  return (
    <CustomizeBtn {...props} variant="text" className={className}>
      {text}
    </CustomizeBtn>
  );
};

export default TextButtonComponent;
