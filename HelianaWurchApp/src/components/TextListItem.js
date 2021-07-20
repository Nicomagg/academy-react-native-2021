import React from 'react';
import {View, Text} from 'react-native';

import {textListStyles} from '../styles/globalStyleSheet';

export default function EpisodeListItem({text}) {
  return (
    <View style={textListStyles.text_list_container}>
      <Text style={textListStyles.text_list}>{text.name}</Text>
    </View>
  );
}
