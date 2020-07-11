import React from 'react';
import {ProductComponent} from './components/product';
import {AboutComponent} from './components/about';
import renderer from 'react-test-renderer';

it('About is renders correctly', () => {
    let component = renderer.create(<AboutComponent/>);  
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();

    tree.props._handleChange;
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

  });
