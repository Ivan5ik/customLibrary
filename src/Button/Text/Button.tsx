import React, { FC, ReactNode } from "react";
import { CustomizeBtn } from "./style";
import { ButtonProps as MuiButtonProps } from "@mui/material/Button";

export interface TextButtonProps extends MuiButtonProps {
  className?: string;
  children: ReactNode;
}

const TextButtonComponent: FC<TextButtonProps> = ({
  className,
  children,
  variant,
  ...props
}) => {
  return (
    <CustomizeBtn {...props} variant="text" className={className}>
      {children}
    </CustomizeBtn>
  );
};

export default TextButtonComponent;
