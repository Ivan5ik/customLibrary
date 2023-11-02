import React from "react";
import { CustomizeBtn } from "./style";
export interface ButtonProps {
  label: string;
}

const ButtonComponent = (props: ButtonProps) => {
  return <CustomizeBtn>{props.label}</CustomizeBtn>;
};

export default ButtonComponent;
