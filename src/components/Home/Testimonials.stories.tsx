import React from 'react';

import { Meta, Story } from '@storybook/react';

import { Testimonials, TestimonialsProps } from './Testimonials';

const story: Meta = {
  title: 'Components/Home/Testimonials',
  component: Testimonials,
};

export const Default: Story = (props: TestimonialsProps) => {
  return <Testimonials {...props}></Testimonials>;
};

Default.args = {};

Default.parameters = {
  jest: ['Header.test.tsx'],
  layout: 'fullscreen',
};

export default story;
