import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import { charactersContext } from './rick&mortyContext';
import CharacterList from './charactersList';


function Home() {

    const [characters , setCharacters ] = useContext(charactersContext);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
        .then(res => res.json())
        .then(data => setCharacters(data.results))
    }, [])
    

    return (
        <View>
            <CharacterList />
        </View>
    )
}

export default Home;