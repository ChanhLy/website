import React from 'react';

import { Meta, Story } from '@storybook/react';

import { TitleContent, TitleContentProps } from './TitleContent';

const story: Meta = {
  title: 'Components/Home/TitleContent',
  component: TitleContent,
};

export const Default: Story = (props: TitleContentProps) => {
  return <TitleContent {...props}></TitleContent>;
};

Default.args = {};

Default.parameters = {
  jest: ['Header.test.tsx'],
  layout: 'fullscreen',
};

export default story;
