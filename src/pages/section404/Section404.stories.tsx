import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Section404 from "./Section404";

// @ts-ignore
export default {
    title: "404pagez/Section404",
    component: Section404,
} as ComponentMeta<typeof Section404>;

const Template: ComponentStory<typeof Section404> = (args) => (
    <Section404 {...args} />
);

export const size: any = Template.bind({});
size.args = {
    size: 40,
    isButton: false,
};
export const size20: any = Template.bind({});
size20.args = {
    size: 20,
    isButton: true,
    buttonLabel: "Home",
    buttonColor: "#000",
};
