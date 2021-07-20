import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const AllEpisodes = () => {
  return (
    <View style={styles.container}>
      <Text>All Episodes</Text>
    </View>
  );
};

export default AllEpisodes;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
