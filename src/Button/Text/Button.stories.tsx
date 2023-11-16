import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextButtonComponent } from ".";

export default {
  title: "ReactComponentLibrary/Button",
  component: TextButtonComponent,
} as ComponentMeta<typeof TextButtonComponent>;

const Template: ComponentStory<typeof TextButtonComponent> = (args) => (
  <TextButtonComponent {...args}>Test</TextButtonComponent>
);

export const Text = Template.bind({});
Text.args = { className: "asd" };
