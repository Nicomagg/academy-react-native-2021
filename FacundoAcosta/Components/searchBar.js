import React, { useContext } from 'react';
import { View , TextInput ,StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Ionicons';

import { charactersContext } from './rick&mortyContext';

function SearchBar() {
    const { searchVal , searchLabel, page , char } = useContext(charactersContext);

    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <Icon style={styles.icon} name="search-outline" size={30} />
                <TextInput 
                    style={styles.textInput} 
                    name='search' 
                    onChangeText={value => searchVal.setQuery(value)}
                    value={searchVal.query} 
                    placeholder='Search'
                />
            </View>
            <Picker
                selectedValue={searchLabel.filter}
                style={{ height: 40, width: 100 , flex:0.5}}
                mode='dropdown'
                onValueChange={({ itemValue ,nativeEvent }) => {
                    if (nativeEvent) itemValue = nativeEvent.itemValue;
                    searchLabel.setFilter(itemValue);
                    char.setCharacters([]);
                    page.setPage(1);
                }}
                testID={'Search Bar Picker'}
            >
                <Picker.Item label="Characters" value="character" />
                <Picker.Item label="Location" value="location" />
                <Picker.Item label="Episode" value="episode" />
            </Picker>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    searchBar: {
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 20,
        height: 40,
        alignSelf: 'center',
        marginLeft: 15,
        flex: 0.75
    },
    icon: {
        alignSelf: 'center',
        marginLeft: 5
    },
    textInput: {
        flex: 0.95
    }
})

export default SearchBar;