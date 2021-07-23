import React from 'react';
import {render} from '@testing-library/react-native';
import CharacterListItem from '../src/components/CharacterListItem';
import {COLORS} from '../src/styles/globalStyleSheet';
import '@testing-library/jest-native/extend-expect';

describe('<CharacterListItem />', () => {
  let characterListItemAlive;
  let characterListItemDead;
  let characterListItemUnk;
  let characterMock;

  beforeEach(() => {
    characterMock = {
      id: 1,
      name: 'Rick Sanchez test',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
        name: 'Origin',
      },
      location: {
        name: 'Location',
      },
      image: 'url',
    };

    characterListItemAlive = render(
      <CharacterListItem character={characterMock} />,
    );
  });

  it('<CharacterListItem />', () => {
    expect(characterListItemAlive).toBeDefined();
    characterListItemAlive.getByText(characterMock.name);
    characterListItemAlive.getByText(characterMock.status);
    characterListItemAlive.getByText(characterMock.gender);
    characterListItemAlive.getByText(characterMock.origin.name);
    characterListItemAlive.getByText(characterMock.location.name);
  });

  it('Bullet', () => {
    expect(
      characterListItemAlive.getByTestId('bullet').props.style.backgroundColor,
    ).toBe(COLORS.tertiary);

    characterMock.status = 'Dead';

    characterListItemDead = render(
      <CharacterListItem character={characterMock} />,
    );
    expect(
      characterListItemDead.getByTestId('bullet').props.style.backgroundColor,
    ).toBe(COLORS.gray);

    characterMock.status = 'unknown';

    characterListItemUnk = render(
      <CharacterListItem character={characterMock} />,
    );
    expect(
      characterListItemUnk.getByTestId('bullet').props.style.backgroundColor,
    ).toBe(COLORS.secondary);
  });
});
