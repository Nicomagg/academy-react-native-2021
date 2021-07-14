import 'react-native-gesture-handler';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Home from './Components/home';
import { CharactersProvider } from './Components/rick&mortyContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CharacterDetails from './Components/characterDetails';

const Stack = createStackNavigator();

function App() {
  
  return (
    <CharactersProvider>
      <NavigationContainer>
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
      </NavigationContainer>
    </CharactersProvider>
  )
}

const styles = StyleSheet.create({
})

export default App;
