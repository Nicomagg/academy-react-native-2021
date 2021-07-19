//Basics imports
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';

// Navigations imports
import Icon  from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'

//Components Imports
import CharacterDetails from './Components/characterDetails';
import CommonList from './Components/commonList';
import ErrorPage from './Components/errorPage';
import DrawerContent from './Components/drawerContent';
import Home from './Components/home';
import { CharactersProvider } from './Components/rick&mortyContext';


const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function StackHomeNav({navigation}) {
  
  return (
    <CharactersProvider>
      <Stack.Navigator initialRouteName="Rick and Morty">
        <Stack.Screen 
          name="Rick and Morty" 
          component={Home}
          options={{
            title: 'Rick & Morty',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: 'bold',
            },
            headerRight: () => (
              <Icon.Button name="menu" size={30}
              backgroundColor='white' color='black'
              onPress={ () => navigation.openDrawer()}></Icon.Button>
            )
          }}
        />
        <Stack.Screen 
          name="characterDetails" 
          component={CharacterDetails} 
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen 
          name="All Locations"
          component={CommonList}
          options={{
            title: 'Rick & Morty - All Locations',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            }
          }}
          initialParams={{ url:'https://rickandmortyapi.com/api/location/?'}}
        />
        <Stack.Screen 
          name="All Episodes"
          component={CommonList}
          options={{
            title:'Rick & Morty - All Episodes',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            }
          }}
          initialParams={{ url:'https://rickandmortyapi.com/api/episode/?' }}
        />
      </Stack.Navigator>
    </CharactersProvider>   
  )
}

function App() {
  
  return (
  <NavigationContainer>
      <Drawer.Navigator drawerPosition='right' drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name='Drawer/home' component={StackHomeNav}/>
        <Drawer.Screen name='errorPage' component={ErrorPage} />
      </Drawer.Navigator>
  </NavigationContainer>
    
  )
}

const styles = StyleSheet.create({
})

export default App;
