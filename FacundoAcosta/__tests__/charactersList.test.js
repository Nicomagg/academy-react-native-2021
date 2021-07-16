import React, { Component } from "react";
import '@testing-library/jest-native/extend-expect';
import { fireEvent, render } from '@testing-library/react-native';
import CharacterList from '../Components/charactersList'
import { charactersContext } from '../Components/rick&mortyContext'

describe('<characters List />', () => {

    let component;

    const [characters , setCharacters] = [
        [
            {
                "id": 361,
                "name": "Toxic Rick",
                "status": "Dead",
                "species": "Humanoid",
                "type": "Rick's Toxic Side",
                "gender": "Male",
                "origin": {
                    "name": "Alien Spa",
                    "url": "https://rickandmortyapi.com/api/location/64"
                },
                "location": {
                    "name": "Earth",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/361.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/27"
                ],
                "url": "https://rickandmortyapi.com/api/character/361",
                "created": "2018-01-10T18:20:41.703Z"
            },
            {
                "id": 362,
                "name": "Toxic Rick",
                "status": "Dead",
                "species": "Humanoid",
                "type": "Rick's Toxic Side",
                "gender": "Male",
                "origin": {
                    "name": "Alien Spa",
                    "url": "https://rickandmortyapi.com/api/location/64"
                },
                "location": {
                    "name": "Earth",
                    "url": "https://rickandmortyapi.com/api/location/20"
                },
                "image": "https://rickandmortyapi.com/api/character/avatar/361.jpeg",
                "episode": [
                    "https://rickandmortyapi.com/api/episode/27"
                ],
                "url": "https://rickandmortyapi.com/api/character/361",
                "created": "2018-01-10T18:20:41.703Z"
            }
        ],
        jest.fn()
    ];

    beforeEach(() => {

        component = render(
            <charactersContext.Provider value={[characters, setCharacters]}>
                <CharacterList />
            </charactersContext.Provider>
        );
    });

    it('Render Correctly', () => {
        expect(component).toBeDefined();
        expect(component.getByTestId('Characters List')).toBeDefined();
        console.log(component.debug());
        expect(component.queryAllByTestId('Characters Cards').length).toEqual(2);
    });
});

