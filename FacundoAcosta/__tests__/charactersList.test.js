import React from "react";
import '@testing-library/jest-native/extend-expect';
import { fireEvent, render } from '@testing-library/react-native';
import CharacterList from '../Components/charactersList';
import { charactersContext } from '../Components/rick&mortyContext';
import contextMock from '../mocks/contextMock';


const mockedNavigation = jest.fn();

    jest.mock('@react-navigation/native', () => {
        const actualNav = jest.requireActual('@react-navigation/native');
        return {
            ...actualNav,
            useNavigation: () => ({
                navigate: mockedNavigation,
            }),
        };
    });

describe("<characters List />", () => {

    let component;

    const eventData = {
        nativeEvent: {
            contentOffset: {
                y: 500,
            },
            contentSize: {
                // Dimensions of the scrollable content
                height: 500,
                width: 100,
            },
            layoutMeasurement: {
                // Dimensions of the device
                height: 100,
                width: 100,
            },
        },
    };

    beforeEach(() => {
        component = render(
            <charactersContext.Provider value={contextMock}>
                <CharacterList />
            </charactersContext.Provider>
        );
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("Render correctly with characters", () => {
        expect(component).toBeDefined();
        expect(component.getByTestId('Characters List')).toBeDefined();
        expect(component.queryAllByTestId('Characters Preview').length).toEqual(2);
        expect(component.queryAllByTestId('Location and Episode view').length).toEqual(0);
    });

    it("Render correctly with locations", () => {
        contextMock.char.characters= [
            {
                id: 1,
                name: 'location1'
            },
            {
                id: 2,
                name: 'location2'
            }
        ]

        contextMock.searchLabel.filter = 'location';

        component = render(
            <charactersContext.Provider value={contextMock}>
                <CharacterList />
            </charactersContext.Provider>
        );

        expect(component).toBeDefined();
        expect(component.getByTestId('Characters List')).toBeDefined();
        expect(component.queryAllByTestId('Characters Preview').length).toEqual(0);
        expect(component.queryAllByTestId('Location and Episode view').length).toEqual(2);
        expect(component.getByText(contextMock.char.characters[0].name)).toBeDefined();
        expect(component.getByText(contextMock.char.characters[1].name)).toBeDefined();
    });

    it("Render correctly with episodes", () => {
        contextMock.char.characters = [
            {
                id: 1,
                name: 'episode1'
            },
            {
                id: 2,
                name: 'episode2'
            }
        ]

        contextMock.searchLabel.filter = 'episode';

        component = render(
            <charactersContext.Provider value={contextMock}>
                <CharacterList />
            </charactersContext.Provider>
        );

        expect(component).toBeDefined();
        expect(component.getByTestId('Characters List')).toBeDefined();
        expect(component.queryAllByTestId('Characters Preview').length).toEqual(0);
        expect(component.queryAllByTestId('Location and Episode view').length).toEqual(2);
        expect(component.getByText(contextMock.char.characters[0].name)).toBeDefined();
        expect(component.getByText(contextMock.char.characters[1].name)).toBeDefined();
        
    });

    it("Should change page state one time on scroll end", () => {
        fireEvent.scroll(component.getByTestId('Characters List'), eventData );
        expect(contextMock.page.setPage).toHaveBeenCalledTimes(1);
        expect(contextMock.page.setPage).toHaveBeenCalledWith(contextMock.page.Page + 1);
    });

    it("Shouldn't change page on scroll end when has more equals false", () => {

        contextMock.more.hasMore = false;

        component = render(
            <charactersContext.Provider value={contextMock}>
                <CharacterList />
            </charactersContext.Provider>
        );

        fireEvent.scroll(component.getByTestId('Characters List'), eventData);
        expect(contextMock.page.setPage).not.toHaveBeenCalled();
    });

    it("Handle Search Wirking Well", () => {
        contextMock.char.characters = [
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
                "name": "Beth Smith",
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
        ]
        contextMock.searchLabel.filter = 'character';
        contextMock.searchVal.query = contextMock.char.characters[0].name;

        component = render(
            <charactersContext.Provider value={contextMock}>
                <CharacterList />
            </charactersContext.Provider>
        );

        expect(component.getByTestId('Characters List')).toBeDefined();
        expect(component.queryAllByTestId('Characters Preview').length).toEqual(1);
        expect(component.getByText(contextMock.char.characters[0].name)).toBeDefined();
        expect(component.queryByText(contextMock.char.characters[1].name)).toBeNull();
    });

    it("Navigates to Character Details", () => {
        contextMock.searchVal.query = '';

        component = render(
            <charactersContext.Provider value={contextMock}>
                <CharacterList />
            </charactersContext.Provider>
        );

        fireEvent.press(component.getAllByTestId('Characters Preview')[0]);
        fireEvent.press(component.getAllByTestId('Characters Preview')[1]);
        expect(mockedNavigation).toHaveBeenCalledTimes(2);

        expect(mockedNavigation).toHaveBeenCalledWith('characterDetails',contextMock.char.characters[0]);

        expect(mockedNavigation).toHaveBeenLastCalledWith('characterDetails',contextMock.char.characters[1]);
    });
});

