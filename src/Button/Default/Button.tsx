import React, { FC } from "react";
import { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import { CustomizeBtn } from "./style";

export interface ButtonProps extends MuiButtonProps {
  className: string;
  text: string;
}

const ButtonComponent: FC<ButtonProps> = ({
  className,
  variant,
  text,
  ...props
}) => {
  return (
    <CustomizeBtn {...props} variant="contained" className={className}>
      {text}
    </CustomizeBtn>
  );
};

export default ButtonComponent;
