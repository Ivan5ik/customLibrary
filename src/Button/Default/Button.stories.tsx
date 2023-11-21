import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ButtonComponent } from ".";
import { ThemeProvider, createTheme } from "@mui/material";

export default {
  title: "ReactComponentLibrary/Button",
  component: ButtonComponent,
  argTypes: {
    color: { control: { type: "select", options: ["#13ef1a", "#042fec"] } },
    mode: { control: { type: "select", options: ["dark", "light"] } },
  },
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent | any> = ({
  color,
  mode,
  ...args
}) => {
  return (
    <ThemeProvider
      theme={createTheme({
        palette: {
          mode: mode,
          ...(mode === "light"
            ? {
                // palette values for light mode
                primary: {
                  main: color,
                },
              }
            : {
                // palette values for dark mode
                primary: {
                  main: "#000000",
                },
              }),
        },
      })}
    >
      <ButtonComponent {...args}>Search</ButtonComponent>
    </ThemeProvider>
  );
};
export const Default = Template.bind({});

Default.args = {
  className: "custom-class",
  variant: "contained",
  color: "#ec042f",
  mode: "dark",
};
