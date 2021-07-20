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

const styles = StyleSheet.create({
  container: {paddingHorizontal: 24},
  separator: {height: 20},
});

function areEqual(prevProps, nextProps) {
  if (JSON.stringify(prevProps.data) === JSON.stringify(nextProps.data)) {
    return true;
  }

  return false;
}

export default React.memo(CharactersList, areEqual);
