import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SelectComponent } from ".";

export default {
  title: "ReactComponentLibrary/Select",
  component: SelectComponent,
} as ComponentMeta<typeof SelectComponent>;

const Template: ComponentStory<typeof SelectComponent> = (args) => (
  <SelectComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Age",
  menuItems: [
    { value: "1", label: "test1" },
    { value: "2", label: "test2" },
    { value: "3", label: "test3" },
  ],
};
