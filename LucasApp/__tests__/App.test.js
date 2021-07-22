import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import App from '../App';

jest.mock('react-native-iphone-x-helper');

let component;

describe('<App />', () => {
  test('Renders Menu icon that opens drawer', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({response: []}),
      }),
    );
    component = render(<App />);
    const menuButton = await component.findByTestId('menuButton');

    expect(menuButton).toBeTruthy();
  });

  test('Opens All Locations screen', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({response: []}),
      }),
    );

    component = render(<App />);

    const oldScreen = component.queryByText('Rick & Morty');
    const menuButton = await component.findByTestId('menuButton');

    expect(oldScreen).toBeTruthy();

    fireEvent(menuButton, 'press');
    const button = await component.findByText('All Locations');

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            results: [
              {
                id: 1,
                name: 'Adabango',
                type: 'Planet',
                dimension: 'Dimension C-137',
                created: '2017-11-10T12:42:04.162Z',
              },
            ],
          }),
      }),
    );

    fireEvent(button, 'press');

    const newScreen = await component.findByText('Adabango');

    expect(newScreen).toBeTruthy();
  });
});
