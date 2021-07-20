import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {createStackNavigator} from '@react-navigation/stack';

import {CharactersContextProvider} from './src/contexts/CharactersContext';
import {AllEpisodesContextProvider} from './src/contexts/AllEpisodesContext';
import {AllLocationsContextProvider} from './src/contexts/AllLocationsContext';

import CharacterList from './src/views/CharacterList';
import EpisodeList from './src/views/EpisodeList';
import LocationList from './src/views/LocationList';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function AllEpisodes() {
  return (
    <AllEpisodesContextProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="Episodes List"
          component={EpisodeList}
          options={{title: 'All Episodes'}}
        />
      </Stack.Navigator>
    </AllEpisodesContextProvider>
  );
}

function AllLocations() {
  return (
    <AllLocationsContextProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="LocationList"
          component={LocationList}
          options={{title: 'All Locations'}}
        />
      </Stack.Navigator>
    </AllLocationsContextProvider>
  );
}

function HomeScreen({navigation}) {
  return (
    <CharactersContextProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="CharacterList"
          component={CharacterList}
          options={{title: 'Rick & Morty'}}
        />
      </Stack.Navigator>
    </CharactersContextProvider>
  );
}

const App = () => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home" drawerPosition="right">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="All Episodes" component={AllEpisodes} />
      <Drawer.Screen name="All Locations" component={AllLocations} />
    </Drawer.Navigator>
  </NavigationContainer>
);
export default App;
