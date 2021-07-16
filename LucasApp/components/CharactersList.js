import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import CharacterItem from './CharacterItem';

const Separator = () => {
  return <View style={styles.separator} />;
};

const NoResults = () => {
  return <Text>No results.</Text>;
};

const CharactersList = ({data}) => {
  return (
    <FlatList
      style={styles.container}
      data={data}
      ItemSeparatorComponent={Separator}
      ListFooterComponent={Separator}
      ListHeaderComponent={Separator}
      renderItem={({item}) => <CharacterItem data={item} />}
      keyExtractor={item => item.id}
      ListEmptyComponent={NoResults}
    />
  );
};

export default CharactersList;

const styles = StyleSheet.create({
  container: {paddingHorizontal: 24},
  separator: {height: 20},
});
