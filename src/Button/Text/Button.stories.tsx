import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import TextButtonComponent from "./Button";

export default {
  title: "ReactComponentLibrary/Button",
  component: TextButtonComponent,
} as ComponentMeta<typeof TextButtonComponent>;

const Template: ComponentStory<typeof TextButtonComponent> = (args) => (
  <TextButtonComponent {...args} />
);

export const Text = Template.bind({});
Text.args = {
  text: "Previous Step",
};
