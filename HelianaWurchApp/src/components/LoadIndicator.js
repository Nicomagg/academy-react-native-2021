import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import {COLORS} from '../styles/globalStyleSheet';

export default function LoadIndicator() {
  return (
    <View>
      <ActivityIndicator size="large" color={COLORS.secondary} />
    </View>
  );
}
