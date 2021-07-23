import React from 'react';
import { render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import ErrorPage from '../Components/errorPage';

describe('<ErrorPage />', () => {

    it('Renders Correctly', () => {
        const { getByText } = render(<ErrorPage />);

        expect(getByText('Error')).toBeDefined();
    })
})