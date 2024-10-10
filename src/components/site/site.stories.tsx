import { Meta, StoryObj } from "@storybook/react";

import { Logo } from "@/assets/logo/logo";
import { Link } from "@/components/link/link";
import { Menu } from "@/components/menu/menu";
import { Site } from "@/components/site/site";

const meta: Meta<typeof Site> = {
  title: "Components/Site",
  component: Site,
};

export default meta;

type Story = StoryObj<typeof Site>;

export const Primary: Story = {
  args: {
    children: [
      <Site.Header key="header">
        <Link href="#main" variant="skipLink">
          Skip to content
        </Link>
        <Site.Branding siteName="Carrie Forde">
          <Logo />
        </Site.Branding>
        <Site.Navigation>
          <Menu.Item key="about" href="/about">
            About
          </Menu.Item>

          <Menu.Item key="experience" href="/experience">
            Experience
          </Menu.Item>

          <Menu.Item key="blog" href="/blog">
            Blog
          </Menu.Item>
        </Site.Navigation>
      </Site.Header>,
      "This is the default Site",
    ],
  },
  name: "Default",
};
