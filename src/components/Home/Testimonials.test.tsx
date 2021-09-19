import React from 'react';

import renderer from 'react-test-renderer';

import { Testimonials } from './Testimonials';

it('renders correctly', () => {
  const tree = renderer.create(<Testimonials></Testimonials>).toJSON();
  expect(tree).toMatchSnapshot();
});
