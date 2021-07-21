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
        image: 'url'
    }

    beforeEach(() => {
        characterPreView = render(
            <CharacterPreView character={characterMock} />
        )
    });

    it('Renders Text Elements', () => {
        expect(characterPreView).toBeDefined();
        characterPreView.getByText(characterMock.name);
        characterPreView.getByText(`${characterMock.status} ${characterMock.species}`);
        characterPreView.getByText(characterMock.origin.name);
        characterPreView.getByText(characterMock.location.name);
        characterPreView.getByText('Last known location:');
        characterPreView.getByText('First seen in:');
        expect(characterPreView.getByTestId('CollorBullet').props.style.backgroundColor).toBe('green');
    });

    it('collor bullet backgroundColor deppending on character status', () =>{

        expect(characterPreView.getByTestId('CollorBullet').props.style.backgroundColor).toBe('green');

        characterMock.status = 'Dead';
        characterPreView = render(
            <CharacterPreView character={characterMock} />
        );
        expect(characterPreView.getByTestId('CollorBullet').props.style.backgroundColor).toBe('yellow');

        characterMock.status = 'unknown';
        characterPreView = render(
            <CharacterPreView character={characterMock} />
        );
        expect(characterPreView.getByTestId('CollorBullet').props.style.backgroundColor).toBe('grey');
    });
})