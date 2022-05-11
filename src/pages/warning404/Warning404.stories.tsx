import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Warning404 from "./Warning404";

// @ts-ignore
export default {
    title: "404pagez/Warning404",
    component: Warning404,
} as ComponentMeta<typeof Warning404>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Warning404> = (args) => (
    <Warning404 {...args} />
);

export const size: any = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
size.args = {
    size: 60,
    color: "red",
    isButton: true,
};

export const size20: any = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
size20.args = {
    size: 20,
};
