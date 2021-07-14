import React, { useContext } from 'react';
import { View , Text , FlatList } from 'react-native';
import { charactersContext } from './rick&mortyContext';

function CharacterPreView({ character }) {
    return (
        <Text>{character.name}</Text>
    );
}

function CharacterList() {

    const characters = useContext(charactersContext)[0];

    const renderCharacter = ({item}) => (
        <CharacterPreView character={item}/>
    )

    return (
        <View>
            <FlatList 
                data={characters}
                renderItem={renderCharacter}
                keyExtractor={character => character.id} 
            />
        </View>
    )
}

export default CharacterList;