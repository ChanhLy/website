import React from 'react';

import { Meta, Story } from '@storybook/react';

import { ImgTitle, ImgProps } from './ImgTitle';

const story: Meta = {
  title: 'Components/Home/Imgtitle',
  component: ImgTitle,
};

export const Default: Story = (props: ImgProps) => {
  return <ImgTitle {...props}></ImgTitle>;
};

Default.args = {};

Default.parameters = {
  jest: ['Footer.test.tsx'],
  layout: 'fullscreen',
};

export default story;
