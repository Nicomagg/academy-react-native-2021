import React from 'react';
import {View, TextInput} from 'react-native';
import {textInputStyles} from '../../styles/globalStyleSheet';

export default function SearchInput({inputValue, handleInputChange}) {
  return (
    <View>
      <TextInput
        style={textInputStyles.textInputStyle}
        placeholder="Search..."
        underlineColorAndroid="transparent"
        value={inputValue}
        onChangeText={text => {
          handleInputChange(text);
        }}
      />
    </View>
  );
}
