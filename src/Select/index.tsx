import React, { FC } from "react";
import {
  CustomizeSelect,
  CustomizeInputLabel,
  CustomizeMenuItem,
} from "./style";
import { SelectProps as MuiSelectProps } from "@mui/material/Select";
import { FormControl, MenuItem } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface MenuItem {
  value: string;
  label: string;
}

export interface SelectProps extends MuiSelectProps {
  className?: string;
  label: string;
  menuItems: MenuItem[];
}

const SelectComponent: FC<SelectProps> = ({
  menuItems,
  className,
  label,
  ...props
}) => {
  return (
    <FormControl fullWidth>
      <CustomizeInputLabel>{label}</CustomizeInputLabel>
      <CustomizeSelect
        {...props}
        label={label}
        className={className}
        IconComponent={ExpandMoreIcon}
      >
        {menuItems.map((item) => (
          <CustomizeMenuItem key={item.value} value={item.value}>
            {item.label}
          </CustomizeMenuItem>
        ))}
      </CustomizeSelect>
    </FormControl>
  );
};

export { SelectComponent };
