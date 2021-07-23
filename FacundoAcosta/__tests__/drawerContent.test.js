import React from "react";
import '@testing-library/jest-native/extend-expect';
import { fireEvent, render } from '@testing-library/react-native';
import DrawerContent from '../Components/drawerContent';
import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
    const Reanimated = require('react-native-reanimated/mock');

    // The mock for `call` immediately calls the callback which is incorrect
    // So we override it with a no-op
    Reanimated.default.call = () => { };

    return Reanimated;
});

const mockedNavigate = jest.fn();

const mockedCloseDrawer = jest.fn();

describe('<DrawerContent />', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('Reders Correctly', () => {

        const { getByText, getByTestId , debug } = render(
            <DrawerContent navigation={{ navigate: mockedNavigate, closeDrawer: mockedCloseDrawer }} />
        );
        expect(getByText('All Episodes')).toBeDefined();
        expect(getByText('All Locations')).toBeDefined();
        expect(getByText('Close')).toBeDefined();
        expect(getByTestId('close drawer icon')).toBeDefined();
    });

    it('Redirects on click', () => {

        const { getByText } = render(
            <DrawerContent navigation={{ navigate: mockedNavigate, closeDrawer: mockedCloseDrawer }} />
        );
        fireEvent.press(getByText('All Locations'));
        expect(mockedNavigate).toHaveBeenCalledWith('All Locations');
        fireEvent.press(getByText('All Episodes'));
        expect(mockedNavigate).toHaveBeenLastCalledWith('All Episodes');
    });


    it('Closes the Drawer', () => {

        const { getByText } = render(
            <DrawerContent navigation={{ navigate: mockedNavigate, closeDrawer: mockedCloseDrawer }} />
        );
        fireEvent.press(getByText('Close'));
        expect(mockedCloseDrawer).toHaveBeenCalledTimes(1);
    });

});
