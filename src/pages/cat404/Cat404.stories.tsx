import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Cat404 from "./Cat404";

// @ts-ignore
export default {
    title: "404pagez/Cat404",
    component: Cat404,
} as ComponentMeta<typeof Cat404>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Cat404> = (args) => (
    <Cat404 {...args} />
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
    isButton: true,
    buttonLabel: "Home",
    buttonColor: "#000",
};
