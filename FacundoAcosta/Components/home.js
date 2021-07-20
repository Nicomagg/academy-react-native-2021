import React from 'react';
import { View } from 'react-native';

import CharacterList from './charactersList';
import SearchBar from './searchBar';

function Home() {

    return (
    <View style={{flex: 0.9}}>
        <SearchBar />
        <CharacterList/>
    </View>
    ) 
    
}

export default Home;