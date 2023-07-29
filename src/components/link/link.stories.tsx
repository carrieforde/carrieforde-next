import { Meta, StoryObj } from "@storybook/react";
import { Link } from "./link";

const meta: Meta<typeof Link> = {
  title: "Link",
  component: Link,
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Primary: Story = {
  args: {
    children: "Visit Google",
    href: "https://www.google.com",
  },
};
