import React, { FC, ReactNode } from "react";
import { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import { CustomizeBtn } from "./style";
import { ThemeProvider, createTheme } from "@mui/material";

export interface TestDefaultButtonProps extends MuiButtonProps {
  className?: string;
  children: ReactNode;
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff4081",
      dark: "#c51162",
    },
  },
});

const TestButtonComponent: FC<TestDefaultButtonProps> = ({
  className,
  children,
  variant,

  ...props
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CustomizeBtn {...props} variant="contained" className={className}>
        {children}
      </CustomizeBtn>
    </ThemeProvider>
  );
};

export { TestButtonComponent };
