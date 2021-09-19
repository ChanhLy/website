import React from 'react';

import { Meta, Story } from '@storybook/react';

import { Home, HomeProps } from './Home';

const story: Meta = {
  title: 'Components/Home',
  component: Home,
};

export const Default: Story = (props: HomeProps) => {
  return <Home {...props}></Home>;
};

Default.args = {};

Default.parameters = {
  jest: ['Footer.test.tsx'],
  layout: 'fullscreen',
};

export default story;
