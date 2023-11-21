import React, { FC, ReactNode } from "react";
import { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import { CustomizeBtn } from "./style";

export interface DefaultButtonProps extends MuiButtonProps {
  className?: string;
  children: ReactNode;
  // variant: "contained" | "text";
  // theme?: any;
}

const ButtonComponent: FC<DefaultButtonProps> = ({
  className,
  children,
  // variant = "contained",
  // theme,
  ...props
}) => {
  // const changeColor = (variant: string) =>
  //   "contained" === variant ? true : false;

  return (
    <CustomizeBtn
      {...props}
      // variant="contained"
      // variantColor={changeColor(variant)}
      className={className}
    >
      {children}
    </CustomizeBtn>
  );
};

export { ButtonComponent };
