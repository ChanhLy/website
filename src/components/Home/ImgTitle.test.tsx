import React from 'react';

import renderer from 'react-test-renderer';

import { ImgTitle } from './ImgTitle';

it('renders correctly', () => {
  const tree = renderer.create(<ImgTitle></ImgTitle>).toJSON();
  expect(tree).toMatchSnapshot();
});
