import React, { useContext } from 'react';
import { View , StyleSheet , FlatList, TouchableHighlight } from 'react-native';
import { charactersContext } from './rick&mortyContext';
import CharacterPreView from './characterPreView';
import { useNavigation } from '@react-navigation/native';

function CharacterList() {

    const characters = useContext(charactersContext)[0];

    const navigation = useNavigation();

    const renderCharacter = ({item}) => (
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor='#DDDDDD'
            onPress={()=> navigation.navigate('characterDetails', item)}
            >
            <CharacterPreView character={item}/>
        </TouchableHighlight>
    )
    
    const itemSeparator = () => {
        return (
            <View style={{height:10, width: '100%'}} />
        )
    }
    return (
        <View style={styles.container}>
            <FlatList 
                data={characters}
                ItemSeparatorComponent={itemSeparator}
                ListFooterComponent={itemSeparator}
                ListHeaderComponent={itemSeparator}
                renderItem={renderCharacter}
                keyExtractor={character => character.id} 
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default CharacterList;