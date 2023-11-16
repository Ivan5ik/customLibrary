import React, { FC } from "react";
import { CustomizeBtn } from "./style";
import { ButtonProps as MuiButtonProps } from "@mui/material/Button";

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
