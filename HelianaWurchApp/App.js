import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {CharactersContextProvider} from './src/contexts/CharactersContext';
import CharacterList from './src/views/CharacterList';

const Stack = createStackNavigator();

const App = () => (
  <CharactersContextProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CharacterList"
          component={CharacterList}
          options={{title: 'Rick & Morty'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </CharactersContextProvider>
);

export default App;
