import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

const Item = ({data}) => {
  return <Text style={styles.item}>{data.name}</Text>;
};

const ItemsList = ({data}) => {
  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={({item}) => <Item data={item} />}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  container: {paddingHorizontal: 24},
  item: {fontSize: 18, paddingVertical: 12, paddingHorizontal: 8},
});

function areEqual(prevProps, nextProps) {
  if (JSON.stringify(prevProps.data) === JSON.stringify(nextProps.data)) {
    return true;
  }

  return false;
}

export default React.memo(ItemsList, areEqual);
