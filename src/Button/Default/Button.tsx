import React, { FC, ReactNode } from "react";
import { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import { CustomizeBtn } from "./style";

export interface DefaultButtonProps extends MuiButtonProps {
  className?: string;
  children: ReactNode;
}

const ButtonComponent: FC<DefaultButtonProps> = ({
  className,
  children,
  variant,

  ...props
}) => {
  return (
    <CustomizeBtn {...props} variant="contained" className={className}>
      {children}
    </CustomizeBtn>
  );
};

export { ButtonComponent };
