import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox } from ".";
import { ThemeProvider, createTheme } from "@mui/material";

export default {
  title: "ReactComponentLibrary/Checkbox",
  component: Checkbox,
  argTypes: {
    color: { control: { type: "select", options: ["#e10000", "#fbff00"] } },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = ({ color, ...args }) => (
  <ThemeProvider
    theme={createTheme({
      palette: {
        primary: {
          main: color ?? "#01ff38",
        },
      },
    })}
  >
    <Checkbox {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  size: "medium",
  className: "test-checkbox",
};

export const Text = Template.bind({});
Text.args = {
  size: "small",
  label: "test checkbox",
  labelPlacement: "end",
  className: "test-checkbox",
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: "medium",
  disabled: true,
};

export const TextDisabled = Template.bind({});
TextDisabled.args = {
  size: "medium",
  label: "test checkbox",
  disabled: true,
};
