import { Meta, StoryObj } from "@storybook/react";

import { List } from "@/components/list/list";

const meta: Meta<typeof List> = {
  title: "Components/List",
  component: List,
};

export default meta;

type Story = StoryObj<typeof List>;

export const UnorderedList: Story = {
  args: {
    as: "ul",
    children: [
      <List.Item key="1">Item 1</List.Item>,
      <List.Item key="2">Item 2</List.Item>,
      <List.Item key="3">Item 3</List.Item>,
    ],
  },
};

export const OrderedList: Story = {
  args: {
    ...UnorderedList.args,
    as: "ol",
  },
};

export const DescriptionList: Story = {
  args: {
    ...UnorderedList.args,
    as: "dl",
    children: [
      <List.Item as="dt" key="dt-1">
        Term 1
      </List.Item>,
      <List.Item as="dd" key="dd-1">
        Description 1
      </List.Item>,

      <List.Item as="dt" key="dt-2">
        Term 2
      </List.Item>,
      <List.Item as="dd" key="dd-2">
        Description 2
      </List.Item>,

      <List.Item as="dt" key="dt-3">
        Term 3
      </List.Item>,
      <List.Item as="dd" key="dd-3">
        Description 3
      </List.Item>,
    ],
  },
};

export const NestedList: Story = {
  args: {
    ...UnorderedList.args,
    children: [
      <List.Item key="1">
        Item 1
        <List as="ul">
          <List.Item>Item 1.1</List.Item>
          <List.Item>
            Item 1.2
            <List as="ul">
              <List.Item>Item 1.2.1</List.Item>
              <List.Item>Item 1.2.2</List.Item>
            </List>
          </List.Item>
          <List.Item>Item 1.3</List.Item>
        </List>
      </List.Item>,
      <List.Item key="2">Item 2</List.Item>,
      <List.Item key="3">Item 3</List.Item>,
    ],
  },
};
