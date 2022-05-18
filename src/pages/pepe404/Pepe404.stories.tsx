import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Pepe404 from "./Pepe404";

// @ts-ignore
export default {
    title: "404pagez/Pepe404",
    component: Pepe404,
} as ComponentMeta<typeof Pepe404>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Pepe404> = (args) => (
    <Pepe404 {...args} />
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
