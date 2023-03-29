import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../../components/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Input/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const RedButton = Template.bind({});
RedButton.args = {
  label: "Red button",
  backgroundColor: "red",
  handleOnClick: () => {
    alert("Button clicked!");
  },
};

export const BlueButton = Template.bind({});
BlueButton.args = {
  label: "Blue button",
  backgroundColor: "blue",
  handleOnClick: () => {
    alert("Button clicked!");
  },
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  label: "Test button",
  disabled: true,
};
