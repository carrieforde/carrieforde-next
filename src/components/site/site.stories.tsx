import { Meta, StoryObj } from "@storybook/react";

import { Site } from "@/components/site/site";
import { SiteProps } from "@/components/site/types";

const meta: Meta<typeof Site> = {
  title: "Components/Site",
  component: Site,
};

export default meta;

type Story = StoryObj<typeof Site>;

export const Primary: Story = {
  args: {
    children: "This is the default Site",
  },
  name: "Default",
};
