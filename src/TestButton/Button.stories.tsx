import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TestButtonComponent } from ".";

export default {
  title: "ReactComponentLibrary/TestButtonComponent",
  component: TestButtonComponent,
} as ComponentMeta<typeof TestButtonComponent>;

const Template: ComponentStory<typeof TestButtonComponent> = (args) => (
  <TestButtonComponent {...args}>Test</TestButtonComponent>
);

export const Default = Template.bind({});
Default.args = { className: "asd" };
