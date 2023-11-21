import React, { FC } from "react";
import { ButtonProps as MuiButtonProps } from "@mui/material/Button";

import { CustomizeBtn } from "./style";

const ButtonComponent: FC<MuiButtonProps & { mode?: "dark" | "light" }> = ({
  children,
  ...props
}) => {
  return <CustomizeBtn {...props}>{children}</CustomizeBtn>;
};

export { ButtonComponent };
