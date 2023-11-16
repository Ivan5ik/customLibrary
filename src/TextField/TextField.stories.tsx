import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextField from ".";

export default {
  title: "ReactComponentLibrary/Text Field",
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Default = Template.bind({});
Default.args = { label: "Email", className: "test-text-field" };
