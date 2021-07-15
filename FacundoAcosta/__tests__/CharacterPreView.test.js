import React from "react";
import '@testing-library/jest-native/extend-expect';
import { render } from '@testing-library/react-native';
import CharacterPreView from '../Components/characterPreView'

describe('<CharacterPreView />', () => {
    
    
    let characterPreView;

    const characterMock = {
        id: 1,
        name: 'rick test',
        status: 'Alive',
        species: 'Alien',
        origin: {
            name: 'Origin test'
        },
        location: {
            name: 'Location test'
        },
        image: jest.fn()
    }

    beforeEach(() => {
        characterPreView = render(
            <CharacterPreView character={characterMock} />
        )
    });

    test('Rendering Text Elements', () => {

        characterPreView.getByText(characterMock.name);
        characterPreView.getByText(characterMock.status);
        characterPreView.getByText(characterMock.species);
        characterPreView.getByText(characterMock.origin.name);
        characterPreView.getByText(characterMock.location.name);
  
    })
})