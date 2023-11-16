import React, { FC } from "react";
import { TextFieldProps as MuiTextFieldProps } from "@mui/material";
import { CustomizeTextField } from "./style";

type CustomTextFieldProps = MuiTextFieldProps & {
  className: string;
};

const TextField: FC<CustomTextFieldProps> = ({ className, ...props }) => {
  return (
    <CustomizeTextField {...props} variant="outlined" className={className} />
  );
};

export default TextField;
