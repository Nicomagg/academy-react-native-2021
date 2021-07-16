import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import MenuIcon from '../components/MenuIcon';

const mockedOpenDrawer = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      openDrawer: mockedOpenDrawer,
    }),
  };
});

let component;

describe('<MenuIcon />', () => {
  beforeEach(() => {
    component = render(<MenuIcon />);
  });
  it('Renders correctly', () => {
    expect(component).toBeDefined();
  });
  it('Opens drawer when clicked', () => {
    const button = component.getByTestId('menuButton');
    fireEvent.press(button);
    expect(mockedOpenDrawer).toHaveBeenCalled();
  });
});
