import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const AllLocations = () => {
  return (
    <View style={styles.container}>
      <Text>All Locations</Text>
    </View>
  );
};

export default AllLocations;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});
