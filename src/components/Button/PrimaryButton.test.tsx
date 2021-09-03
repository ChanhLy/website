import React from 'react';

import renderer from 'react-test-renderer';

import { PrimaryButton } from '@/components/Button/PrimaryButton';

it('renders correctly', () => {
  const tree = renderer.create(<PrimaryButton>Button</PrimaryButton>).toJSON();
  expect(tree).toMatchSnapshot();
});
