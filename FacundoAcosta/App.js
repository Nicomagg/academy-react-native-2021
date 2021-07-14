import React from 'react';
import { View, StyleSheet } from 'react-native';
import Home from './Components/home';
import { CharactersProvider } from './Components/rick&mortyContext'

function App() {
  
  return (
    <CharactersProvider>
        <Home />
    </CharactersProvider>
  )
}

const styles = StyleSheet.create({
})

export default App;
