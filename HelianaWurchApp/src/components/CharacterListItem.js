import React from 'react';
import {Image, Text, View} from 'react-native';
import {globalStyles} from '../styles/globalStyleSheet';

export default function CharacterListItem({character}) {
  return (
    <View style={globalStyles.container}>
      <Image source={{uri: character.image}} style={globalStyles.image} />
      <View style={globalStyles.infoContainer}>
        <Text style={globalStyles.character_name}>{character.name}</Text>
        <Text>
          Gender:
          <Text style={globalStyles.character_info}> {character.gender}</Text>
        </Text>

        <Text>
          Last known location: {''}
          <Text style={globalStyles.character_info}>
            {character.location.name}
          </Text>
        </Text>
        <Text>
          Status:
          <Text style={globalStyles.character_info}> {character.status}</Text>
        </Text>
        <Text>
          First seen in:
          <Text style={globalStyles.character_info}>
            {' '}
            {character.origin.name}
          </Text>
        </Text>
      </View>
    </View>
  );
}
