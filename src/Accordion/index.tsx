import React, { FC } from "react";
import { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import { MuiAccordion, MuiAccordionSummary, MuiExpandMoreIcon } from "./style";

export interface ButtonComponentProps {
  label?: string;
  children?: any;
}

const Accordion: FC<ButtonComponentProps> = ({ children, label }) => {
  return (
    <MuiAccordion>
      <MuiAccordionSummary
        aria-controls="panel1a-content"
        expandIcon={<MuiExpandMoreIcon />}
        id="panel1a-header"
      >
        {label}
      </MuiAccordionSummary>
      {children}
    </MuiAccordion>
  );
};

export { Accordion };
