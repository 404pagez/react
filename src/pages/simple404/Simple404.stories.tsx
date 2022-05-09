import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Simple404 from "./Simple404";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "404pagez/Simple404",
  component: Simple404,
} as ComponentMeta<typeof Simple404>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Simple404> = (args) => <Simple404 {...args} />;

export const HelloWorld:any = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  size: 10,
};
export const aaa:any = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
aaa.args = {
  size: 50,
};
