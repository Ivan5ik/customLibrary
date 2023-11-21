import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ButtonComponent } from ".";
import { ThemeProvider, createTheme } from "@mui/material";

export default {
  title: "ReactComponentLibrary/Button",
  component: ButtonComponent,
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args) => {
  return (
    <ThemeProvider
      theme={createTheme({
        palette: {
          primary: {
            main: "#e010fb",
            dark: "#c51162",
          },
        },
      })}
    >
      <ButtonComponent {...args}>Search</ButtonComponent>
    </ThemeProvider>
  );
};
export const Default = Template.bind({});
Default.args = { className: "asd", variant: "contained" };
