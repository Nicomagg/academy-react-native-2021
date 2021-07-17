import React from 'react';
import {View, TextInput} from 'react-native';
import {textInputStyles} from '../../styles/globalStyleSheet';

export default function SearchInput() {
  return (
    <View>
      <TextInput
        style={textInputStyles.textInputStyle}
        placeholder="Search..."
        underlineColorAndroid="transparent"
        // value={}
        // onChangeText={}
      />
    </View>
  );
}
