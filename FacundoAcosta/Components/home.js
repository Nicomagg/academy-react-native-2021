import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { charactersContext } from './rick&mortyContext';
import CharacterList from './charactersList';


function Home() {

    return (
    <View>
        <CharacterList />
    </View>
    ) 
    
}

export default Home;