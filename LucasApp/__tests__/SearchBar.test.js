import React from 'react';

import {fireEvent, render} from '@testing-library/react-native';

jest.mock('react-native-elements', () => {
  return {
    Icon: () => {
      return <></>;
    },
  };
});

import SearchBar from './../components/SearchBar';

let component;

const handleSearch = jest.fn();

describe('<Search />', () => {
  beforeEach(() => {
    component = render(<SearchBar handleSearch={handleSearch} />);
  });
  it('Renders correctly', () => {
    expect(component).toBeDefined();
  });
  it('Calls the handler function when the value is changed', () => {
    const input = component.getByTestId('search-input');

    fireEvent(input, 'onChangeText', 'morty');

    expect(handleSearch).toHaveBeenCalled();
  });
});
