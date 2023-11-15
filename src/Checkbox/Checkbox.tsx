import React, { FC } from "react";
import {
  FormControlLabel,
  CheckboxProps as MuiCheckboxProps,
} from "@mui/material";
import { CustomizeCheckbox } from "./style";
import { CheckboxCheckIcon, CheckboxNotCheckIcon } from "../icons";

export interface CheckboxProps extends MuiCheckboxProps {
  label?: string;
  labelPlacement?: "start" | "end" | "top" | "bottom";
  className?: string;
  disabled: boolean;
}

const Checkbox: FC<CheckboxProps> = ({
  labelPlacement,
  className,
  disabled,
  label,
  ...props
}) => {
  return (
    <FormControlLabel
      control={
        <CustomizeCheckbox
          className={className}
          disabled={disabled}
          icon={<CheckboxNotCheckIcon />}
          checkedIcon={<CheckboxCheckIcon />}
          {...props}
        />
      }
      label={label}
      labelPlacement={labelPlacement}
    />
  );
};

export default Checkbox;
