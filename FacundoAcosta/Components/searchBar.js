import React, { useState } from 'react';
import { View , TextInput ,StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Ionicons'

function SearchBar() {
    const [selectedValue, setSelectedValue] = useState("java");

    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <Icon style={styles.icon} name="search-outline" size={30} />
                <TextInput style={styles.textInput} placeholder='Search'/>
            </View>
            <Picker
                selectedValue={selectedValue}
                style={{ height: 40, width: 100 , flex:0.5}}
                mode='dropdown'
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Location" value="java" />
                <Picker.Item label="Episodes" value="js" />
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
        flex: 0.85
    },
    icon: {
        alignSelf: 'center',
        marginLeft: 5
    },
    textInput: {
        flex: 0.95,
    }
})

export default SearchBar;