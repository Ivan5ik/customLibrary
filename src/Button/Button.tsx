import React from "react";
import Button from "@mui/material/Button";
export interface ButtonProps {
  label: string;
}

const ButtonComponent = (props: ButtonProps) => {
  return <Button>{props.label}</Button>;
};

export default ButtonComponent;
