import React from 'react';

import renderer from 'react-test-renderer';

import { TitleContent } from './TitleContent';

it('renders correctly', () => {
  const tree = renderer.create(<TitleContent></TitleContent>).toJSON();
  expect(tree).toMatchSnapshot();
});
