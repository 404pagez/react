import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Blocked404 from "./Blocked404";

// @ts-ignore
export default {
    title: "404pagez/Blocked404",
    component: Blocked404,
} as ComponentMeta<typeof Blocked404>;

const Template: ComponentStory<typeof Blocked404> = (args) => (
    <Blocked404 {...args} />
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
