import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Select from "./Select";

export default {
  title: "ReactComponentLibrary/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Age",
  menuItems: [
    { value: "1", label: "test1" },
    { value: "2", label: "test2" },
    { value: "3", label: "test3" },
  ],
};
