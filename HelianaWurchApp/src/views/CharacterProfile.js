import React from 'react';
import {Text, Image, View, ScrollView} from 'react-native';
import {characterProfileStyles} from '../styles/globalStyleSheet';

export default function CharacterProfile({route}) {
  const item = route.params;
  const charProfileInfo = item.item;

  const textName = characterProfileStyles.character_name;
  const textSpecies = characterProfileStyles.character_species;
  const textInfo = characterProfileStyles.character_text;
  const textInfoBold = characterProfileStyles.character_bold_text;
  const characterProfImg = characterProfileStyles.image;
  const containerGeneral = characterProfileStyles.container;
  const containerInfo = characterProfileStyles.container_info;
  const containerBox = characterProfileStyles.container_box;

  return (
    <ScrollView>
      <View>
        <Image
          source={{uri: charProfileInfo.image}}
          style={characterProfImg}
          resizeMode="cover"
        />
        <View style={containerGeneral}>
          <Text style={textName}>{charProfileInfo.name}</Text>
          <Text style={textSpecies}>{charProfileInfo.species}</Text>
        </View>
        <View style={containerInfo}>
          <View style={containerBox}>
            <Text style={textInfoBold}>
              Genre: {''}
              <Text style={textInfo}>{charProfileInfo.gender}</Text>
            </Text>
            <Text style={textInfoBold}>
              Last Known Location: {''}
              <Text style={textInfo}>{charProfileInfo.location.name}</Text>
            </Text>
          </View>
          <View style={containerBox}>
            <Text style={textInfoBold}>
              Status: {''}
              <Text style={textInfo}>{charProfileInfo.status}</Text>
            </Text>
            <Text style={textInfoBold}>
              Origin: {''}
              <Text style={textInfo}>{charProfileInfo.origin.name}</Text>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
