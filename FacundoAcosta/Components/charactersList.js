import React, { useContext } from 'react';
import { View , StyleSheet , FlatList, TouchableHighlight, Text } from 'react-native';
import { charactersContext } from './rick&mortyContext';
import CharacterPreView from './characterPreView';
import { useNavigation } from '@react-navigation/native';

function CharacterList() {

    const { char, more, page, searchLabel, searchVal } = useContext(charactersContext);

    const navigation = useNavigation();

    const loadMoreCharactes = () => {
        if (more.hasMore) {
            const nextPage = page.Page + 1;
            page.setPage(nextPage);
        }
    }

    const handleSearch = () => {
        return char.characters.filter(character => (character.name.toLowerCase().indexOf(searchVal.query.toLowerCase()) > -1));
    }
    const renderCharacter = ({item}) => {
        if (searchLabel.filter == 'character') {
            return (
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor='#DDDDDD'
                    onPress={()=> navigation.navigate('characterDetails', item)}
                    >
                    <CharacterPreView character={item}/>
                </TouchableHighlight>
            );
        } else {
            return (
                <Text style={styles.component} >{item.name}</Text>
            );
        }
        
    }

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
    component: {
        width: '80%',
        alignSelf: 'center',
        fontSize: 22,
    }
});

export default CharacterList;