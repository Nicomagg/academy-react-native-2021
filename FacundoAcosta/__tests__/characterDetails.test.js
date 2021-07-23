import React from "react";
import '@testing-library/jest-native/extend-expect';
import { render } from '@testing-library/react-native';
import CharacterDetails from '../Components/characterDetails';
import contextMock from '../mocks/contextMock';

describe('<CharacterDetails />',() => {
    let component;
    
    const character1 = contextMock.char.characters[0];
    const character2 = contextMock.char.characters[1];
    
    it('Renders Correctly with diferent Characters', () => {

        component = render (
            <CharacterDetails route={{ params: character1}}/>
        );
        expect(component.getByTestId('Character Details Image').props.source.uri).toBe(character1.image);
        expect(component.getByText('Name:')).toBeDefined();
        expect(component.getByText(character1.name)).toBeDefined();
        expect(component.getByText('Status:')).toBeDefined();
        expect(component.getByText(character1.status)).toBeDefined();
        expect(component.getByText('Species:')).toBeDefined();
        expect(component.getByText(character1.species)).toBeDefined();
        expect(component.getByText('Origin:')).toBeDefined();
        expect(component.getByText(character1.origin.name)).toBeDefined();
        expect(component.getByText('Location:')).toBeDefined();
        expect(component.getByText(character1.location.name)).toBeDefined();
        expect(component.getByText('Gender:')).toBeDefined();
        expect(component.getByText(character1.gender)).toBeDefined();


        component = render (
            <CharacterDetails route={{ params: character2}}/>
        );
        expect(component.getByTestId('Character Details Image').props.source.uri).toBe(character2.image);
        expect(component.getByText('Name:')).toBeDefined();
        expect(component.getByText(character2.name)).toBeDefined();
        expect(component.getByText('Status:')).toBeDefined();
        expect(component.getByText(character2.status)).toBeDefined();
        expect(component.getByText('Species:')).toBeDefined();
        expect(component.getByText(character2.species)).toBeDefined();
        expect(component.getByText('Origin:')).toBeDefined();
        expect(component.getByText(character2.origin.name)).toBeDefined();
        expect(component.getByText('Location:')).toBeDefined();
        expect(component.getByText(character2.location.name)).toBeDefined();
        expect(component.getByText('Gender:')).toBeDefined();
        expect(component.getByText(character2.gender)).toBeDefined();
    });
});