import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import CharacterItem from '../components/CharacterItem';
import {character} from '../responses';

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

describe('<CharacterItem />', () => {
  beforeEach(() => {
    component = render(<CharacterItem data={character} />);
  });
  it('Renders correctly', () => {
    expect(component).toBeDefined();
  });
  it(`Renders the character's name`, () => {
    const name = component.getByText('Rick Sanchez');
    expect(name).toBeDefined();
  });
  it(`Renders the character's status and species`, () => {
    const statusAndSpecies = component.getByText('Alive Human');
    expect(statusAndSpecies).toBeDefined();
  });
  it('Renders the last known location', () => {
    const location = component.getByText('Earth (Replacement Dimension)');
    expect(location).toBeDefined();
  });
  it('Renders the first seen in location', () => {
    const origin = component.getByText('Earth (C-137)');
    expect(origin).toBeDefined();
  });
});
