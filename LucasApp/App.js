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
    </Stack.Navigator>
  );
};

const homeStackOptions = {
  headerTitleAlign: 'center',
  headerRight: () => <MenuIcon />,
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerPosition="right"
        drawerContentOptions={drawerContentOptions}>
        <Drawer.Screen name="Home" component={HomeStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const drawerContentOptions = {
  activeBackgroundColor: 'white',
  activeTintColor: 'black',
  labelStyle: {fontSize: 18},
};

export default App;
