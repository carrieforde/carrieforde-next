import { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { Button } from "@/components/button/button";
import { Toggle } from "@/components/toggle/toggle";
import { ToggleProps } from "@/components/toggle/types";
import { useToggle } from "@/hooks/use-toggle";

const Wrapper: React.FC<ToggleProps> = ({ toggled, variant }) => {
  const [toggledState, setToggled] = useToggle(toggled);

  return (
    <Button type="button" onClick={setToggled}>
      <Toggle toggled={toggledState} variant={variant} />
    </Button>
  );
};

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggles",
  component: Toggle,
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const ChevronToggle: Story = {
  render: (args) => <Wrapper {...args} />,
  args: {
    variant: "chevron",
  },
};

export const PlusMinusToggle: Story = {
  ...ChevronToggle,
  args: {
    variant: "plus-minus",
  },
};
