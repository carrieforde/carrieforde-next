import React from 'react';
import Button from './Button';
import { ButtonProps } from './Button.interface';

export default {
  title: 'Button',
};

const Template: React.FC<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Click Me',
  onClick: () => console.log('Clicked!'),
};
