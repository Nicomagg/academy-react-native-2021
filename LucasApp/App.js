/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from './pages/Home';
import MenuIcon from './components/MenuIcon';
import AllLocations from './pages/AllLocations';
import AllEpisodes from './pages/AllEpisodes';
import CharacterDetails from './pages/CharacterDetails';
import BackButton from './components/BackButton';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Rick & Morty"
        component={Home}
        options={homeStackOptions}
      />
      <Stack.Screen
        name="Character Details"
        component={CharacterDetails}
        options={drawerScreenOptions}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerPosition="right"
        drawerContentOptions={drawerContentOptions}
        drawerStyle={drawerStyles}>
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen
          options={drawerScreenOptions}
          name="All Locations"
          component={AllLocations}
        />
        <Drawer.Screen
          options={drawerScreenOptions}
          name="All Episodes"
          component={AllEpisodes}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const homeStackOptions = {
  headerTitleAlign: 'center',
  headerRight: () => <MenuIcon />,
};

const drawerScreenOptions = {
  headerShown: true,
  headerTitleAlign: 'center',
  headerLeft: () => <BackButton />,
};

const drawerStyles = {
  borderTopStartRadius: 30,
  borderBottomStartRadius: 30,
  paddingTop: 30,
};

const drawerContentOptions = {
  activeBackgroundColor: 'white',
  activeTintColor: 'black',
  labelStyle: {fontSize: 18},
};

export default App;
