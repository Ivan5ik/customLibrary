import React from "react";
import "./Button.scss";
import { CustomizeBtn } from "./style";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <CustomizeBtn>{props.label}</CustomizeBtn>;
};

export default Button;
