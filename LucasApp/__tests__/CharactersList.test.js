import React from 'react';
import {render} from '@testing-library/react-native';
import CharactersList from '../components/CharactersList';
import {allCharacters} from '../responses';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

let component;

describe('<CharactersList />', () => {
  beforeEach(() => {
    component = render(<CharactersList data={allCharacters} />);
  });
  it('Renders correctly', () => {
    expect(component).toBeDefined();
  });
  it(`Renders the first character's name`, () => {
    const name = component.getByText('Rick Sanchez');
    expect(name).toBeDefined();
  });
  it(`Renders the character's status and species`, () => {
    const statusAndSpecies = component.getAllByText('Alive Human');
    expect(statusAndSpecies).toBeDefined();
  });
  it('Renders the last known location', () => {
    const location = component.getAllByText('Earth (Replacement Dimension)');
    expect(location).toBeDefined();
  });
  it('Renders the first seen in location', () => {
    const origin = component.getAllByText('Earth (C-137)');
    expect(origin).toBeDefined();
  });
});
