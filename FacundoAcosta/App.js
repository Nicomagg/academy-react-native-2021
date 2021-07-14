import 'react-native-gesture-handler';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Home from './Components/home';
import { CharactersProvider } from './Components/rick&mortyContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import CharacterDetails from './Components/characterDetails';
import RandomList from './Components/randomList';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function StackNav() {
  
  return (
    <Stack.Navigator initialRouteName="Rick and Morty">
      <Stack.Screen 
        name="Rick and Morty" 
        component={Home}
        options={{
          title: 'Rick & Morty',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold',
            marginLeft: 120,
          }
        }} />
      <Stack.Screen 
        name="characterDetails" 
        component={CharacterDetails} 
        options={({ route }) => ({ title: route.params.name })} />
    </Stack.Navigator>
  )
}


function App() {
  
  return (
    <CharactersProvider>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name='Drawer/home' component={StackNav}/>
          <Drawer.Screen name='All Locations' component={RandomList} />
          <Drawer.Screen name='All Episodes' component={RandomList} />
        </Drawer.Navigator>
      </NavigationContainer>
    </CharactersProvider>
  )
}

const styles = StyleSheet.create({
})

export default App;
