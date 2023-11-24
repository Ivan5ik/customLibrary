import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Tag } from ".";

export default {
  title: "ReactComponentLibrary/Tag",
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template = () => {
  return <Tag>Tags</Tag>;
};
export const Default = Template.bind({});
