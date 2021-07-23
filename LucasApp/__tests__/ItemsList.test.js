import React from 'react';
import {render} from '@testing-library/react-native';
import {locations} from '../responses';
import ItemsList from '../components/ItemsList';

let component;

describe('<ItemsList />', () => {
  beforeEach(() => {
    component = render(<ItemsList data={locations} />);
  });
  it('Renders correctly', () => {
    expect(component).toBeDefined();
  });
  it(`Renders the first location`, () => {
    const first = component.getByText('Earth (C-137)');
    expect(first).toBeDefined();
  });
});
