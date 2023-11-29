import React, { FC } from "react";
import { AccordionProps } from "@mui/material/Accordion";
import { MuiAccordion, MuiAccordionSummary, MuiExpandMoreIcon } from "./style";

export interface IAccordionProps extends AccordionProps {
  label?: string;
  className?: string;
}

const Accordion: FC<IAccordionProps> = ({ children, label, ...props }) => {
  return (
    <MuiAccordion {...props}>
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
