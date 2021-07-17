import React, { useContext } from 'react';
import { View , StyleSheet , FlatList, TouchableHighlight } from 'react-native';
import { charactersContext } from './rick&mortyContext';
import CharacterPreView from './characterPreView';
import { useNavigation } from '@react-navigation/native';

function CharacterList() {

    const { char, more, page, searchLabel, searchVal } = useContext(charactersContext);

    const navigation = useNavigation();

    const loadMoreCharactes = () => {
        if (more.hasMore) {
            const nextPage = page.characterPage + 1;
            page.setCharacterPage(nextPage);
        }
    }

    const handleSearch = (data) => {
        if (searchVal.query != '') {
            if (searchLabel.filter === 'Name') return data.filter(character => (character.name.toLowerCase().indexOf(searchVal.query) > -1));
            else if (searchLabel.filter === 'Location') return data.filter(character => (character.location.name.toLowerCase().indexOf(searchVal.query) > -1));
            // else if (searchLabel.filter === 'Episode') return data.filter(character => (character.episode.name.toLowerCase().indexOf(searchVal.query) > -1));
        }
        return data;
    }
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
                data={handleSearch(char.characters)}
                ItemSeparatorComponent={itemSeparator}
                ListFooterComponent={itemSeparator}
                ListHeaderComponent={itemSeparator}
                renderItem={renderCharacter}
                onEndReached={loadMoreCharactes}
                keyExtractor={character => character.id} 
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default CharacterList;