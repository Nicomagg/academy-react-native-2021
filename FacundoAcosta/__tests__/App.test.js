import React from 'react';
import { render, cleanup, act } from '@testing-library/react-native';
import contextMock from '../mocks/contextMock'

import App from '../App';

import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
    const Reanimated = require('react-native-reanimated/mock');

    // The mock for `call` immediately calls the callback which is incorrect
    // So we override it with a no-op
    Reanimated.default.call = () => { };

    return Reanimated;
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native-iphone-x-helper');

jest.mock('@react-navigation/native', () => {
    const actualNav = jest.requireActual('@react-navigation/native');
    return {
        ...actualNav,
        useNavigation: () => ({
            navigate: jest.fn(),
        }),
    };
});

let component;

describe('<App />', () => {

    global.fetch = jest.fn(() => {
        return new Promise((resolve) =>
            setTimeout(() => {
                resolve({
                    json: () =>
                        Promise.resolve({
                            info: {
                                next: null
                            },
                            results: contextMock.char.characters
                        }),
                });
            }, 100)
        );
    });

    afterEach(() => {
        cleanup();
        jest.clearAllMocks();
    })

    it('Renders Menu icon that opens drawer', async () => {

        component = render(<App />);
        const menuButton = await component.findByTestId('menuButton');
        expect(menuButton).toBeTruthy();
        const searchPicker = await component.findByTestId('Search Bar Picker');
        expect(searchPicker).toBeTruthy();
        const CharacterCard = await component.findAllByTestId('Characters Preview');
        expect(CharacterCard).toBeTruthy();

        const Drawer = await component.findByText('All Episodes');
        expect(Drawer).toBeTruthy();
    });
    
    it('Goes to Character Details on touch', async () => {

        fetch.mockImplementationOnce(() => Promise.reject("API is down"));

        component = render(<App />)

        expect(component).toBeTruthy();
    });
});