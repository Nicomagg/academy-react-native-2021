import React from 'react';
import {Text, View} from 'react-native';

import {globalStyles} from '../styles/globalStyleSheet';

export default function NoResults() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>
        Sorry, we couldn't find any character for your search!
      </Text>
    </View>
  );
}
