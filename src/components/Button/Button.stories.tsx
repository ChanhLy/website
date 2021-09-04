import React from 'react';

import { Meta, Story } from '@storybook/react';

import { Button, ButtonProps } from './Button';

const story: Meta = {
  title: 'Components/Button',
  component: Button,
};

export const Default: Story = (props: ButtonProps) => {
  return <Button {...props}>Default</Button>;
};

Default.args = {};

Default.parameters = {
  jest: ['Button.test.tsx'],
};

export default story;
