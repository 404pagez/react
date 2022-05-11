import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Simple404 from "./Simple404";

// @ts-ignore
export default {
    title: "404pagez/Simple404",
    component: Simple404,
} as ComponentMeta<typeof Simple404>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Simple404> = (args) => (
    <Simple404 {...args} />
);

export const size: any = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
size.args = {
    size: 40,
    isButton: true,
};
export const size20: any = Template.bind({});
size20.args = {
    size: 20,
    isButton: true,
    buttonLabel: "test",
};
