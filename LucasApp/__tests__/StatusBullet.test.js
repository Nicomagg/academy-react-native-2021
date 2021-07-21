import React from 'react';
import {render} from '@testing-library/react-native';
import StatusBullet from './../components/StatusBullet';

let component;

describe('<StatusBullet />', () => {
  beforeEach(() => {
    component = render(<StatusBullet status="unknown" />);
  });
  it('Renders correctly', () => {
    expect(component).toBeDefined();
  });
});
