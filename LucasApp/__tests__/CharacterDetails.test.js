import React from 'react';
import {render} from '@testing-library/react-native';
import {character} from '../responses';
import CharacterDetails from '../pages/CharacterDetails';

let component;

describe('<CharacterDetails />', () => {
  beforeEach(() => {
    component = render(<CharacterDetails route={{params: character}} />);
  });
  it('Renders correctly', () => {
    expect(component).toBeDefined();
  });
  it(`Renders the character's name`, () => {
    const name = component.getByText('Rick Sanchez');
    expect(name).toBeDefined();
  });
  it(`Renders the character's status`, () => {
    const statusAndSpecies = component.getByText('Alive');
    expect(statusAndSpecies).toBeDefined();
  });
  it('Renders the location', () => {
    const location = component.getByText('Earth (Replacement Dimension)');
    expect(location).toBeDefined();
  });
  it('Renders the origin', () => {
    const origin = component.getByText('Earth (C-137)');
    expect(origin).toBeDefined();
  });
});
