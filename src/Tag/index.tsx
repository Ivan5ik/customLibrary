import React from "react";
import { TextFieldProps as MuiTextFieldProps } from "@mui/material";
import SkillsOrange from "./style";

const Tag = ({ children }: any) => (
  <SkillsOrange>
    <p>{children}</p>
  </SkillsOrange>
);

export { Tag };
