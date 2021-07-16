import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import MenuIcon from '../components/MenuIcon';

let component;

describe('<MenuIcon />', () => {
  beforeEach(() => {
    component = render(<MenuIcon />);
  });
  it('Renders correctly', () => {
    expect(component).toBeDefined();
  });
});
