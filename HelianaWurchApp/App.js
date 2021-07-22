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

import CharacterProfile from './src/views/CharacterProfile';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function AllEpisodes() {
  return (
    <AllEpisodesContextProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="Episodes List"
          component={EpisodeList}
          options={{title: 'Episodes'}}
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
          options={{title: 'Locations'}}
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
        <Stack.Screen
          name="CharacterProfile"
          component={CharacterProfile}
          options={{title: 'Character Profile'}}
        />
      </Stack.Navigator>
    </CharactersContextProvider>
  );
}

const App = () => (
  <NavigationContainer>
    <Drawer.Navigator
      initialRouteName="Home"
      drawerPosition="right"
      jumpTo="Home">
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Drawer.Screen
        name="All Episodes"
        component={AllEpisodes}
        options={{title: 'Episodes'}}
      />
      <Drawer.Screen
        name="AllLocations"
        component={AllLocations}
        options={{title: 'Locations'}}
      />
    </Drawer.Navigator>
  </NavigationContainer>
);
export default App;
