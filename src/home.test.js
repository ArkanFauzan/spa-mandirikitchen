import React from 'react';
import {HomeComponent} from './components/home';
import renderer from 'react-test-renderer';

it('Home is renders correctly', () => {
  const tree = renderer
    .create(<HomeComponent/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});