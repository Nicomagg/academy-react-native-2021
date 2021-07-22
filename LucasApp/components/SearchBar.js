import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {Icon} from 'react-native-elements';

const SearchBar = props => {
  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <Icon
          style={styles.icon}
          name="search"
          type="font-awesome"
          color="#000000"
          testID="search-icon"
        />
        <TextInput
          clearButtonMode="unless-editing"
          style={styles.input}
          onChangeText={text => props.handleSearch(text)}
          testID="search-input"
        />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
  bar: {
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1.5,
    borderRadius: 30,
  },
  icon: {
    justifyContent: 'center',
    flex: 1,
    width: 50,
  },
  input: {
    paddingVertical: 5,
    paddingLeft: 0,
    paddingRight: 35,
    fontSize: 16,
    flex: 1,
  },
});
