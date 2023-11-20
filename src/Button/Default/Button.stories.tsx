import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ButtonComponent } from ".";

export default {
  title: "ReactComponentLibrary/Button",
  component: ButtonComponent,
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args}>Search</ButtonComponent>
);
export const Default = Template.bind({});
Default.args = { className: "asd", variant: "contained" };
