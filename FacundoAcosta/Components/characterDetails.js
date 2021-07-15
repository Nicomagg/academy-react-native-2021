import React from 'react';
import { View, Text } from 'react-native';

function CharacterDetails({ route }) {
    
    return (
        <View>
            <Text>{route.params.name}</Text>
        </View>
    );
}

export default CharacterDetails;