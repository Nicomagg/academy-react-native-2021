import React from "react";
import '@testing-library/jest-native/extend-expect';
import { fireEvent, NativeTestEvent , render } from '@testing-library/react-native';
import contextMock from '../mocks/contextMock';
import { charactersContext } from '../Components/rick&mortyContext'

import SearchBar from '../Components/searchBar';

describe('<SearchBar />', () => {

    let component;

    beforeEach(() => {
        component = render(
            <charactersContext.Provider value={contextMock}>
                <SearchBar />
            </charactersContext.Provider>
        );
    });

    it("Render correctly with characters", () => {
        expect(component).toBeDefined();
        expect(component.getByPlaceholderText('Search')).toBeDefined();
        expect(component.getByTestId('Search Bar Picker')).toBeDefined();
        expect(component.getByTestId('Search Bar Picker').props.items.length).toEqual(3);
        expect(component.getByTestId('Search Bar Picker').props.items[0].label).toBe('Characters');
        expect(component.getByTestId('Search Bar Picker').props.items[1].label).toBe('Location');
        expect(component.getByTestId('Search Bar Picker').props.items[2].label).toBe('Episode');
        expect(component.getByTestId('Search Bar Picker').props.selectedIndex).toEqual(0);
    });

    it("Render correctly with characters", () => {
        fireEvent.changeText(component.getByPlaceholderText('Search'), 'asd');
        expect(contextMock.searchVal.setQuery).toHaveBeenCalledWith('asd');
    });

    // it("Render correctly with characters", () => {
    //     component.debug();
    //     fireEvent.change(component.getByTestId('Search Bar Picker'), { nativeEvent: { value: 'a' } });
    //     component.debug();
    //     expect(contextMock.searchVal.setQuery).toHaveBeenCalledWith('asd');
    // });

});